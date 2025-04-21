import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '@core/services';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private userService: UserService) {}

  public get currentUser(): any {
    return this.userService.getCurrentUserSync();
  }
}
