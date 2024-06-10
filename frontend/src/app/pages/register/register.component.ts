import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  
  private userService = inject(UserService)
  private router = inject(Router);

  registerForm = new FormGroup({
    firstname: new FormControl("", {
      validators: [Validators.required]
    }),
    lastname: new FormControl("", {
      validators: [Validators.required]
    }),
    email: new FormControl("", {
      validators: [Validators.required]
    }),
    password: new FormControl("", {
      validators: [Validators.required]
    })
  })

  onSubmit(event: Event) {
    if (this.registerForm.valid) {
      console.log("Podemos enviar la información")
      console.log(this.registerForm.value);
      this.userService.register(this.registerForm.value).subscribe({
        next: response => {
        this.router.navigate(["/login"])
      },
      error: error => {
        console.log(error)
      }
    })
        
    }else {
        console.log("Campos no válidos")
    }
  } 
 
}
