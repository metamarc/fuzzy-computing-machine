import { Safe } from './../../../../core/model/safe';
import { Observable } from 'rxjs';
import { SafeService } from './../../../../core/services/safe.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'cool-safe-list',
  templateUrl: './safe-list.component.html',
  styleUrls: ['./safe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeListComponent implements OnInit {
  safes$: Observable<Safe[]>;

  constructor(private safeService: SafeService) { }

  ngOnInit() {
    this.safes$ = this.safeService.getSafes();
  }
}
