import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-income-status',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './income-status.component.html',
  styleUrl: './income-status.component.css',
})
export class IncomeStatusComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: [
            '#24264e',
            '#24264e',
            '#24264e',
            'green',
            '#24264e',
            'orange',
            '#24264e',
          ],

          borderColor: 'green',
          data: [50, 40, 45, 81, 54, 30, 40],
          barThickness: 10,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.1,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Income statistics',
          position: 'top',
          align: 'start',
          color: 'white',
          font: {
            size: 16,
            weight: 'normal',
          },
        },
      },
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      elements: {
        bar: {
          borderWidth: 0,
          borderRadius: 4,
        },
      },
    };
  }
}
