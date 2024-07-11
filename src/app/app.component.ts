import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'application-gestion';

  constructor(public auth: AuthentificationService, private router: Router) {

  }

  ngOnInit() {
    let connected: string;
    let loggedAdmin: string;
    let adminRole : string 
    let idAdmin : string
    connected = localStorage.getItem('connected');
    loggedAdmin = localStorage.getItem('loggedAdmin');
    adminRole = localStorage.getItem('role')
    idAdmin = localStorage.getItem('idAdmin')
    if (connected === "false" || !loggedAdmin){
      this.router.navigate(['/connexion']);
    }
    else{
      this.auth.setLoggedAdminFromLocalStorage(loggedAdmin,adminRole,idAdmin);
      //this.router.navigate(['/home'])
    }
  }
}
