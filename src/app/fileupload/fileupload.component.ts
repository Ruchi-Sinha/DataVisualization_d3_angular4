import { Component, OnInit } from '@angular/core';
import {FileUploadModule} from 'primeng/primeng';
import {GrowlModule,Message} from 'primeng/primeng';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent implements OnInit {
  msgs: Message[];
    
    uploadedFiles: any[] = [];

    onUpload(event) {
        for(let file of event.files) {
            this.uploadedFiles.push(file);
        }
    
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'File Uploaded', detail: ''});
    }
  constructor() { }

  ngOnInit() {
  }

}

