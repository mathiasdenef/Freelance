import { NgModule } from '@angular/core';
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
import { SimulatieComponent } from './pages/simulatie/simulatie.component';

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
        SimulatieComponent,
    ],
    exports: [
    ]
})
export class SimulatieModule { }
