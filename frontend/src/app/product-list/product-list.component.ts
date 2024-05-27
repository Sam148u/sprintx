import { Component } from '@angular/core';
import { SchemaProductsComponent } from '../schema-products/schema-products.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [SchemaProductsComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  products = [
    {
      name: 'Balón de Fútbol',
      price: '25.99',
      description: 'Balón oficial de tamaño y peso reglamentarios.',
      imageUrl: 'https://images.unsplash.com/photo-1511342603327-463faeb51b6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbG9uJTIwZGUlMjBmdXRib2x8ZW58MHx8MHx8fDA%3D',
      featured: true 
    },
    {
      name: 'Raqueta de Tenis',
      price: '79.99',
      description: 'Raqueta ligera y resistente para jugadores avanzados.',
      imageUrl: 'https://images.unsplash.com/photo-1560012057-4372e14c5085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFxdWV0YSUyMGRlJTIwdGVubmlzfGVufDB8fDB8fHww',
      featured: false
    },
    {
      name: 'Zapatillas de Running',
      price: '59.99',
      description: 'Zapatillas cómodas y duraderas para correr largas distancias.',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8emFwYXRpbGxhcyUyMHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D',
      featured: true 
    },
    {
      name: 'Balón de Fútbol',
      price: '25.99',
      description: 'Balón oficial de tamaño y peso reglamentarios.',
      imageUrl: 'https://images.unsplash.com/photo-1511342603327-463faeb51b6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbG9uJTIwZGUlMjBmdXRib2x8ZW58MHx8MHx8fDA%3D',
      featured: true 
    },
    {
      name: 'Raqueta de Tenis',
      price: '79.99',
      description: 'Raqueta ligera y resistente para jugadores avanzados.',
      imageUrl: 'https://images.unsplash.com/photo-1560012057-4372e14c5085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFxdWV0YSUyMGRlJTIwdGVubmlzfGVufDB8fDB8fHww',
      featured: false
    },
    {
      name: 'Zapatillas de Running',
      price: '59.99',
      description: 'Zapatillas cómodas y duraderas para correr largas distancias.',
      imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8emFwYXRpbGxhcyUyMHJ1bm5pbmd8ZW58MHx8MHx8fDA%3D',
      featured: true 
    }
  ];
}
