import { Safe } from './../../../../core/model/safe';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'cool-safe-row',
  templateUrl: './safe-row.component.html',
  styleUrls: ['./safe-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafeRowComponent implements OnInit {
  @Input() public safe: Safe;

  constructor() { }

  ngOnInit() {
  }
}
