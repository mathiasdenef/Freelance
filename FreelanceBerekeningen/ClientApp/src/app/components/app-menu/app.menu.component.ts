import { Component, OnInit } from '@angular/core';
import { AppMainComponent } from '../app-main/app.main.component';

@Component({
    selector: 'app-menu',
    template: `
    <ul class="layout-menu layout-main-menu clearfix">
        <li app-menuitem *ngFor="let item of model; let i = index;" [item]="item" [index]="i" [root]="true"></li>
    </ul>
    `
})
export class AppMenuComponent implements OnInit {

    model: any[];

    constructor(public app: AppMainComponent) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Dashboard', icon: 'fa fa-dashboard', routerLink: ['']
            },
            {
                label: 'Simulaties', icon: 'fa fa-calculator', routerLink: ['/simulatie']
            }
        ];
    }
}
