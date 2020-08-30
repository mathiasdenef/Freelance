import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './simulatie-uitgave-form-dialog.component.html',
    styleUrls: ['./simulatie-uitgave-form-dialog.component.css']
})
export class SimulatieUitgaveFormDialogComponent implements OnInit {

    name: string;
    amount: number;
    fiscaalAftrekbaar: number;
    
    constructor() { }

    ngOnInit() {
    }
}
