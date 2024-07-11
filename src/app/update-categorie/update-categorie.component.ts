import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrls: ['./update-categorie.component.css']
})
export class UpdateCategorieComponent implements OnInit {

  currentCategorie = new Categorie()
  constructor(
    private service : CrudService ,
    private router : Router ,
    private activ : ActivatedRoute
  ) { }


  updateCategorie() {
    this.service.updateCategorie(this.currentCategorie).subscribe(cat => {
      this.router.navigate(['/home/categorie']).then(() => {
        window.location.reload()
      })
    })
  }
  ngOnInit(): void {
    this.service.findCategorie(this.activ.snapshot.params.id).subscribe(cat => {
      this.currentCategorie = cat 
    })
  }

}
