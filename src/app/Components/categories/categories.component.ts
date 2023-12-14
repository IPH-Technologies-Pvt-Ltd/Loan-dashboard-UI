import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
    this.data = {
      labels: ['Investments', 'Food', 'Clothes', 'Others'],
      datasets: [
        {
          data: [200, 70, 50, 30],
          backgroundColor: ['lightblue', 'green', 'purple', 'orange'],
          hoverBackgroundColor: ['lightblue', 'green', 'purple', 'orange'],
        },
      ],
    };

    this.options = {
      cutout: '50%',
      plugins: {
        legend: {
          position: 'left',
          labels: {
            color: 'white',
            usePointStyle: true,

            padding: 15,
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: true,
          text: 'Categories',
          position: 'top',
          align: 'start',
          color: 'white',
          font: {
            size: 16,
            weight: 'normal',
          },
        },
      },
      responsive: true,
      aspectRatio: 1,
      maintainAspectRatio: false,
    };
  }
}
