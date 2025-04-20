import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reviewer',
  standalone: true,
  imports: [],
  templateUrl: './reviewer.component.html',
  styleUrl: './reviewer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReviewerComponent {

}
