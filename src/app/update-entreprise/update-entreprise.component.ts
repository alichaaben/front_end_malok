import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from '../models/entreprise.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit {

  currentEnt = new Entreprise()
  constructor(private activ : ActivatedRoute,  private service : CrudService , private router : Router) { }

  updateEntreprise() {
    this.service.updateEntreprise(this.currentEnt).subscribe(ent => {
      this.router.navigate(['/home/entreprise']).then(() => {
        window.location.reload()
      })
    })
  }

  ngOnInit(): void {
    this.service.findEntreprise(this.activ.snapshot.params.id).subscribe(ent => {
      this.currentEnt = ent 
    })
  }

}
