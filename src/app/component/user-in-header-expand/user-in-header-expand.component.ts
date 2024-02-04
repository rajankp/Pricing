import { Component, Input } from '@angular/core';
import { IUser } from '../../interfaces/user';
import { MatExpansionModule } from '@angular/material/expansion';
@Component({
  selector: 'gb-user-in-header-expand',
  standalone: true,
  templateUrl: './user-in-header-expand.component.html',
  styleUrl: './user-in-header-expand.component.scss'
})
export class UserInHeaderExpandComponent {
  @Input() user!: IUser;
  
}
