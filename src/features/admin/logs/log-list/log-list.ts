import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from '@api/logs/models/common/pagination.model';
import { Log } from '@api/logs/models/log.model';
import { LogFacade } from '@api/logs/redux/log/log.facade';
import { Colors } from '@models/colors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'log-list',
  standalone: false,
  templateUrl: './log-list.html',
  styleUrl: './log-list.scss'
})
export class LogList implements OnInit, OnDestroy {
  private subs: Subscription;
  private logs: WritableSignal<Pagination<Log>>;

  constructor(private readonly logsFacade: LogFacade) {
    this.logsFacade.FiltersGetInit();
    this.logs = signal({
      page: 0,
      items: [],
      pageSize: 0,
      totalCount: 0,
      totalPages: 0
    });
    this.subs = this.logsFacade.FiltersGet$.subscribe(logs => this.logs.set(logs));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.logsFacade.FiltersGetInit();
  }

  ngOnInit(): void {
    this.logsFacade.FiltersGet();
  }

  public get Logs() {
    return this.logs().items;
  }

  public get Pagination() {
    return {
      page: this.logs().page,
      pageSize: this.logs().pageSize,
      totalCount: this.logs().totalCount,
      totalPages: this.logs().totalPages,
    };
  }
  onPageChange(e: PageEvent) {
    this.logsFacade.FiltersGetChangePage(e);
  }

  public observar(entityId: number) {

  }

  public get Colors() {
    return Colors;
  }

  columns: string[] = [
    'id',
    'serviceName',
    'message',
    'tipo',
    'acciones',
  ];
}
