import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AppConfigComponent } from './components/app-config/app.config.component';
import { AppFooterComponent } from './components/app-footer/app.footer.component';
import { AppMainComponent } from './components/app-main/app.main.component';
import { AppMenuComponent } from './components/app-menu/app.menu.component';
import { AppMenuitemComponent } from './components/app-menuitem/app.menuitem.component';
import { AppProfileComponent } from './components/app-profile/app.profile.component';
import { AppTopBarComponent } from './components/app-topbar/app.topbar.component';
import { HttpErrorInterceptor } from './http-interceptors/http-error.interceptor';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { SimulatieModule } from './modules/simulatie/simulatie.module';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutes,
        HttpClientModule,
        BrowserAnimationsModule,
        RouterModule,
        DashboardModule,
        SimulatieModule,
        TabViewModule,
        ConfirmDialogModule,
        ToastModule,
    ],
    declarations: [
        AppComponent,
        AppMainComponent,
        AppMenuComponent,
        AppMenuitemComponent,
        AppTopBarComponent,
        AppFooterComponent,
        AppProfileComponent,
        AppConfigComponent,
    ],
    providers: [
        // { provide: LocationStrategy, useClass: HashLocationStrategy },
        ConfirmationService,
        MessageService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
