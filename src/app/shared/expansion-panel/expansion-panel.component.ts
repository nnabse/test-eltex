import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @Input() public panelTitle = 'Panel Title';
  @Input() public panelDescription = 'Panel Description';
}
