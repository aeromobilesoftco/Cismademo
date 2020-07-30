import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaPasajeroComponent } from './modifica-pasajero.component';

describe('ModificaPasajeroComponent', () => {
  let component: ModificaPasajeroComponent;
  let fixture: ComponentFixture<ModificaPasajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificaPasajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
