import { Component } from '@angular/core';
import {FlexModule} from "@angular/flex-layout";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from '@angular/common';
import {Router} from "@angular/router";
@Component({
  selector: 'app-signup',
  standalone: true,
    imports: [
        FlexModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
      MatIconModule,
      CommonModule
    ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private router: Router) {
  }
  isFormVisible = true;
  isFormVisible2 = false;
  isFormVisible1: Boolean = false;

  toggleFormVisibility() {
    this.isFormVisible = false ;
    this.isFormVisible2 = true ;
    this.isFormVisible1 = false ;
  }
  toggleFormVisibility1() {
    this.isFormVisible1 = true ;
    this.isFormVisible = false ;
    this.isFormVisible2 = false ;
  }
  toggleFormVisibility3() {
    this.isFormVisible =true ;
    this.isFormVisible1 = false ;
    this.isFormVisible2 = false ;
  }
  redirectToLogin() {
    this.router.navigate(['/']); // Assurez-vous que '/signup' correspond à l'URL de votre composant d'inscription
  }

}

