import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { LoginComponent } from "./login/login.component";
import { TableComponent } from "./table/table.component";
import { ProductComponent } from "./product/product.component";

const routes: Routes = [
  { path: '', component: TableComponent },
  { path: 'login', component: LoginComponent },
  { path: 'table', component: TableComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
