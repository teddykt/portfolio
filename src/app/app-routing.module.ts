import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { WorkComponent } from './work/work.component';

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  onSameUrlNavigation: "reload",
};


const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'work', component: WorkComponent},
  // { path: 'shop', redirectTo: 'shop/all'},
  // { path: 'shop/:type', component: ShopComponent},
  // { path: 'contact', component: ContactComponent},
  // { path: 'cart', component: CartComponent},
  // { path: 'item', component: ItemComponent},
  // { path: 'info', component: InfoComponent},
  // { path: 'admin', component: AdminComponent},
  // { path: 'signin', component: SigninComponent},
  // { path: 'signup', component: SignupComponent},
  // { path: '', pathMatch: 'full', redirectTo: 'home'}

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, routerOptions)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
