import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleImageComponent } from './module-image.component';

describe('ModuleImageComponent', () => {
  let component: ModuleImageComponent;
  let fixture: ComponentFixture<ModuleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
