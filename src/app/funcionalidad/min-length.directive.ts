import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[minLengthCustom]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthDirective, multi: true }]
})
export class MinLengthDirective implements Validator {
  @Input('minLengthCustom') minLength = 3;

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.length < this.minLength) {
      return { minLengthCustom: true };
    }
    return null;
  }
}
