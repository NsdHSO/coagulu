import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    standalone : true,
    imports : [RouterModule],
    selector : 'coagulu-root',
    templateUrl : './app.component.html',
    styleUrls : ['./app.component.scss'],
})
export class AppComponent {
    title = 'coagulu';
}
