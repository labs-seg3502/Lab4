import { Routes } from '@angular/router';
import { UserForm } from './user-form/user-form';
import { UserDisplay } from './user-display/user-display';

export const routes: Routes = [
  { path: 'form', component: UserForm },
  { path: 'display', component: UserDisplay },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', redirectTo: 'form' },
];
