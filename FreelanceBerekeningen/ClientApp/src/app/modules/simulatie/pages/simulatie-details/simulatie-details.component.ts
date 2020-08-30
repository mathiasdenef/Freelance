import { Component, OnInit } from '@angular/core';
import { SimulatieService } from '../../services/simulatie.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SimulatieInkomstFormDialogComponent } from '../../components/simulatie-inkomst-form-dialog/simulatie-inkomst-form-dialog.component';

@Component({
    templateUrl: './simulatie-details.component.html',
    styleUrls: ['./simulatie-details.component.css']
})
export class SimulatieDetailsComponent implements OnInit {

    simulatie: any;

    statuses: any[];
    dagTarief: number = 450;
    aantalDagenWerken: number = 220;

    inkomsten: any[];
    columnsToDisplayInkomsten = ['actions', 'name', 'amount'];

    uitgaven: any[];
    columnsToDisplayUitgaven = ['actions', 'name', 'amount', 'fiscaalAftrekbaar'];

    constructor(private route: ActivatedRoute,
        private dialog: MatDialog,
        private simulatieService: SimulatieService) { }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.simulatieService.getById(+params.get("id")).subscribe(
                result => {
                    this.simulatie = result;
                    console.log(this.simulatie);
                },
                error => {
                    console.log(error);
                }
            )
        })


        this.statuses = [
            { id: 1, name: 'In progress' },
            { id: 2, name: 'Finished' },
            { id: 3, name: 'Deprecated' }
        ];

        this.inkomsten = [
            { name: 'Inkomsten huur', amount: 500 }
        ];

        this.uitgaven = [
            { name: 'Leasing auto', amount: 7200, fiscaalAftrekbaar: 75 },
            { name: 'Brandstof auto', amount: 1500, fiscaalAftrekbaar: 75 },
            { name: 'Onderhoud auto', amount: 750, fiscaalAftrekbaar: 75 },
            { name: 'Verkeersbelasting', amount: 350, fiscaalAftrekbaar: 75 },
            { name: 'Ereloon boekhouder', amount: 3300, fiscaalAftrekbaar: 100 },
        ];
    }

    onClickSave() {
        console.log("clicked save");
    }

    onClickPreview() {
        console.log("clicked preview");
    }

    onClickNieuwInkomst() {
        let dialogRef = this.dialog.open(SimulatieInkomstFormDialogComponent, {
            width: '600x'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.simulatie.inkomsten.push(result);
                this.simulatie.inkomsten = [...this.simulatie.inkomsten];
            }
        });
    }

    onClickNieuwUitgave() {
        let dialogRef = this.dialog.open(SimulatieInkomstFormDialogComponent, {
            width: '600x'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.simulatie.uitgaven.push(result);
                this.simulatie.uitgaven = [...this.simulatie.uitgaven];
            }
        });
    }

    onClickDeleteInkomst(inkomst: any) {
        this.simulatie.inkomsten.splice(this.simulatie.inkomsten.indexOf(inkomst), 1);
        this.simulatie.inkomsten = [...this.simulatie.inkomsten];

    }

    onClickDeleteUitgave(uitgave: any) {
        this.simulatie.uitgaven.splice(this.simulatie.uitgaven.indexOf(uitgave), 1);
        this.simulatie.uitgaven = [...this.simulatie.uitgaven];

    }
}
