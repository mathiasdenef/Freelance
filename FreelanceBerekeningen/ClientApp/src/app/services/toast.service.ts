import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MessageService } from 'primeng/api';

@Injectable({
    providedIn: 'root',
})
export class ToastService {

    constructor(private messageService: MessageService) { }

    success(message: string, title: string = 'Success') {
        this.messageService.add({ severity: 'success', summary: title, detail: message });
    }

    info(message: string, title: string = 'Info') {
        this.messageService.add({ severity: 'info', summary: title, detail: message });
    }

    warning(message: string, title: string = 'Warning') {
        this.messageService.add({ severity: 'warn', summary: title, detail: message });
    }

    error(message: string, title: string = 'Error') {
        this.messageService.add({ severity: 'error', summary: title, detail: message });
    }
}
