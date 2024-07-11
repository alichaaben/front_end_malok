import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OffreEmploi } from '../models/offreDemploi.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-offre',
  templateUrl: './list-offre.component.html',
  styleUrls: ['./list-offre.component.css']
})
export class ListOffreComponent implements OnInit {


  listeOffres : OffreEmploi[]
  numberOfOffres : number = 0
  postResponse : any
  image: any ;
  listImages : String[] = []

  constructor(private service : CrudService , private router : Router) { }

  deleteOffre(offre : OffreEmploi) {
    if(confirm("Es-tu sûr ! vous voulez supprimer cette offre ?")) {
      let imageId = offre.entreprise.image.idImage
      this.service.deleteOffre(offre.idOffre).subscribe(offre => {
        this.service.deleteImage(imageId).subscribe(() => {
          this.router.navigate(['/home/offre']).then(() => {
            window.location.reload()
          })
        })
      })
    }
  }

  ngOnInit(): void {
    this.service.getOffres().subscribe(offres => {
      this.listeOffres = offres
      this.numberOfOffres = offres.length
      /* this.listeOffres.forEach(offre => {
        this.service.loadImage(offre.image.idImage).subscribe((res: any) => {
          //console.log(res.name)
          this.listImages.push('data:' + res.type + ';base64,' + res.image)
        })
        
      }) */

      for (let index = 0; index < this.listeOffres.length; index++) {
        this.service.loadImage(this.listeOffres[index].entreprise.image.idImage).subscribe((res: any) => {
          //console.log(res.name)
          this.listImages[index] = ('data:' + res.type + ';base64,' + res.image)
        })
      }
    })
  }

}
