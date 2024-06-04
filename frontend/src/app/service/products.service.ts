import { Injectable, signal } from '@angular/core';
import { Products } from '../model/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = signal([
    { id: 1,
      name: 'product 1',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 2,
      name: 'product 2',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 3,
      name: 'product 3',
      intro:
        'La product 3 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 4,
      name: 'product 4',
      intro:
        'La product 4 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 5,
      name: 'product 5',
      intro:
        'La product 5 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 6,
      name: 'product 6',
      intro:
        'La product 6 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 7,
      name: 'product 7',
      intro:
        'La product 7 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 8,
      name: 'product 8',
      intro:
        'La product 8 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 9,
      name: 'product 9',
      intro:
        'La product 9 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },
    { id: 10,
      name: 'product 10',
      intro:
        'La product 10 es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdG9zfGVufDB8fDB8fHww',
    
    },

  ])
  getOneRecipeById(id: number) {
    const product = this.products().find((product: Products) => id === product.id);
    if (product !== undefined) {
      return product;
    } else {
      return null;
    }
  }
}

