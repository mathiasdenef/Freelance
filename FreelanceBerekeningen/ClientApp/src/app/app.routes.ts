import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppMainComponent } from './components/app-main/app.main.component';
import { DashboardComponent } from './modules/dashboard/pages/dashboard/dashboard.component';
import { SimulatieComponent } from './modules/simulatie/pages/simulatie/simulatie.component';

export const routes: Routes = [
    {
        path: '', component: AppMainComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'simulatie', component: SimulatieComponent },
        ]
    },
    { path: '**', redirectTo: '' },
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' });
