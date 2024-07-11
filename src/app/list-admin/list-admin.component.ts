import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { AuthentificationService } from '../services/authentification.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent implements OnInit {

  listeAdmin : Admin[]
  numberOfAdmins : number = 0
  roleAdmin : string = undefined

  constructor(private service : CrudService , private router : Router , private auth : AuthentificationService) { 
  }

  deleteAdmin(admin : Admin){
    if (confirm("Es-tu sûr ! vous voulez supprimer ce administrateur ?")){
      this.service.deleteAdmin(admin.idAdmin).subscribe(ad =>{
        let currentAdminId = parseInt(localStorage.getItem('idAdmin'))
        if (currentAdminId == admin.idAdmin) {
          this.auth.logout()
        }else{
          this.router.navigate(['/home/admin']).then(() => {
            window.location.reload()
          })
        }
      })
    }
  }

  ngOnInit(): void {

    this.roleAdmin = localStorage.getItem('role')
    this.service.getAdmins().subscribe(admins => {
      this.listeAdmin = admins
      this.numberOfAdmins = this.listeAdmin.length
    })
  }

}
