import { Component, input, output } from '@angular/core';
import { Result } from '../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {
  vehicle= input<Result>();
  vehicleClicked= output<string>();
  id: string = '';
  

  getVehicleId() {
    return this.vehicle()?.url.split("/")[5];
  }

  emitVehicleClicked() {
    const id = this.getVehicleId();
    if (id !== undefined) {
      this.vehicleClicked.emit(id);
    }
  }
  
}
