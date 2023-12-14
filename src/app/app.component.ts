import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';
import { MonthlyBalanceComponent } from './Components/monthly-balance/monthly-balance.component';
import { IncomeStatusComponent } from './Components/income-status/income-status.component';
import { ThisMonthComponent } from './Components/this-month/this-month.component';
import { LastMonthComponent } from './Components/last-month/last-month.component';
import { MyExperienceComponent } from './Components/my-experience/my-experience.component';
import { CalendarBarComponent } from './Components/calendar-bar/calendar-bar.component';
import { CrptocurrencyComponent } from './Components/crptocurrency/crptocurrency.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatSidenavModule,
    SearchBarComponent,
    MonthlyBalanceComponent,
    IncomeStatusComponent,
    ThisMonthComponent,
    LastMonthComponent,
    MyExperienceComponent,
    CalendarBarComponent,
    CrptocurrencyComponent,
    ProfileComponent,
    CategoriesComponent,
    ChartModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'loanUi';
}
