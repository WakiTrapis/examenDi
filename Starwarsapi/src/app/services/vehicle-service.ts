import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleListResponse } from '../interfaces/vehicle-list-response';
import { VehicleDetailsResponse } from '../interfaces/vehicle-details-response';

@Service()
export class VehicleService {

    http =inject(HttpClient);

    getAll(): Observable<VehicleListResponse> {
        return this.http.get<VehicleListResponse>('https://swapi.dev/api/vehicles/');
    }

    getOne(id: string): Observable<VehicleDetailsResponse> {
    return this.http.get<VehicleDetailsResponse>(`https://swapi.dev/api/vehicles/${id}`);
  }

  

    
}
