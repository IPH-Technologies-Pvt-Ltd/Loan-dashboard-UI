import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrptocurrencyComponent } from './crptocurrency.component';

describe('CrptocurrencyComponent', () => {
  let component: CrptocurrencyComponent;
  let fixture: ComponentFixture<CrptocurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrptocurrencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrptocurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
