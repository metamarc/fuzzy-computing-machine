import { SafeItem } from './../../../../core/model/safe-item';
import { SafeService } from './../../../../core/services/safe.service';
import { Observable } from 'rxjs';
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
  safeItems$: Observable<SafeItem[]>;

  constructor(private safeService: SafeService) { }

  ngOnInit() {
    this.safeItems$ = this.safeService.getItems(this.safe.id);
  }
}
