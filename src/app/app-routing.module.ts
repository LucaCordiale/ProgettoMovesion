import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyGuardGuard } from './my-guard.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[MyGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
