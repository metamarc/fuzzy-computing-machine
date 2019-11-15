import { SafeService } from './../../../../core/services/safe.service';
import { SafeItem } from './../../../../core/model/safe-item';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cool-safe-item-form',
  templateUrl: './safe-item-form.component.html',
  styleUrls: ['./safe-item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeItemFormComponent implements OnInit {
  @Output() result = new EventEmitter<SafeItem>();

  public item = {} as SafeItem;

  constructor(private safeService: SafeService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('onSubmit: emitting safeItem');
    this.result.emit(this.item);
  }
}
