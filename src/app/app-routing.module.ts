import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TalenthireUsComponent } from './talenthire-us/talenthire-us.component';
import { TalenthireIndComponent } from './talenthire-ind/talenthire-ind.component';
import { SignupComponent } from './signup/signup.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'talenthire-us', component: TalenthireUsComponent},
  {path: 'talenthire-ind', component: TalenthireIndComponent},
  {path: 'SignupComponent', component: SignupComponent },
  // otherwise redirect to login page
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
