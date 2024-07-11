import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  totalAdmins : number = 0 // ok
  totalEnt : number = 0 // Ok
  totalOffres : number = 0 // Ok
  totalCondidats : number = 0 
  totalCategories : number = 0 // Ok

  constructor(private service : CrudService) { }


  ngOnInit(): void {
    this.service.getAdmins().subscribe(admins => {
      this.totalAdmins = admins.length
    })

    this.service.getCondidats().subscribe(conds => {
      this.totalCondidats = conds.length
    })

    this.service.getEntreprises().subscribe(ents => {
      this.totalEnt = ents.length
    })

    this.service.getOffres().subscribe(offres => {
      this.totalOffres = offres.length
    })

    this.service.getCategories().subscribe(cats => {
      this.totalCategories = cats.length
    })
  }

}
