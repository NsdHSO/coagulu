import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GenerativeService {
  trackBy<T>(index: number, entity: T) {
    return index;
  }
}
