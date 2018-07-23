import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { EditPetComponent } from './edit-pet/edit-pet.component';
import { PetComponent } from './pet/pet.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'pets',component: HomeComponent},
  { path: 'pets/new',component: NewPetComponent},
  { path: 'pets/:id',component: PetComponent},
  { path: 'pets/:id/edit',component: EditPetComponent},
  { path: '', pathMatch: 'full', redirectTo: 'pets' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
