import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BagComponent } from './bag/bag.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bag', component: BagComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
