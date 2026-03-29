import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EquipmentListComponent } from './components/equipment-list/equipment-list.component';

@Component({
  selector: 'app-root',
  imports: [EquipmentListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App {
  // Ten tytul pokazujemy na gorze strony.
  protected readonly title = 'Kosmiczny Ekwipunek';
}
