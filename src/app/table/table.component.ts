import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthService } from '@auth0/auth0-angular';
import { ProductService } from "../services/product.service";

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {

  displayedColumns: string[] = ['id', 'name', 'number', 'date', 'category', 'price', 'delete'];
  dataSource: MatTableDataSource<UserData>;

  products = [];
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    public auth: AuthService,
    private productService: ProductService,
    private _snackBar: MatSnackBar) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.refreshData();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  refreshData() {
    this.isLoading = true;
    this.productService.getProducts().subscribe((products) => {
      this.dataSource.data = products as any;
      this.isLoading = false;
    },
      error => this.isLoading = false
    );
  }

  deleteProduct(id) {
    this.productService.deleteProduct(id).subscribe((response) => {
      this.openSnackBar('El producto se ha eliminado con éxito', 'Cerrar');
      this.refreshData();
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
