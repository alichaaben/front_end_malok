import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {

  newCategorie = new Categorie()
  constructor(private service : CrudService , private router : Router) { }

  addCategorie() {
    this.service.addNewCategorie(this.newCategorie).subscribe(cat => {
      this.router.navigate(['/home/categorie']).then(() => {
        window.location.reload()
      })
    })
  }

  ngOnInit(): void {
  }

}
