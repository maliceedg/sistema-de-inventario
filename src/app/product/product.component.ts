import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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

  numberValidation = /\-?\d*\.?\d{1,2}/;

  productForm = new FormGroup({});
  name = new FormControl('', [Validators.required]);
  number = new FormControl('', [Validators.required, Validators.min(1), Validators.max(999), Validators.pattern(this.numberValidation)]);
  date = new FormControl((new Date()).toISOString().substring(0, 10));
  price = new FormControl('', [Validators.required, Validators.min(1), Validators.max(999), Validators.pattern(this.numberValidation)]);

  getErrorMessage(formType) {
    if (formType.hasError('required')) {
      return 'Debes ingresar un valor';
    }

    if (formType.hasError('number')) {
      return 'No es un número válido';
    }

    if (formType.hasError('price')) {
      return 'No es un precio válido';
    }
  }

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
  }

  submit() {
    console.log("Hello");
  }

}
