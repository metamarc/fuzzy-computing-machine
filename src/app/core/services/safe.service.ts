import { filter, first, flatMap, map, find } from 'rxjs/operators';
import { SafeItem } from './../model/safe-item';
import { Safe } from './../model/safe';
import { Injectable } from '@angular/core';
import { of, Observable, BehaviorSubject, AsyncSubject } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class SafeService {

  private safes = new BehaviorSubject<Safe[]>([]);

  private safeItems = new Map<string, BehaviorSubject<SafeItem[]>>();

  private readonly safeItems1: SafeItem[] = [
    { id: '1', safeId: '1', name: 'Fahrrad', price: 55.5 },
    { id: '2', safeId: '1', name: 'Laptop', price: 999.99 }
  ];

  private readonly safeItems2 = [
    { id: '3', safeId: '2', name: 'Taschenrechner', price: 123.5 },
    { id: '4', safeId: '2', name: 'Sonnenbrille', price: 345 },
    { id: '5', safeId: '2', name: 'Brille', price: 567 }
  ];

  constructor() {
    this.safes.next([
      {
        id: '1',
        value: 999,
        itemSize: 2,
        users: ['111'],
        active: true,
        activeSince: new Date(1999, 1, 1)
      },
      {
        id: '2',
        value: 123,
        itemSize: 3,
        users: ['17', '19', '25'],
        active: true,
        activeSince: new Date(2018, 12, 30)
      }
    ] as Safe[]);
  }

  getSafe(safeId: string): Observable<Safe> {
    return this.safes.asObservable()
      .pipe(
        map((safes1: Safe[]) => safes1.find(safe => safe.id === safeId))
        // The following two approaches do not work ...
        // :(
        // flatMap((safes1: Safe[]) => safes1),
        // find(safe => safe.id === safeId)
        //
        // filter(safe => safe.id === safeId),
        // first()
        //
        // ... neither does this one:
        // switchMap(safes => from(safes).pipe(materialize())),
        // dematerialize(),
        // first(safe => safe.id === safeId, null)
      );
  }

  getSafes(): Observable<Safe[]> {
    return this.safes.asObservable();
  }

  getItems(safeId: string): Observable<SafeItem[]> {
    if (!this.safeItems.has(safeId)) {
      this.safeItems.set(safeId, new BehaviorSubject<SafeItem[]>([]));
      setTimeout(() => {
        if (safeId === '1') {
          this.safeItems
            .get(safeId)
            .next(this.safeItems1);
        } else if (safeId === '2') {
          this.safeItems
            .get(safeId)
            .next(this.safeItems2);
        } else {
          this.safeItems.get(safeId).next([]);
        }
        // must not complete, otherwise the UI does not get any more objects
        // this.safeItems.get(safeId).complete();
      }, 2000);
    }

    return this.safeItems.get(safeId).asObservable();
  }

  addItem(safeId: string, item: SafeItem): void {
    console.log('SafeService.addItem');

    if (!this.safeItems.has(safeId)) {
      const newSubject: BehaviorSubject<SafeItem[]> = new BehaviorSubject([]);
      this.safeItems.set(safeId, newSubject);
    }

    const current$ = this.safeItems.get(safeId);
    current$.next([...current$.getValue(), item]);
  }
}
