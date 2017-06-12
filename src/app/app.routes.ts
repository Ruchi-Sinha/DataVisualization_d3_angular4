import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ReportsComponent } from './reports/reports.component';
import { PrimengDatatablesComponent } from './primeng-datatables/primeng-datatables.component';
import { FileuploadComponent } from './fileupload/fileupload.component';

const appRoutes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
        path:'profile',
        component: ProfileComponent
    },
    {
        path:'settings',
        component: SettingsComponent
    },
    {
        path:'help',
        component: HelpComponent
    },
    {
        path:'dashboard',
        component: DashboardComponent
    },
    {
        path:'api/reports',
        component: PrimengDatatablesComponent
    },
    {
        path:'fileupload',
        component: FileuploadComponent
    },
    {
        path:'',
        component: HomeComponent
    }
    
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);