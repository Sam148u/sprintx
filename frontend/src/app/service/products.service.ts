import { Injectable, signal } from '@angular/core';
// import { Products } from '../model/products';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  products = signal([
    { id: 1,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 2,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 3,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 4,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 5,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 6,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 7,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 8,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 9,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },
    { id: 10,
      name: 'product name goes here',
      intro:
        'La product name goes here es una receta clásica, fresca y crujiente, perfecta para una comida ligera o como acompañamiento. Su combinación de lechuga romana, crutones y un aderezo cremoso a base de anchoas y parmesano la convierte en una opción irresistible.',
      price: '$123.00',
      preparacion: '10 minutos',
      coccion: '5 minutos',
      imageUrl:
        'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    
    },

  ])
  // getOneRecipeById(id: number) {
  //   const product = this.products().find((product: Products) => id === product.id);
  //   if (product !== undefined) {
  //     return product;
  //   } else {
  //     return null;
  //   }
  // }
}

