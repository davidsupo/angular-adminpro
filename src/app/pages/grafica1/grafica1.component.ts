import { Component } from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {
  public labels1: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [ [350, 450, 100] ];

  public labels2: string[] = ['Refrigeradoras', 'Lavadoras', 'Cocinas'];
  public data2 = [ [35, 20, 40] ];

  public labels3: string[] = ['Laptop', 'Mac', 'Radeon'];
  public data3 = [ [10, 50, 15] ];

  public labels4: string[] = ['Pan', 'Refrescos', 'Tacos'];
  public data4 = [ [25, 33, 8] ];

}
