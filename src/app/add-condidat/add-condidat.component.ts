import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Condidat } from '../models/condidat.model';
import { AuthentificationService } from '../services/authentification.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-condidat',
  templateUrl: './add-condidat.component.html',
  styleUrls: ['./add-condidat.component.css']
})
export class AddCondidatComponent implements OnInit {

  newCondidat = new Condidat()
  selectedFile: File;

  constructor(
    private service: CrudService,
    private router: Router,
    private httpClient: HttpClient) { }

  addCondidat() {
    this.newCondidat.postulerCondidat = this.newCondidat.telephoneCondidat + this.selectedFile.name
    this.service.addNewCondidat(this.newCondidat).subscribe(condidat => {
      this.service.upload(this.selectedFile, this.newCondidat.postulerCondidat).subscribe(event => {
        console.log(event)
        this.router.navigate(['/home/condidat']).then(() => {
          window.location.reload();
        })
      })
    })
  }

  onFileChanged(event: any) {
    this.selectedFile = event.target.files[0];
  }


  ngOnInit(): void {
  }

}
