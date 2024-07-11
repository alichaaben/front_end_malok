import { Condidat } from "./condidat.model";
import { Entreprise } from "./entreprise.model";

export class Message {
    idMessage : number;
    nomMessage : string;
    emailMessage : string;
    sujetMessage  : string;
    contenuMessage  : string;
    condidatMessage : Condidat; 
    entrepriseMessage : Entreprise
}
