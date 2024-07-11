import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { Entreprise } from '../models/entreprise.model';
import { Image } from '../models/image.model';
import { OffreEmploi } from '../models/offreDemploi.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

  newOffre = new OffreEmploi()
  listeEnts: Entreprise[]
  entreprise: Entreprise
  idEnts: number
  listeCategs: Categorie[]
  categorie: Categorie
  idCat: number
  

  constructor(private service: CrudService, private router: Router) { }

  addOffre() {
    this.service.findEntreprise(this.idEnts).subscribe(ent => {
      this.entreprise = ent
      this.newOffre.entreprise = new Entreprise()
      this.newOffre.entreprise = this.entreprise
      this.service.findCategorie(this.idCat).subscribe(cat => {
        this.categorie = cat
        this.newOffre.categorie = new Categorie()
        this.newOffre.categorie = this.categorie
        this.service.addNewOffreDemploi(this.newOffre).subscribe(offre => {
          this.router.navigate(['/home/offre']).then(() => {
            window.location.reload()
          })
        })
      })
    }
    );
  }

  ngOnInit(): void {
    this.service.getEntreprises().subscribe(ents => {
      this.listeEnts = ents
    })

    this.service.getCategories().subscribe(cats => {
      this.listeCategs = cats
    })
  }


}
