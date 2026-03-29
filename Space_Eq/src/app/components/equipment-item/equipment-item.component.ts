import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { EquipmentItemModel } from '../../models/equipment-item.model';

@Component({
  selector: 'app-equipment-item',
  templateUrl: './equipment-item.component.html',
  styleUrl: './equipment-item.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EquipmentItemComponent {
  // Ten Input przyjmuje dane pojedynczego przedmiotu z listy.
  @Input({ required: true }) item!: EquipmentItemModel;

  // Ten Output wysyla id kliknietego elementu do komponentu listy.
  @Output() packedToggle = new EventEmitter<number>();

  // Ta funkcja emituje zdarzenie po kliknieciu przycisku.
  protected onTogglePacked(): void {
    this.packedToggle.emit(this.item.id);
  }
}
