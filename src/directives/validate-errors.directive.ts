import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subscription, isObservable } from 'rxjs';

export interface ValidationError {
  property: string;
  message: string;
}

@Directive({
  selector: '[ValidateErrors]',
  standalone: false
})
export class ValidateErrorsDirective implements OnInit, OnDestroy {

  @Input('ValidateErrors')
  errorsInput!: ValidationError[][] | Observable<ValidationError[][]> | null;

  @Input()
  formGroup!: FormGroup;

  private sub?: Subscription;

  ngOnInit(): void {
    if (!this.formGroup) return;

    if (isObservable(this.errorsInput)) {
      this.sub = this.errorsInput.subscribe(errors => {
        this.applyErrors(errors);
      });
    } else {
      this.applyErrors(this.errorsInput ?? null);
    }
  }

  private applyErrors(errors: ValidationError[][] | null): void {
    if (!errors || errors.length === 0) {
      this.formGroup.setErrors(null);
      return;
    }

    this.formGroup.setErrors(null);

    for (const group of errors) {
      if (!group || group.length === 0) continue;

      const property = group[0].property
        .replace(/[_\- ]+/g, ' ')
        .split(' ')
        .map(w => w.charAt(0).toLowerCase() + w.slice(1))
        .join('');

      const control = this.formGroup.get(property);
      if (!control) continue;

      control.setErrors({
        data: group.map(e => e.message)
      });

      control.markAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
