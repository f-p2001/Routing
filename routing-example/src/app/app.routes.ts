
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ServicesComponent } from './services/services.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { Component,NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component:HomeComponent},
    {path: 'about', component:AboutComponent},
    {path: 'register', component:RegistrationComponent},
    {path: 'profile', component:UserProfileComponent},
    {path: 'services', component:ServicesComponent},
    {path: 'servicedetails', component:ServiceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
