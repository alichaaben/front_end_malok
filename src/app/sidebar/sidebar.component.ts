import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  listOfMessages : number = 0;
  listOfComments : number = 0;

  constructor(private auth: AuthentificationService , private service : CrudService) { }

  ngOnInit(): void {
    this.service.getMessages().subscribe(mess => {
      this.listOfMessages = mess.length
    })

    this.service.getCommentaires().subscribe(comments => {
      this.listOfComments = comments.length
    })
  }

  logout() {

    this.auth.logout()

  }

}
