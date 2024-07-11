import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Condidat } from '../models/condidat.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-update-condidat',
  templateUrl: './update-condidat.component.html',
  styleUrls: ['./update-condidat.component.css']
})
export class UpdateCondidatComponent implements OnInit {


  currentCondidat = new Condidat();
  selectedFile: File;

  constructor(
    private actv : ActivatedRoute ,
    private service : CrudService ,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.service.findCondidat(this.actv.snapshot.params.id).subscribe(condidat => {
      this.currentCondidat = condidat
    })
  }

  updateCondidat() {
    if(this.selectedFile != undefined && this.currentCondidat.prenomCondidat + this.selectedFile.name != this.currentCondidat.postulerCondidat) {
      this.currentCondidat.postulerCondidat = this.currentCondidat.telephoneCondidat + this.selectedFile.name
    }

    this.service.updateCondidat(this.currentCondidat).subscribe(condidat => {
      this.service.upload(this.selectedFile, this.currentCondidat.postulerCondidat).subscribe(event => {
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

}
