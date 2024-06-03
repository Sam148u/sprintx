import { Component, Input , inject , signal } from '@angular/core';
import { ProductsService } from '../../service/products.service';
import { Products } from '../../model/products';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

  @Input() id?: string;
  private productService = inject(ProductsService);

  product = signal<null | Products>(null);

  // Voy a obtener una receta a través del método getOneRecipeById...
  // CUANDO?? CUANDO EL COMPONENTE SE INICIALICE (SE CARGUE)

  // Angular me da acceso a ese momento particular donde un componente se acaba de crear (montar, inicializar) en el navegador

  ngOnInit() {
    if (this.id !== undefined) {
      this.product.set(this.productService.getOneRecipeById(Number(this.id)));
    }
  }

}
