import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeStatusComponent } from './income-status.component';

describe('IncomeStatusComponent', () => {
  let component: IncomeStatusComponent;
  let fixture: ComponentFixture<IncomeStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncomeStatusComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IncomeStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
