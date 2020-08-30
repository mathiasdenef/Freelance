import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FullCalendarModule } from 'primeng/fullcalendar';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { PanelModule } from 'primeng/panel';
import { SimulatieDetailsComponent } from './pages/simulatie-details/simulatie-details.component';
import { SimulatieComponent } from './pages/simulatie/simulatie.component';
import { SimulatieInkomstFormDialogComponent } from './components/simulatie-inkomst-form-dialog/simulatie-inkomst-form-dialog.component';
import { SimulatieUitgaveFormDialogComponent } from './components/simulatie-uitgave-form-dialog/simulatie-uitgave-form-dialog.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        PanelModule,
        CheckboxModule,
        DropdownModule,
        MatTableModule,
        MatButtonModule,
        MatInputModule,
        MatSelectModule,
        MatFormFieldModule,
        MatDividerModule,
        MatDialogModule,
        CalendarModule,
        FullCalendarModule,
        InputTextModule,
        InputTextareaModule,
    ],
    declarations: [
        SimulatieComponent,
        SimulatieDetailsComponent,
        SimulatieInkomstFormDialogComponent,
        SimulatieUitgaveFormDialogComponent,
    ],
    entryComponents: [
        SimulatieInkomstFormDialogComponent,
        SimulatieUitgaveFormDialogComponent,
    ],
    exports: [
    ]
})
export class SimulatieModule { }
