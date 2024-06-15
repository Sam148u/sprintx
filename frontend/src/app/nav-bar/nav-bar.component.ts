import { Component, inject } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLinkWithHref, CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent{
  private router = inject(Router)
  private userService = inject(UserService)
  isLogged() {
    return this.userService.isLogged()
  }

  logout() {
    this.userService.removeToken()
    this.router.navigate(["/login"])
  }
}
