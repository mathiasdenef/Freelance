import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PanelModule,
        CheckboxModule,
        DropdownModule,
        TableModule,
        CalendarModule,
        FullCalendarModule,
        InputTextModule,
        InputTextareaModule,
    ],
    declarations: [
        DashboardComponent,
    ],
    exports: [
    ]
})
export class DashboardModule { }
