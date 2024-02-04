import { Component, Input } from '@angular/core';
import { IconComponent } from '../../reusable-component/icon/icon.component';
import { IUser } from '../../interfaces/user';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'gb-user-in-header',
  standalone: true,
  imports: [MatExpansionModule, MatMenuModule, MatButtonModule, IconComponent],
  templateUrl: './user-in-header.component.html',
  styleUrl: './user-in-header.component.scss'
})
export class UserInHeaderComponent {
  @Input() user!: IUser;
  panelOpenState = false;
}
