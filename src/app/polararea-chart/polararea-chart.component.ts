import { Component, OnInit } from '@angular/core';
import {ChartModule} from 'primeng/primeng';

@Component({
  selector: 'app-polararea-chart',
  templateUrl: './polararea-chart.component.html',
  styleUrls: ['./polararea-chart.component.css']
})
export class PolarareaChartComponent implements OnInit {
  data: any;

    constructor() {
        this.data = {
            datasets: [{
                data: [
                    11,
                    16,
                    7,
                    3,
                    14
                ],
                backgroundColor: [
                    "#FF6384",
                    "#4BC0C0",
                    "#FFCE56",
                    "#E7E9ED",
                    "#36A2EB"
                ],
                label: 'My dataset'
            }],
            labels: [
                "Red",
                "Green",
                "Yellow",
                "Grey",
                "Blue"
            ]
        }
    }
  ngOnInit() {
  }

}
