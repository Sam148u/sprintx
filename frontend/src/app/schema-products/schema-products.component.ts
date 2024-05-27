import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-schema-products',
  standalone: true,
  imports: [],
  templateUrl: './schema-products.component.html',
  styleUrl: './schema-products.component.css'
})
export class SchemaProductsComponent {
  @Input() name='';
  @Input() price='';
  @Input() description='';
  @Input() imageUrl='';
  @Input() featured:boolean=false;
}
