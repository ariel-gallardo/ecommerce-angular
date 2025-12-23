import { Component, Inject, OnDestroy, OnInit, Optional, signal, WritableSignal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { LogError } from '@api/logs/models/log-error.model';
import { ErrorFacade } from '@api/logs/redux/error/error.facade';
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
    @Optional() @Inject(MAT_DIALOG_DATA) private readonly data: { entityId: string },
    @Optional() private readonly dialogRef: MatDialogRef<LogErrorComponent>,
    private readonly errorFacade: ErrorFacade) {
    this.logError = signal(new LogError());
    this.errorFacade.GetInit();
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
    this.errorFacade.GetInit();
  }

  ngOnInit(): void {
    this.subs = this.errorFacade.Get$.subscribe(logError => this.logError.set(logError));
    if (this.data?.entityId)
      this.errorFacade.GetRequestUpdate({ entityId: this.data.entityId });
  }
}
