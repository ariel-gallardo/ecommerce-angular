import { Component, OnDestroy, OnInit, signal, WritableSignal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Pagination } from '@api/logs/models/common/pagination.model';
import { Log } from '@api/logs/models/log.model';
import { InfoFacade } from '@api/logs/redux/info/info.facade';
import { Colors } from '@models/colors';
import { Subscription } from 'rxjs';
import { LogErrorComponent } from '../log-error/log-error';

@Component({
  selector: 'log-list',
  standalone: false,
  templateUrl: './log-list.html',
  styleUrl: './log-list.scss'
})
export class LogList implements OnInit, OnDestroy {
  private subs: Subscription;
  private logs: WritableSignal<Pagination<Log>>;

  constructor(private readonly infoFacade: InfoFacade, private readonly matDialog: MatDialog) {
    this.infoFacade.FiltersGetInit();
    this.logs = signal({
      page: 0,
      items: [],
      pageSize: 0,
      totalCount: 0,
      totalPages: 0
    });
    this.subs = this.infoFacade.FiltersGet$.subscribe(logs => this.logs.set(logs));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.infoFacade.FiltersGetInit();
  }

  ngOnInit(): void {
    this.infoFacade.FiltersGet();
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
    this.infoFacade.FiltersGetChangePage(e);
  }

  public observar(entityId: number) {
    this.matDialog.open(LogErrorComponent,{
      width: '75vw',
      height: '75vh',
      maxHeight: '75vh',
      maxWidth: '75vw',
      data:{
        entityId
      }
    })
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
