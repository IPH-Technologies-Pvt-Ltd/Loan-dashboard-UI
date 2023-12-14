import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-my-experience',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './my-experience.component.html',
  styleUrl: './my-experience.component.css',
})
export class MyExperienceComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'First Dataset',
          data: [100, 260, 240, 270, 340, 300, 350],
          fill: false,
          tension: 0.4,
          borderColor: '#96695c',
          // {
          //   linearGradient: {
          //     x0: 0,
          //     y0: 0,
          //     x1: 0,
          //     y1: 1,
          //   },
          //   stops: [
          //     { offset: 0, color: '#7d3976' },
          //     { offset: 1, color: '#975f41' },
          //   ],
          // },
        },
        {
          label: 'Second Dataset',
          data: [100, 150, 160, 240, 140, 180, 140],
          fill: false,
          borderDash: [5, 5],
          tension: 0.4,
          borderColor: '#4c5871',
        },
      ],
    };

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 1,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'My expenses',
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
          ticks: {
            color: '#446576',
          },
          grid: {
            display: false,
          },
        },
        y: {
          ticks: {
            color: '#446576',
          },
          grid: {
            display: false,
          },
        },
      },
    };
  }
}
