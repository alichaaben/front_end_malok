import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from '../models/entreprise.model';
import { Image } from '../models/image.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-add-entreprise',
  templateUrl: './add-entreprise.component.html',
  styleUrls: ['./add-entreprise.component.css'],
})
export class AddEntrepriseComponent implements OnInit {
  newEntreprise = new Entreprise();
  uploadedImage: File;
  image: any;
  response: any;

  constructor(private service: CrudService, private router: Router) {}

  addNewEntreprise() {
    this.service
      .uploadImage(this.uploadedImage, this.uploadedImage.name)
      .subscribe(
        (response: any) => {
          this.service.loadImage(response.idImage).subscribe((image: any) => {
            let img = new Image();
            img.idImage = image.idImage;
            img.name = image.name;
            img.type = image.type;
            img.image = image.image;
            this.newEntreprise.image = new Image();
            this.newEntreprise.image = img;
            this.service
              .addNewEntreprise(this.newEntreprise)
              .subscribe((ent) => {
                this.router.navigate(['/home/entreprise']).then(() => {
                  window.location.reload();
                });
              });
          });
        },
        (err) => {
          console.log(err);
        }
      );
  }

  onImageUpload(event: any) {
    this.uploadedImage = event.target.files[0];
  }

  ngOnInit(): void {}
}
