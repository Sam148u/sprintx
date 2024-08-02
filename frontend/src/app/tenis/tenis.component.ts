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
  selector: 'app-tenis',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './tenis.component.html',
  styleUrls: ['./tenis.component.css']
})
export class TenisComponent implements OnInit {
  tenisItems: articulos[] = []; 
articulos: any;

  constructor() { }

  ngOnInit(): void {
    this.obtenerArticulosDesdeAPI(); 
  }

  async obtenerArticulosDesdeAPI(): Promise<void> {
    try {
      const url = 'http://18.217.23.211:3000/articulos'; 
      const response = await fetch(url);
      const data = await response.json();
      this.tenisItems = data;
      console.log(data);
    } catch (error) {
      console.error('Error al obtener datos desde la API:', error);
    }
  }
}

