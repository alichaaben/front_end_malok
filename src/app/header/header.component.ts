import { Component, OnInit } from '@angular/core';
import { Admin } from '../models/admin.model';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(public auth: AuthentificationService) { }

  ngOnInit(): void {
  }

}
