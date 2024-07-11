import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../models/entreprise.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.css']
})
export class ListEntrepriseComponent implements OnInit {

  listeEnt : Entreprise[]
  numberOfEnts : number = 0
  postResponse : any
  image: any ;
  listImages : String[] = []

  constructor(private service : CrudService , private router : Router) { }

  ngOnInit(): void {
    this.service.getEntreprises().subscribe(entreprises => {
      this.numberOfEnts = entreprises.length
      this.listeEnt = entreprises

      for (let index = 0; index < this.listeEnt.length; index++) {
        this.service.loadImage(this.listeEnt[index].image.idImage).subscribe((res: any) => {
          //console.log(res.name)
          this.listImages[index] = ('data:' + res.type + ';base64,' + res.image)
        })
      }
    })
  }

  deleteEntereprise(ent : Entreprise) {
    if(confirm("Es-tu sûr ! vous voulez supprimer cette entreprise ?")) {
      this.service.deleteEntreprise(ent.idEntreprise).subscribe(ent => {
        this.router.navigate(['/home/entreprise']).then(() => {
          window.location.reload()
        })
      })
    }
  }

}
