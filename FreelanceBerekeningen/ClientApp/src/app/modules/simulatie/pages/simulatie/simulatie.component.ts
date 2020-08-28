import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './simulatie.component.html'
})
export class SimulatieComponent implements OnInit {

    cols: any[];
    simulaties: any[];

    constructor() { }

    ngOnInit() {
        this.cols = [
            { field: 'creator', header: 'Creator' },
            { field: 'lastModified', header: 'Last Modified' },
            { field: 'status', header: 'Status' },
        ];

        this.simulaties = [
            {code: 'test', name: 'Eerste simulatie'}
        ]
    }
}
