import { SafeItem } from './../../../../core/model/safe-item';
import { map, flatMap } from 'rxjs/operators';
import { SafeService } from './../../../../core/services/safe.service';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'cool-safe-page',
  templateUrl: './safe-page.component.html',
  styleUrls: ['./safe-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SafePageComponent implements OnInit {
  safeItems$: Observable<SafeItem[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private safeService: SafeService
  ) { }

  ngOnInit() {
    this.safeItems$ = this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      flatMap((id: string) => this.safeService.getItems(id))
    );
  }
}
