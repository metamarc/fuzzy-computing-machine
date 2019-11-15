import { filter, first, flatMap, map, find } from 'rxjs/operators';
import { SafeItem } from './../model/safe-item';
import { Safe } from './../model/safe';
import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, AsyncSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class SafeService {
  private readonly safeUrl = '/api/safes';

  private safes = new BehaviorSubject<Safe[]>([]);

  constructor(private httpClient: HttpClient) { }

  getSafe(safeId: string): Observable<Safe> {
    return this.httpClient.get<Safe>(this.safeUrl + '/:' + safeId);
  }

  getSafes(): Observable<Safe[]> {
    return this.httpClient.get<Safe[]>(this.safeUrl);
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    return this.httpClient.get<SafeItem[]>(this.safeUrl + '/:' + safeId + '/items');
  }

  addItem(safeId: string, item: SafeItem): void {
    // TODO
    this.httpClient
      .post<SafeItem[]>(this.safeUrl + '/:' + safeId + '/items', item)
      .subscribe();
  }
}
