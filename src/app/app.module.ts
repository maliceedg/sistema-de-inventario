import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Components
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';
import { ProductComponent } from './product/product.component';

// Services
import { ProductService } from "./services/product.service";

// Angular Imports
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@auth0/auth0-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ProductComponent,
    LoginComponent,
    MenuComponent,
  ],
  imports: [
    // Angular Imports
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'dev-uuv-0nd3.us.auth0.com',
      clientId: 'YgpCSS3ve0myTLgcULShugLNks59Iroa',
      redirectUri: `${window.location.origin}/sistema-de-inventario/table`
    }),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    // Material
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
