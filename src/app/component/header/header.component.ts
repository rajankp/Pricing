import { Component } from '@angular/core';
import { IconComponent } from '../../reusable-component/icon/icon.component';
import { UserInHeaderComponent } from '../user-in-header/user-in-header.component';
import { IUser } from '../../interfaces/user';
import { UserInHeaderExpandComponent } from '../user-in-header-expand/user-in-header-expand.component';

@Component({
  selector: 'gb-header',
  standalone: true,
  imports: [IconComponent, UserInHeaderComponent, UserInHeaderExpandComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})

export class HeaderComponent {
  public userObj: IUser;
  
  constructor() {
    this.userObj = {
      firstName: 'Xeriya',
      lastName: 'Ponald',
      userPic: 'assets/images/UserMale.jpg'
    };
  }
}
