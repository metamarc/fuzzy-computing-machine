import { SafeItem } from './../../../../core/model/safe-item';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'cool-add-safe-item-dialog',
  templateUrl: './add-safe-item-dialog.component.html',
  styleUrls: ['./add-safe-item-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSafeItemDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AddSafeItemDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog(safeItem: SafeItem): void {
    this.dialogRef.close(safeItem);
  }
}
