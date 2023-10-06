import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { of, switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [RouterModule, NgIf, AsyncPipe, JsonPipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  http = inject(HttpClient);

  user$ = this.http
    .get(
      'https://c60a8243-8834-4f11-8bde-e50b84c00883.mock.pstmn.io/localhost:3000'
    )
    .pipe(switchMap((v) => of(JSON.stringify(v))));

  title = 'coagulu';
}
