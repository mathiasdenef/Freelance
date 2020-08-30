import { Component, OnInit } from '@angular/core';
import { SimulatieService } from '../../services/simulatie.service';

@Component({
    templateUrl: './simulatie.component.html',
    styleUrls: ['./simulatie.component.css']
})
export class SimulatieComponent implements OnInit {

    simulaties: any[];
    columnsToDisplay = ['actions', 'name', 'creator', 'lastModified', 'creationDate', 'status'];

    constructor(private simulatieService: SimulatieService) { }

    ngOnInit() {
        this.simulatieService.getAll().subscribe(
            result => {
                this.simulaties = result;
            },
            error => {
                console.log(error);
            }
        )
    }
}
