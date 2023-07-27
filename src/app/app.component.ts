import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
    standalone : true,
    imports : [RouterModule],
    selector : 'app-root',
    templateUrl : './app.component.html',
    styleUrls : ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    title = 'coagulu';
}
