import { HttpEvent, HttpEventType, HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidat } from '../models/condidat.model';

import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-condidat',
  templateUrl: './list-condidat.component.html',
  styleUrls: ['./list-condidat.component.css']
})
export class ListCondidatComponent implements OnInit {

  numberOfCondidats: number = 0
  listeCondidats: Condidat[]
  downloadedFile: any
  downloadStatus: any
  fileName: any
  constructor(private service: CrudService, private router: Router) { }

  ngOnInit(): void {
    this.service.getCondidats().subscribe(conds => {
      this.listeCondidats = conds
      this.numberOfCondidats = conds.length
    })
  }

  /* getUrl(name: String) {
    this.service.getFile(name).subscribe((url) => {
      switch (url.type) {
        case HttpEventType.Response:
          const downloadedFile = new Blob([url.body], { type: url.body.type });
          const a = document.createElement('a');
          a.setAttribute('style', 'display:none;');
          document.body.appendChild(a);
          a.download = this.fileName;
          a.href = URL.createObjectURL(downloadedFile);
          a.target = '_blank';
          a.click();
          document.body.removeChild(a);
          break;
      }
    })
  } */

  deleteCondidat(condidat : Condidat) {
    if(confirm("Es-tu sûr ! vous voulez supprimer ce condidat ?")){
      this.service.deleteCondidat(condidat.idCondidat).subscribe(() => {
        this.router.navigate(['/home/condidat']).then(() => {
          window.location.reload();
        })
      })
    }
  }


}
