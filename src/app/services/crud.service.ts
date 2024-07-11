import { HttpHeaders , HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';
import { Categorie } from '../models/categorie.model';
import { Commentaire } from '../models/commentaire.model';
import { Condidat } from '../models/condidat.model';
import { Entreprise } from '../models/entreprise.model';
import { Message } from '../models/message.model';
import { OffreEmploi } from '../models/offreDemploi.model';

const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'}) 
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  apiUrl = "http://localhost:8081/api"
  constructor(private http : HttpClient) {
    
  }

  /* Administrateur */ 

  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl + "/admin");
  }

  addNewAdmin(admin :Admin): Observable<Admin>{
    return this.http.post<Admin>(this.apiUrl + "/admin", admin, httpOptions) ;
  }

  deleteAdmin(idAdmin : number){
    const url = `${this.apiUrl+"/admin"}/${idAdmin}`
    return this.http.delete(url , httpOptions)
  }

  updateAdmin(admin : Admin) : Observable<Admin>{
    return this.http.put<Admin>(this.apiUrl + "/admin" , admin , httpOptions)
  }

  findAdmin(idAdmin : number): Observable<Admin>{
    const url = `${this.apiUrl + "/admin/id"}/${idAdmin}`
    return this.http.get<Admin>(url , httpOptions)
  }

  /* Condidat */

  getCondidats() : Observable<Condidat[]>{
    return this.http.get<Condidat[]>(this.apiUrl + "/condidat")
  }

  addNewCondidat(condidat : Condidat) : Observable<Condidat> {
    return this.http.post<Condidat>(this.apiUrl + "/condidat" , condidat , httpOptions)
  }

  deleteCondidat(idCondidat : number){
    const url = `${this.apiUrl + "/condidat"}/${idCondidat}`
    return this.http.delete(url , httpOptions)
  }

  updateCondidat(condidat : Condidat) : Observable<Condidat>{
    return this.http.put<Condidat>(this.apiUrl + "/condidat" , condidat , httpOptions)
  }

  findCondidat(idCondidat : number): Observable<Condidat> {
    const url = `${this.apiUrl + "/condidat/id"}/${idCondidat}`
    return this.http.get<Condidat>(url , httpOptions)
  }


  /* Entreprise */

  getEntreprises(): Observable<Entreprise[]> {
    return this.http.get<Entreprise[]>(this.apiUrl + "/entreprise")
  }

  addNewEntreprise(entreprise : Entreprise) : Observable<Entreprise>{
    return this.http.post<Entreprise>(this.apiUrl + "/entreprise" , entreprise , httpOptions)
  }

  deleteEntreprise(idEntreprise : number) {
    const url = `${this.apiUrl + "/entreprise"}/${idEntreprise}`
    return this.http.delete(url , httpOptions)
  }

  updateEntreprise(entreprise : Entreprise): Observable<Entreprise> {
    return this.http.put<Entreprise>(this.apiUrl + "/entreprise" , entreprise , httpOptions)
  }

  findEntreprise(idEntreprise : number): Observable<Entreprise>{
    const url = `${this.apiUrl + "/entreprise/id"}/${idEntreprise}`
    return this.http.get<Entreprise>(url , httpOptions)
  }

  /* Offre D'emploi */

  getOffres() : Observable<OffreEmploi[]>{
    return this.http.get<OffreEmploi[]>(this.apiUrl + "/offre")
  }

  addNewOffreDemploi(offre : OffreEmploi) : Observable<OffreEmploi>{
    return this.http.post<OffreEmploi>(this.apiUrl + "/offre" , offre , httpOptions)
  }

  deleteOffre(idOffre : number) {
    const url = `${this.apiUrl + "/offre"}/${idOffre}`
    return this.http.delete(url , httpOptions)
  }

  updateOffreDemploi(offre : OffreEmploi) : Observable<OffreEmploi>{
    return this.http.put<OffreEmploi>(this.apiUrl + "/offre" , offre , httpOptions)
  }

  findOffre(idOffre : number) : Observable<OffreEmploi>{
    const url = `${this.apiUrl + "/offre/id"}/${idOffre}`
    return this.http.get<OffreEmploi>(url , httpOptions)
  }

  /* Categorie de l'offre */

  getCategories() : Observable<Categorie[]> {
    return this.http.get<Categorie[]>(this.apiUrl + "/categorie" , httpOptions)
  }

  addNewCategorie(categorie : Categorie) : Observable<Categorie>{
    return this.http.post<Categorie>(this.apiUrl + "/categorie" , categorie , httpOptions)
  }

  updateCategorie(categorie : Categorie) : Observable<Categorie>{
    return this.http.put<Categorie>(this.apiUrl + "/categorie" , categorie , httpOptions)
  }

  deleteCategorie(idCat : number) {
    const url = `${this.apiUrl + "/categorie"}/${idCat}`
    return this.http.delete(url , httpOptions)
  }

  findCategorie(idCat : number) : Observable<Categorie> {
    const url = `${this.apiUrl + "/categorie/id"}/${idCat}`
    return this.http.get<Categorie>(url , httpOptions)
  }

  /* Messages */

  getMessages() : Observable<Message[]> {
    return this.http.get<Message[]>(this.apiUrl + "/message" , httpOptions)
  }

  deleteMessage(idMessage : number) {
    const url = `${this.apiUrl + "/message"}/${idMessage}`
    return this.http.delete(url , httpOptions)
  }

  /* Commentaire */

  getCommentaires(): Observable<Commentaire[]> {
    return this.http.get<Commentaire[]>(this.apiUrl + "/commentaire" , httpOptions)
  }

  deleteCommentaire(idComment : number) {
    const url = `${this.apiUrl + "/commentaire"}/${idComment}`
    return this.http.delete(url , httpOptions)
  }


  /* File uploading */

  upload(file : File , user : String):Observable<HttpEvent<any>>{
    const formData = new FormData();
    formData.append('file' , file);

    const url = `${this.apiUrl+"/file/upload"}/${user}`

    const req = new HttpRequest('POST', url , formData, {
		  reportProgress: true,
		  responseType: 'json'
		});

    return this.http.request(req)
  }

  getFile(name : String): Observable<HttpEvent<Blob>> {
    const url = `${this.apiUrl+"/file/load"}/${name}`
		return this.http.get(url , {
      reportProgress: true ,
      observe: 'events' ,
      responseType : 'blob'
    });
	}

  /* Image */
  
  uploadImage(file : File , filename : string) {
    const imageFormData = new FormData();
    imageFormData.append('image', file, filename);

    const url = `${this.apiUrl + "/image/upload"}`

    return this.http.post(url , imageFormData)
  }


  loadImage(id : number) {
    const url = `${this.apiUrl + "/image/get/info"}/${id}`
    return this.http.get(url) 
  }

  deleteImage(idImage : number) {
    const url = `${this.apiUrl + "/image/delete"}/${idImage}`
    return this.http.delete(url)
  }

}
