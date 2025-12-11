import { Component, Inject, OnDestroy, OnInit, Optional, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LogError } from '@api/logs/models/log-error.model';
import { LogErrorFacade } from '@api/logs/redux/log-error/log-error.facade';
import { Subscription } from 'rxjs';

@Component({
  selector: 'log-error',
  standalone: false,
  templateUrl: './log-error.html',
  styleUrl: './log-error.scss',
})
export class LogErrorComponent implements OnInit, OnDestroy {

  private logError: WritableSignal<LogError>;
  private subs!: Subscription;

  constructor(
    @Optional() @Inject(MAT_DIALOG_DATA) private readonly data: { entityId: number },
    @Optional() private readonly dialogRef: MatDialogRef<LogErrorComponent>,
    private readonly logErrorFacade: LogErrorFacade) {
    this.logError = signal(new LogError());
    this.logErrorFacade.GetInit();
  }



  public get ExceptionType() {
    return this.logError().exceptionType ?? '';
  }

  public get Exception() {
    return this.logError().exception?.replace(this.StackTrace,"") ?? '';
  }

  public get StackTrace() {
    return this.logError().stackTrace ?? '';
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.logErrorFacade.GetInit();
  }

  ngOnInit(): void {
    this.subs = this.logErrorFacade.Get$.subscribe(logError => this.logError.set(logError));
    if (this.data?.entityId)
      this.logErrorFacade.GetRequestUpdate({ entityId: this.data.entityId });
  }
}
