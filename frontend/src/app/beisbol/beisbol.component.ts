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
  selector: 'app-beisbol',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './beisbol.component.html',
  styleUrls: ['./beisbol.component.css']
})
export class BeisbolComponent implements OnInit {
  beisbolItems: articulos[] = []; 
articulos: any;

  constructor() { }

  ngOnInit(): void {
    this.obtenerArticulosDesdeAPI(); 
  }

  async obtenerArticulosDesdeAPI(): Promise<void> {
    try {
      const url = 'http://3.15.230.254:3000/articulos'; 
      const response = await fetch(url);
      const data = await response.json();
      this.beisbolItems = data;
      console.log(data);
    } catch (error) {
      console.error('Error al obtener datos desde la API:', error);
    }
  }
}

