import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thanks',
  standalone: true,
  imports: [],
  templateUrl: './thanks.component.html',
  styleUrl: './thanks.component.css'
})
export class ThanksComponent {

  private router = inject(Router)

  goToHome(){

    this.router.navigate(['/']);

  }
}
