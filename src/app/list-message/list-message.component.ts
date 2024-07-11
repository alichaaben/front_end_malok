import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../models/message.model';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent implements OnInit {

  listMessages : Message[]
  numberOfMessages : number = 0
  constructor(private service : CrudService , private router : Router) { }

  ngOnInit(): void {
    this.service.getMessages().subscribe(messages => {
      this.listMessages = messages 
      this.numberOfMessages = messages.length
    })
  }

  deleteMessage(message : Message) {
    if(confirm("Es-tu sûr ! vous voulez supprimer ce message ?")){
      this.service.deleteMessage(message.idMessage).subscribe(message => {
        this.router.navigate(['/home/message']).then(() => {
          window.location.reload()
        })
      })
    }
  }

}
