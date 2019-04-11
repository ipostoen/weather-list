import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitysListComponent } from './citys-list.component';

describe('CitysListComponent', () => {
  let component: CitysListComponent;
  let fixture: ComponentFixture<CitysListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitysListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitysListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
