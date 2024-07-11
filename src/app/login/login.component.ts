import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  admin = new Admin() 
  error = 0


  constructor(private auth : AuthentificationService , private router : Router) { }

  ngOnInit(): void {
  }


  onLogIn() {
    this.auth.getAdminFromDataBase(this.admin.loginAdmin).subscribe((ad: Admin) => {
      if(this.admin != null && ad != null && ad.passwordAdmin == this.admin.passwordAdmin){
        this.auth.login(ad)
        this.router.navigate(['/home'])
      }else {
        this.error = 1 
      }
    }, (err) => console.log(err))
  }

}
