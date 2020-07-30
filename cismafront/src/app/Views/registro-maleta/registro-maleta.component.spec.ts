import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMaletaComponent } from './registro-maleta.component';

describe('RegistroMaletaComponent', () => {
  let component: RegistroMaletaComponent;
  let fixture: ComponentFixture<RegistroMaletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMaletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
