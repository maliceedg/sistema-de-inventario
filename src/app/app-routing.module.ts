import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

// Components
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: '', redirectTo: 'sistema-de-inventario/table', pathMatch: 'full'},
  { path: 'sistema-de-inventario/login', component: LoginComponent },
  { path: 'sistema-de-inventario/table', component: TableComponent, canActivate: [AuthGuard] },
  { path: 'sistema-de-inventario/product', component: ProductComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
