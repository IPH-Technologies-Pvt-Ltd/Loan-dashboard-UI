import { Component, OnInit } from '@angular/core';

import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-this-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './this-month.component.html',
  styleUrl: './this-month.component.css',
})
export class ThisMonthComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'april', 'may'],
      datasets: [
        {
          label: 'First Dataset',
          data: [10, 5, 15, 3, 10],
          fill: false,
          borderColor: '#95775d',
          tension: 0.4,
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1.7,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'This month\n+7.8%',
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
        point: {
          radius: 0,
        },
      },
      interaction: {
        intersect: false,
      },
    };
  }
}
