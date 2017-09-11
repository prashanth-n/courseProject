import { Component, EventEmitter, Output } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    @Output() usrSelected = new EventEmitter<string>();
    toShowClicked(usrOption: string) {
        this.usrSelected.emit(usrOption);
    }
}
