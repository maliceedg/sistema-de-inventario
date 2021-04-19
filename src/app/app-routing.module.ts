import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

// Components
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: '', redirectTo: '/table', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'product', component: ProductComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
