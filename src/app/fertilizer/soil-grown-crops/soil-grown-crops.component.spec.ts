import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilGrownCropsComponent } from './soil-grown-crops.component';

describe('SoilGrownCropsComponent', () => {
  let component: SoilGrownCropsComponent;
  let fixture: ComponentFixture<SoilGrownCropsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoilGrownCropsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoilGrownCropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
