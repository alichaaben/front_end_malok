import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../models/categorie.model';
import { Entreprise } from '../models/entreprise.model';
import { OffreEmploi } from '../models/offreDemploi.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {


  currentOffre = new OffreEmploi()
  listeEnts : Entreprise[]
  entreprise : Entreprise
  idEnts : number 
  listeCategs : Categorie[]
  categorie : Categorie 
  idCat : number

  constructor(
    private activ : ActivatedRoute , 
    private service : CrudService ,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.service.findOffre(this.activ.snapshot.params.id).subscribe(offre => {
      this.currentOffre = offre ;
      this.idEnts = offre.entreprise.idEntreprise
      this.idCat = offre.categorie.idCategorie
    })

    this.service.getEntreprises().subscribe(ents => {
      this.listeEnts = ents
    })

    this.service.getCategories().subscribe(cats => {
      this.listeCategs = cats
    })
  }

  updateOffre() {
    this.service.findEntreprise(this.idEnts).subscribe(ents => {
      this.entreprise = ents
      this.currentOffre.entreprise = this.entreprise
      this.service.findCategorie(this.idCat).subscribe(cat => {
        this.categorie = cat
        this.currentOffre.categorie = this.categorie
        this.service.updateOffreDemploi(this.currentOffre).subscribe(offre => {
          this.router.navigate(['/home/offre']).then(() => {
            window.location.reload()
          })
        })
      })
    })
  }

}
