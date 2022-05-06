import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundationsComponent } from './fundations.component';

describe('FundationsComponent', () => {
  let component: FundationsComponent;
  let fixture: ComponentFixture<FundationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
