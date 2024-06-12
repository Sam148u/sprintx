import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLinkWithHref],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  
}
