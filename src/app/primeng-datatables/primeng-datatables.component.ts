import { Component, OnInit } from '@angular/core';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-primeng-datatables',
  templateUrl: './primeng-datatables.component.html',
  styleUrls: ['./primeng-datatables.component.css'],
  providers: [ ReportsService ]
})
export class PrimengDatatablesComponent implements OnInit {
  displayDialog: boolean;
  newDataDialog: boolean;
  edited: boolean;
  oldContact: Contact;
  contact: Contact = new PrimeContact();  
  selectedContact: Contact;  
  newContact: boolean;
  source: any;

  constructor(private reportsService: ReportsService) { }

  ngOnInit() {
    this.showcontacts();
  }

  showcontacts(){
     this.reportsService.getAllData().subscribe(source => {
      this.source = source;
      console.log(this.source);
    });
  }

  showDialogToAdd() {
        this.newContact = true;
        this.contact = new PrimeContact();
        this.displayDialog = true;
        this.newDataDialog = true;
  }
  save() {
        let source = [...this.source];
        if(this.newContact){
          source.push(this.contact)
          console.log("new contact"+this.contact);
          this.reportsService.addData(JSON.stringify(this.contact)).subscribe(contact => {
            this.contact = contact;
            console.log("successfully added"+this.contact);
    });
        }
        else{
            source[this.findSelectedContactIndex()] = this.contact;
        }
        this.showcontacts();
        this.contact = null;
        this.displayDialog = false;
        this.newDataDialog = false;
    }
   delete() {
        let index = this.findSelectedContactIndex();
        this.contact = this.source[index];
        this.reportsService.deleteData(JSON.stringify(this.contact)).subscribe(contact => {
            this.contact = contact;
            console.log("successfully deleted"+this.contact);
    });
        this.showcontacts();
        this.contact = null;
        this.displayDialog = false;
        this.newDataDialog = false;
    }  
  edit(){
    let source = [...this.source];
    console.log("old: "+JSON.stringify(this.oldContact))
    console.log("new: "+JSON.stringify(this.contact))
    console.log("id:"+this.contact["_id"]);
    for(let prop in this.oldContact) {
        if(this.oldContact[prop] !== this.contact[prop]){
          this.edited = true;
          break;
        }
        else{
          this.edited = false;
        }     
      }
      if(this.edited){
         this.reportsService.editData(JSON.stringify(this.contact)).subscribe(contact => {
            this.contact = contact;
            console.log("successfully edited"+this.contact);
    });
      }
      else{
        source[this.findSelectedContactIndex()] = this.contact;
      }
      this.showcontacts();
      this.contact = null;
      this.displayDialog = false;
      this.newDataDialog = false;  
  }  
    
    onRowSelect(event) {
        this.newContact = false;
        this.contact = this.cloneContact(event.data);
        this.oldContact = this.cloneContact(event.data);
        console.log("old: "+JSON.stringify(this.oldContact));
        this.displayDialog = true;
        this.newDataDialog = false;
    }
    
    cloneContact(c: Contact): Contact {
        let contact = new PrimeContact();
        for(let prop in c) {
            console.log("in clone car"+c[prop]);
            contact[prop] = c[prop];
        }
        return contact;
    }
    

  findSelectedContactIndex(): number {
        return this.source.indexOf(this.selectedContact);
    }

}

class PrimeContact implements Contact {
   
    constructor(public firstname?, public lastname?, public email?, public number?) {
    }
}

 export interface Contact {
  firstname?;
  lastname?;
  email?;
  number?;
}

