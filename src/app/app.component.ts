/**
 * Obiettivi:
 * - Iniezione di un template dall'esterno
 * - Prendere valori dall'interno di un componente con il context
 * - Stilizzare il template come vogliamo in base a quei valori
 */
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  /**
   * Items to show
   */
  items = [
    {
      name: 'Michele',
      surname: 'Stieven',
      age: 24
    },
    {
      name: 'Fabio',
      surname: 'Biondi',
      age: 41
    },
    {
      name: 'Old',
      surname: 'Man',
      age: 99
    }
  ];

  /**
   * Columns to show
   */
  columns = [
    'name',
    'surname',
    'age'
  ];
}
