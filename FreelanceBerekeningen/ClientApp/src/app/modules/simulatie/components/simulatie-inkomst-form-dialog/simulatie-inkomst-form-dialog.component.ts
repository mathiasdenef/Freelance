import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './simulatie-inkomst-form-dialog.component.html',
    styleUrls: ['./simulatie-inkomst-form-dialog.component.css']
})
export class SimulatieInkomstFormDialogComponent implements OnInit {

    name: string;
    amount: number;

    constructor() { }

    ngOnInit() {
    }
}
