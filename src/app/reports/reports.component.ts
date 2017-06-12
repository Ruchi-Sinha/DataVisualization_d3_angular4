import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ ReportsService ]
})
export class ReportsComponent implements OnInit {
  source: any = [];
  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    // Retrieve posts from the API
      this.reportsService.getAllData().subscribe(source => {
      this.source = source;
      console.log(this.source);
    });
  }

}
