import { AbstractControl, ValidatorFn } from '@angular/forms';

export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    if (value && value.length >= 8) {
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /\d/;
      const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

      if (
        uppercaseRegex.test(value) &&
        lowercaseRegex.test(value) &&
        digitRegex.test(value) &&
        specialCharRegex.test(value)
      ) {
        return null; 
      }
    }

    return { 'strongPassword': true };
  };
}
