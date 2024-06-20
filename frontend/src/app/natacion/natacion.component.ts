interface articulos {
  _id: number;
  name: string;
  price:number;
  imageUrl: string;
  talla: number;
  descripción: string;
  
}

import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-natacion',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './natacion.component.html',
  styleUrls: ['./natacion.component.css']
})
export class NatacionComponent implements OnInit {
  natacionItems: articulos[] = []; 
articulos: any;

  constructor() { }

  ngOnInit(): void {
    this.obtenerArticulosDesdeAPI(); 
  }

  async obtenerArticulosDesdeAPI(): Promise<void> {
    try {
      const url = 'http://localhost:3000/articulos'; 
      const response = await fetch(url);
      const data = await response.json();
      this.natacionItems = data;
      console.log(data);
    } catch (error) {
      console.error('Error al obtener datos desde la API:', error);
    }
  }
}
