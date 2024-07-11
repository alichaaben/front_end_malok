import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commentaire } from '../models/commentaire.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-commentaire',
  templateUrl: './list-commentaire.component.html',
  styleUrls: ['./list-commentaire.component.css']
})
export class ListCommentaireComponent implements OnInit {

  numberOfComments: number = 0;
  listeComments : Commentaire[]

  constructor(private service : CrudService , private router : Router) { }

  deleteComment(comment : Commentaire) {
    if(confirm("Es-tu sûr ! vous voulez supprimer ce commentaire")) {
      this.service.deleteCommentaire(comment.idCommentaire).subscribe(() => {
        this.router.navigate(['/home/commentaire']).then(() => {
          window.location.reload()
        })
      })
    }
  }

  ngOnInit(): void {
    this.service.getCommentaires().subscribe(comments => {
      this.listeComments = comments
      this.numberOfComments = comments.length
    })
  }

}
