import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../reports.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
  data: any = [];
  source: LocalDataSource;

  settings = {
  columns: {
    firstname: {
      title: 'First Name'
    },
    lastname: {
      title: 'Last Name'
    },
    email: {
      title: 'Email'
    },
    number: {
      title: 'Phone'
    }
  }
};
  constructor(private reportsService: ReportsService) {
    //this.source = new LocalDataSource(this.data);
   }

  ngOnInit() {
    // Retrieve posts from the API
      this.reportsService.getAllData().subscribe(data => {
      this.data = data;
      console.log(this.data);
      this.source = new LocalDataSource(this.data);
    });
  }

   add(){
     this.reportsService.addData(this.data);
    
  }

}
