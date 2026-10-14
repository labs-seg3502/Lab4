import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-display',
  imports: [RouterLink],
  templateUrl: './user-display.html',
  styleUrl: './user-display.css',
})
export class UserDisplay {
  protected users = inject(UserService).users;
}
