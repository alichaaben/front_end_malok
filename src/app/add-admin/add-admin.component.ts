import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../models/admin.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  newAdmin = new Admin()
  constructor(private service : CrudService , private router : Router) { }
  addNewAdmin() {
    this.service.addNewAdmin(this.newAdmin).subscribe(admin => {
      this.router.navigate(['/home/admin']).then(()=>{
        window.location.reload()
      })
    })
  }
  ngOnInit(): void {
  }

}
