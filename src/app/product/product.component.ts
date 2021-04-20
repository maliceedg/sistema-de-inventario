import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  categories = [
    { id: 1, name: 'Arrocera' },
    { id: 2, name: 'Cafetera' },
    { id: 3, name: 'Corneta/Altavoz' },
    { id: 4, name: 'Freidora' },
    { id: 5, name: 'Plancha' },
    { id: 6, name: 'Sartén Eléctrico' },
    { id: 7, name: 'Televisor' },
    { id: 8, name: 'Ventilador' },
    { id: 9, name: 'Wafflera' }
  ]

  productForm: FormGroup;
  numberValidation = /\-?\d*\.?\d{1,2}/;


  getErrorMessage(fieldName) {
    const formType = this.productForm.get(fieldName);

    if (formType.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    if (formType.hasError('number')) {
      return 'No es un número válido';
    }

    if (formType.hasError('min')) {
      return `Número no puede ser menor a ${formType.errors.min.min}`;
    }

    if (formType.hasError('max')) {
      return `Número no puede ser mayor a ${formType.errors.max.max}`;
    }

    if (formType.hasError('price')) {
      return 'No es un precio válido';
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.createProductForm();
  }

  createProductForm() {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required, Validators.min(1), Validators.max(999), Validators.pattern(this.numberValidation)]),
      date: new FormControl((new Date()).toISOString().substring(0, 10)),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(9999999999), Validators.pattern(this.numberValidation)])
    });
  }

  sendProduct() {
    this.productService.createProduct(this.productForm.value).subscribe((response) => {
      this.openSnackBar('El producto se ha creado con éxito', 'Cerrar');
      console.log(response);
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
