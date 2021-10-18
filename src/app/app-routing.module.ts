import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
     path:"add/:id",component:AddComponent

  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:RegistrationComponent
  },
  { path:"", redirectTo:"/login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
