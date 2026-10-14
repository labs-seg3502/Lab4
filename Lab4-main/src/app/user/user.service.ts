import { Injectable, signal } from '@angular/core';
import { UserInfo } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly _users = signal<UserInfo[]>([]);
  readonly users = this._users.asReadonly();

  addUser(user: UserInfo): void {
    this._users.update(list => [...list, user]);
  }
}
