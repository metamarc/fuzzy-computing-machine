import { AddSafeItemDialogComponent } from './../add-safe-item-dialog/add-safe-item-dialog.component';
import { SafeItem } from './../../../../core/model/safe-item';
import { Safe } from './../../../../core/model/safe';
import { map, flatMap, withLatestFrom } from 'rxjs/operators';
import { SafeService } from './../../../../core/services/safe.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'cool-safe-page',
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafePageComponent implements OnInit {
  safe$: Observable<Safe>;
  safeItems$: Observable<SafeItem[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private safeService: SafeService,
    private dialogService: MatDialog,
  ) { }

  ngOnInit() {
    this.safe$ = this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      flatMap((id: string) => this.safeService.getSafe(id))
    );

    this.safeItems$ = this.safe$.pipe(
      flatMap(safe => this.safeService.getItems(safe.id))
    );
  }

  addSafeItem(): void {
    const dialogRef = this.dialogService.open(AddSafeItemDialogComponent);
    dialogRef.afterClosed()
      .pipe(withLatestFrom(this.safe$))
    .subscribe(([result, safe]: [SafeItem, Safe]) => this.safeService.addItem(safe.id, result));
  }
}
