import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';
import {TieredMenuModule,MenuItem} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';
import {FileUploadModule} from 'primeng/primeng';
import {GrowlModule,Message} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopmenuComponent } from './topmenu/topmenu.component';
import { routing } from './app.routes';
import { BarchartComponent } from './barchart/barchart.component';
import { LinechartComponent } from './linechart/linechart.component';
import { DonutchartComponent } from './donutchart/donutchart.component';
import { PiechartComponent } from './piechart/piechart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableComponent } from './datatable/datatable.component';

import { ReportsService } from './reports.service';
import { ReportsComponent } from './reports/reports.component';
import { PrimengDatatablesComponent } from './primeng-datatables/primeng-datatables.component';
import { RadarchartComponent } from './radarchart/radarchart.component';
import { PolarareaChartComponent } from './polararea-chart/polararea-chart.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HelpComponent,
    HomeComponent,
    LeftmenuComponent,
    ProfileComponent,
    SettingsComponent,
    SidebarComponent,
    TopmenuComponent,
    BarchartComponent,
    LinechartComponent,
    DonutchartComponent,
    PiechartComponent,
    DashboardComponent,
    DatatableComponent,
    ReportsComponent,
    PrimengDatatablesComponent,
    RadarchartComponent,
    PolarareaChartComponent,
    FileuploadComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    routing,
    CarouselModule.forRoot(),
    NgbModule.forRoot(),
    Ng2SmartTableModule,
    DataTableModule,
    SharedModule,
    DialogModule,
    ButtonModule,
    TieredMenuModule,
    ChartModule,
    FileUploadModule,
    GrowlModule
  ],
  providers: [ ReportsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
