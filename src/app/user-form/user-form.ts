import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { phoneValidator } from '../validators/phone.validator';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  private builder = inject(FormBuilder);
  private userService = inject(UserService);
  private router = inject(Router);

  userForm = this.builder.nonNullable.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    phone: ['', phoneValidator],
    email: ['', Validators.email],
  });

  get firstName(): AbstractControl { return this.userForm.controls.firstName; }
  get lastName(): AbstractControl { return this.userForm.controls.lastName; }
  get phone(): AbstractControl { return this.userForm.controls.phone; }
  get email(): AbstractControl { return this.userForm.controls.email; }

  /** Affiche l'erreur dès que le champ a été modifié ou quitté, ou après une soumission. */
  showError(control: AbstractControl): boolean {
    return control.invalid && (control.dirty || control.touched);
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
      return;
    }
    const v = this.userForm.getRawValue();
    this.userService.addUser({
      firstName: v.firstName.trim(),
      lastName: v.lastName.trim(),
      phone: v.phone.trim() || undefined,
      email: v.email.trim() || undefined,
    });
    this.userForm.reset();
    this.router.navigate(['/display']);
  }
}
