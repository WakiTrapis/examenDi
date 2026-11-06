import { Component, inject, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../services/vehicle-service';
import { Result } from '../../interfaces/vehicle-list-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleModal } from '../modal/vehicle-modal/vehicle-modal';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-component',
  styleUrl: './vehicle-list-component.css',
  templateUrl: './vehicle-list-component.html',
})
export class VehicleListComponent implements OnInit{
  vehicleService = inject(VehicleService);
  vehicleList = signal<Result[]>([]);
  private modalService = inject(NgbModal);

  ngOnInit(){
    this.vehicleService.getAll().subscribe((response) => {
      console.log(response);
      this.vehicleList.set(response.results);
    });
  }

  openVehicleModal(id: string) {
    this.vehicleService.getOne(id).subscribe(resp => {
          const modalRef = this.modalService.open(VehicleModal);
		      modalRef.componentInstance.pokemonDetail = resp;
    });

  }


  
}
