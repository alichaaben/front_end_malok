import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-categorie',
  templateUrl: './list-categorie.component.html',
  styleUrls: ['./list-categorie.component.css']
})
export class ListCategorieComponent implements OnInit {

  listeCategs : Categorie[]
  numberOfCats : number = 0 
  constructor(private service : CrudService , private router : Router) { }

  ngOnInit(): void {
    this.service.getCategories().subscribe(cats => {
      this.listeCategs = cats 
      this.numberOfCats = cats.length
    })
  }

  deletCategorie(cat : Categorie) {
    if(confirm("Es-tu sûr ! vous voulez supprimer cette categorie ?")){
      this.service.deleteCategorie(cat.idCategorie).subscribe(cat => {
        this.router.navigate(['/home/categorie']).then(() => {
          window.location.reload()
        })
      })
    }
  }

}
