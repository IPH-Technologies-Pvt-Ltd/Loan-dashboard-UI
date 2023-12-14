import { Component, OnInit } from '@angular/core';

import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-last-month',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './last-month.component.html',
  styleUrl: './last-month.component.css',
})
export class LastMonthComponent implements OnInit {
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
          borderColor: '#7b366f',
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
          text: 'last month +67.4%',
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
