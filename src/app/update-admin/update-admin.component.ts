import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  currentAdmin = new Admin()
  constructor(
    private activatedRoute : ActivatedRoute ,
    private service : CrudService ,
    private router : Router 
  ) { }


  updateAdmin() {
    this.service.updateAdmin(this.currentAdmin).subscribe(admin => {
      this.router.navigate(['/home/admin']).then(() => {
        window.location.reload()
      })
    })
  }

  ngOnInit(): void {
    this.service.findAdmin(this.activatedRoute.snapshot.params.id).subscribe(admin => {
      this.currentAdmin = admin 
    })
  }

}
