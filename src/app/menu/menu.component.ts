import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private doc: Document, public auth: AuthService) { }

  items = [
    {
      text: " Ver Productos",
      icon: "person",
      route: "/table"
    },
    {
      text: "  Agregar Producto",
      icon: "add_box",
      route: "/product"
    }
  ]

  ngOnInit(): void {
  }

  logout(): void {
    // Call this to redirect the user to the login page
    this.auth.logout({ returnTo: `${this.doc.location.origin}/sistema-de-inventario/login` });
  }

}
