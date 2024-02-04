import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'gb-icon',
  standalone: true,
  imports: [MatBadgeModule, MatIconModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss'
})
export class IconComponent {
  @Input() hideBadge?: boolean = true;
  @Input() badgeCount?: Number = 0;
  @Input() badgeIcon?: String = '';
  @Input() badgeClass?: string = '';
}
