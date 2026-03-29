import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EquipmentItemModel } from '../../models/equipment-item.model';
import { EquipmentItemComponent } from '../equipment-item/equipment-item.component';

@Component({
  selector: 'app-equipment-list',
  imports: [FormsModule, EquipmentItemComponent],
  templateUrl: './equipment-list.component.html',
  styleUrl: './equipment-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentListComponent {
  //input przez [(ngModel)].
  protected newItemName = '';

  protected readonly equipment = signal<EquipmentItemModel[]>([
    { id: 1, name: 'Kombinezon', isPacked: true },
    { id: 2, name: 'Racje', isPacked: false },
    { id: 3, name: 'Modul lacznosci', isPacked: false }
  ]);

  protected addItem(): void {
    const trimmedName = this.newItemName.trim();

    if (!trimmedName) {
      return;
    }

    const newItem: EquipmentItemModel = {
      id: this.equipment().length + 1,
      name: trimmedName,
      isPacked: false
    };

    this.equipment.update((items) => [...items, newItem]);
    this.newItemName = '';
  }

  protected togglePacked(id: number): void {
    this.equipment.update((items) =>
      items.map((item) =>
        item.id === id ? { ...item, isPacked: !item.isPacked } : item
      )
    );
  }
}
