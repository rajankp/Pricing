import { Component } from '@angular/core';
import { IMenuGroup } from '../../interfaces/menu';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconComponent } from '../../reusable-component/icon/icon.component';
import { Observable } from 'rxjs';
import { MenuManagerService } from '../../services/menu-manager.service';

@Component({
  selector: 'gb-side-menu',
  standalone: true,
  imports: [CommonModule, MatIconModule, IconComponent],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})

export class SideMenuComponent {
  public menuList$: Observable<IMenuGroup[]>;
  constructor(private menuManagerService: MenuManagerService) {
    this.menuList$ = this.menuManagerService.fetchMenu();
  }
  
}
