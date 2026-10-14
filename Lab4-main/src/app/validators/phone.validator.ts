import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Numéro facultatif : s'il est fourni, il doit avoir exactement 10 chiffres,
 * et le 1er et le 4e chiffre doivent être différents de 0.
 */
export const phoneValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const value: string = (control.value ?? '').toString().trim();
  if (value === '') {
    return null; // champ facultatif
  }
  return /^[1-9]\d{2}[1-9]\d{6}$/.test(value) ? null : { invalidPhone: true };
};
