import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list-component/vehicle-list-component';
import { VehicleModal } from './components/modal/vehicle-modal/vehicle-modal';

export const routes: Routes = [
    {path: 'vehicle-list', component: VehicleListComponent},
    {path: '**', redirectTo: 'vehicle-list'}
    
];
