import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'mod1',loadChildren:'./mod1/mod1.module#Mod1Module'},
  { path: 'mod2',loadChildren:'./mod2/mod2.module#Mod2Module' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}

