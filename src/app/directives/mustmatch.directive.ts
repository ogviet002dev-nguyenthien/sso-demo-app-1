import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appMustmatch]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MustmatchDirective, multi: true },
  ],
})
export class MustmatchDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return confirmPasswordValidator(control);
  }
}
export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const ps = control.get('password');
  const cps = control.get('confirm_password');

  if (!ps || !cps) {
    return null;
  }
  if (cps.errors && !cps.errors.passwordMismatch) {
    return null;
  }
  if (ps.value !== cps.value) {
    return { passwordMismatch: true };
  } else {
    return null;
  }
};
