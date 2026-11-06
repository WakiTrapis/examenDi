import { Component, inject, Input } from '@angular/core';
import { VehicleDetailsResponse } from '../../../interfaces/vehicle-details-response';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Result } from '../../../interfaces/vehicle-list-response';

@Component({
  imports: [],
  selector: 'app-vehicle-modal',
  styleUrl: './vehicle-modal.css',
  templateUrl: './vehicle-modal.html',
})
export class VehicleModal {
  activeModal = inject(NgbActiveModal);              
  @Input() vehicleDetail: Result | undefined;
}
