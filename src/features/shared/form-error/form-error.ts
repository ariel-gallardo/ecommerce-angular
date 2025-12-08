import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-error',
  templateUrl: './form-error.html',
  standalone: false
})
export class FormError {
  @Input() form!: FormGroup;
  @Input() name!: string;

  get control() {
    return this.form?.get(this.name);
  }

  get errorList(): string[] | null {
    const data = this.control?.errors?.['data'];
    return Array.isArray(data) ? data : null;
  }
}
