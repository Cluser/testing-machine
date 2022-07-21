from datetime import date, datetime
from decimal import Decimal
import datetime, logging
import xlsxwriter
import json

def create_simple_report(folderName):

    with open('C:/Users/Dell/Desktop/aplikacje/testing-machine/server/config.json') as json_data_file:
        datajson = json.load(json_data_file)
    
    workbook = xlsxwriter.Workbook(datajson['reports']['location'] + folderName + ".xlsx")
 
    worksheet = workbook.add_worksheet("Raport")
    worksheet.set_margins(left=0.5, right=0, top=0.15, bottom=0.15)
    worksheet.set_column("A:A", 0.5)
    worksheet.set_column("B:B", 8.75)
    worksheet.set_column("C:C", 8.75)
    worksheet.set_column("D:D", 8.75)
    worksheet.set_column("E:E", 8.75)
    worksheet.set_column("F:F", 8.75)
    worksheet.set_column("G:G", 8.75)
    worksheet.set_column("H:H", 8.75)
    worksheet.set_column("I:I", 8.75)
    worksheet.set_column("J:J", 8.75)
    worksheet.set_column("K:K", 8.75)
    worksheet.set_column("L:L", 0.5)
    worksheet.set_row(0,6)

    addres_format = workbook.add_format({'bold' : 1, 'border' : 0, 'size' : 12, 'text_wrap': True, 'font' : 'Arial', 'align' : 'left', 'valign' : 'vcenter'})
    title_format = workbook.add_format({'bold' : 1, 'border' : 1, 'size' : 14, 'text_wrap': True, 'font' : 'Arial', 'align' : 'left', 'valign' : 'vcenter'})
    base_format = workbook.add_format({'bold' : 0, 'border' : 1,'size' : 10,'text_wrap': True,'font' : 'Arial','align' : 'left','valign' : 'top'})
    base_format_vcenterl = workbook.add_format({'bold' : 0,'border' : 1,'size' : 10,'text_wrap': True,'font' : 'Arial','align' : 'left','valign' : 'vcenter'})
    base_format_vcenterr = workbook.add_format({'bold' : 0,'border' : 1,'size' : 10,'text_wrap': True,'font' : 'Arial','align' : 'right','valign' : 'vcenter'})
    base_format_center = workbook.add_format({'bold' : 0,'border' : 1,'size' : 10,'text_wrap': True,'font' : 'Arial','align' : 'center','valign' : 'vcenter'})
    NOKGraphs = workbook.add_format({'bold' : 0,'border' : 1,'size' : 15,'text_wrap': True,'font' : 'Arial','align' : 'center','valign' : 'vcenter'})
    ok = workbook.add_format({'bold' : 0,'border' : 1,'size' : 11,'text_wrap': True,'font' : 'Arial','align' : 'center','valign' : 'vcenter','bg_color' : '#C0E0B4'})
    nok = workbook.add_format({'bold' : 0,'border' : 1,'size' : 11,'text_wrap': True,'font' : 'Arial','align' : 'center','valign' : 'vcenter','bg_color' : '#F06C6C','font_color' : 'white'})
    top = workbook.add_format({'top' : 2,'left' : 2,'right' : 2})
    bottom = workbook.add_format({'bottom' : 2,'left' : 2,'right' : 2})
    left = workbook.add_format({ 'left' : 2})
    right = workbook.add_format({'right' : 2 })



    #Page_1
    row = 1
    worksheet.set_paper(9)  # A4
    worksheet.merge_range("A"+str(row)+":L"+str(row), "", top)
    worksheet.merge_range("A"+str(row+48)+":L"+str(row+48), "", bottom)
    worksheet.merge_range("A"+str(row+1)+":A"+str(row+47), "", left)
    worksheet.merge_range("L"+str(row+1)+":L"+str(row+47), "", right)
    worksheet.set_row(row, 19.5)
    worksheet.merge_range("B"+str(row+1)+":E"+str(row+1), "FAMOT PLESZEW SP. z o.o. ", addres_format)
    worksheet.set_row(row+1, 19.5)
    worksheet.merge_range("B"+str(row+2)+":E"+str(row+2), "ul. Fabryczna 7", addres_format)
    worksheet.set_row(row+2, 19.5)
    worksheet.merge_range("B"+str(row+3)+":E"+str(row+3), "63-300 Pleszew, Poland ", addres_format)
    worksheet.merge_range("F"+str(row+1)+":K"+str(row+3), "")
    worksheet.insert_image("G"+str(row+1), datajson['reports']['logo'])
    worksheet.merge_range("B"+str(row+4)+":K"+str(row+6), "Acceptance report on a milling headstock unit  | Protokół odbioru zespołu wrzeciennika frezarskiego", title_format)

    worksheet.merge_range("B"+str(row+7)+":C"+str(row+8), "Headstock type | Typ wrzeciennika", base_format)
    worksheet.merge_range("D"+str(row+7)+":E"+str(row+8), "Version | Wersja", base_format)
    worksheet.merge_range("F"+str(row+7)+":H"+str(row+8), "Serial Number | Numer seryjny", base_format)
    worksheet.merge_range("I"+str(row+7)+":K"+str(row+8), "ID No. | Numer ID", base_format)
    worksheet.merge_range("B"+str(row+9)+":C"+str(row+10), "123132", base_format_center)
    worksheet.merge_range("D"+str(row+9)+":E"+str(row+10), "32323", base_format_center)
    worksheet.merge_range("F"+str(row+9)+":H"+str(row+10), "fdfdsfd", base_format_center)
    worksheet.merge_range("I"+str(row+9)+":K"+str(row+10), "gsdgsgd", base_format_center)
    if False:
        worksheet.merge_range("B"+str(row+11)+":K"+str(row+27), "Brak zdjęcia", base_format)
    else:
        worksheet.merge_range("B"+str(row+11)+":K"+str(row+27), "", base_format)
        worksheet.insert_image("E"+str(row+11), datajson['reports']['spindle'], {'x_scale': 0.115, 'y_scale': 0.115, 'y_offset' : 5})
    worksheet.merge_range("B"+str(row+28)+":F"+str(row+29), "Body number:  | Numer korpusu:   ", base_format_vcenterl)
    worksheet.merge_range("G"+str(row+28)+":K"+str(row+29), "Spindle number: | Numer wrzeciona:  ", base_format_vcenterl)

    worksheet.merge_range("B"+str(row+31)+":C"+str(row+32), "Report issued on | Raport z dnia", base_format_vcenterl)
    worksheet.merge_range("D"+str(row+31)+":K"+str(row+32), "   3123123", base_format_vcenterl)

    worksheet.merge_range("B"+str(row+34)+":K"+str(row+35), "List of operations | Zestawienie operacji", base_format_vcenterl)
    worksheet.merge_range("B"+str(row+36)+":B"+str(row+37), "No. | Nr", base_format_center)
    worksheet.merge_range("C"+str(row+36)+":E"+str(row+37), "Name of operation | Nazwa operacji", base_format_vcenterl)
    worksheet.merge_range("F"+str(row+36)+":G"+str(row+37), "Status | Status", base_format_vcenterl)
    worksheet.merge_range("H"+str(row+36)+":I"+str(row+37), "Date | Data", base_format_vcenterl)
    worksheet.merge_range("J"+str(row+36)+":K"+str(row+37), "Time | Godzina", base_format_vcenterl)

    worksheet.merge_range("B"+str(row+38)+":B"+str(row+39), "10", base_format_center)
    worksheet.merge_range("C"+str(row+38)+":E"+str(row+39), "Dynamic balancing | Wyrównoważanie dynamiczne", base_format_vcenterl)
    if True:
        worksheet.merge_range("F"+str(row+38)+":G"+str(row+39), "OK", ok)
    else:
        worksheet.merge_range("F"+str(row+38)+":G"+str(row+39), "NOK", nok)
    if True:
        worksheet.merge_range("H"+str(row+38)+":I"+str(row+39), "05-12-2022", base_format_center)
        worksheet.merge_range("J"+str(row+38)+":K"+str(row+39), "13:23:51", base_format_center)
    else:
        worksheet.merge_range("H"+str(row+38)+":I"+str(row+39), '', base_format_center)
        worksheet.merge_range("J"+str(row+38)+":K"+str(row+39), '', base_format_center)

    worksheet.merge_range("B"+str(row+40)+":B"+str(row+41), "20", base_format_center)
    worksheet.merge_range("C"+str(row+40)+":E"+str(row+41), "Break-in (run-in) report | Raport docierania", base_format_vcenterl)
    if True:
        worksheet.merge_range("F"+str(row+40)+":G"+str(row+41), "OK", ok)
    else:
        worksheet.merge_range("F"+str(row+40)+":G"+str(row+41), "NOK", nok)
    if True:
        worksheet.merge_range("H"+str(row+40)+":I"+str(row+41), "05-12-2022", base_format_center)
        worksheet.merge_range("J"+str(row+40)+":K"+str(row+41), "13:23:51", base_format_center)
    else:
        worksheet.merge_range("H"+str(row+40)+":I"+str(row+41), '', base_format_center)
        worksheet.merge_range("J"+str(row+40)+":K"+str(row+41), '', base_format_center)

    worksheet.merge_range("B"+str(row+42)+":B"+str(row+45), "30", base_format_center)
    worksheet.merge_range("C"+str(row+42)+":E"+str(row+45), "Report on labyrinth seal blow-through test | Raport testu przedmuchu uszczelnienia labiryntowego", base_format_vcenterl)
    if True:
        worksheet.merge_range("F"+str(row+42)+":G"+str(row+45), "OK", ok)
    else:
        worksheet.merge_range("F"+str(row+42)+":G"+str(row+45), "NOK", nok)
    if True:
        worksheet.merge_range("H"+str(row+42)+":I"+str(row+45), "05-12-2022", base_format_center)
        worksheet.merge_range("J"+str(row+42)+":K"+str(row+45), "13:23:51", base_format_center)
    else:
        worksheet.merge_range("H"+str(row+42)+":I"+str(row+45), '', base_format_center)
        worksheet.merge_range("J"+str(row+42)+":K"+str(row+45), '', base_format_center)

    worksheet.merge_range("B"+str(row+46)+":B"+str(row+47), "40", base_format_center)
    worksheet.merge_range("C"+str(row+46)+":E"+str(row+47), "Vibration measurement | Pomiar drgań", base_format_vcenterl)
    if True:
        worksheet.merge_range("F"+str(row+46)+":G"+str(row+47), "OK", ok)
    else:
        worksheet.merge_range("F"+str(row+46)+":G"+str(row+47), "NOK", nok)
    if True:
        worksheet.merge_range("H"+str(row+46)+":I"+str(row+47), "05-12-2022", base_format_center)
        worksheet.merge_range("J"+str(row+46)+":K"+str(row+47), "13:23:51", base_format_center)
    else:
        worksheet.merge_range("H"+str(row+46)+":I"+str(row+47), '', base_format_center)
        worksheet.merge_range("J"+str(row+46)+":K"+str(row+47), '', base_format_center)

    worksheet.merge_range("A"+str(row+49)+":A"+str(row+50), "", left)
    worksheet.merge_range("L"+str(row+49)+":L"+str(row+50), "", right)
    worksheet.merge_range("B"+str(row+49)+":E"+str(row+49), "Recent edition: | Ostatnia edycja:")
    worksheet.merge_range("F"+str(row+49)+":K"+str(row+49), "21st May 2020 Makowiecki M. | 21.05.2020 Makowiecki M.")
    worksheet.merge_range("B"+str(row+50)+":E"+str(row+50), "Process owner: | Właściciel procesu:")
    worksheet.merge_range("F"+str(row+50)+":K"+str(row+50), "Quality Assurance Department | Dział Zapewnienia Jakości")
    worksheet.merge_range("A"+str(row+51)+":L"+str(row+51), "  Page | Strona              1 of 1 | 1 z 1", bottom)
    # row += 56
  

    workbook.close()
    pass


create_simple_report("test")