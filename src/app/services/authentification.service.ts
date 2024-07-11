import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

const httpOptions ={
  headers: new HttpHeaders ({'Content-Type': 'application/json'}) 
}

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  public loggedAdmin : string 
  public loggedAdminId : number
  public connected : Boolean = false 
  public adminRole : string
  public currentAdmin : Admin

  private apiUrl = "http://localhost:8081/api/admin"

  constructor(private router : Router, private http: HttpClient) { }

  getAdminFromDataBase(adminLogin: string): Observable<Admin>{
    const url = `${this.apiUrl}/${adminLogin}`
    return this.http.get<Admin>(url) ;
  }

  addNewAdmin(admin :Admin): Observable<Admin>{
    return this.http.post<Admin>(this.apiUrl, admin, httpOptions) ;
  }

  logout () {
    this.connected = false 
    this.loggedAdmin = undefined
    localStorage.removeItem('loggedAdmin') 
    localStorage.removeItem('role')
    localStorage.removeItem('idAdmin')
    localStorage.setItem('connected', String(this.connected))
    this.router.navigate(['/connexion'])
  }

  login(admin : Admin) {
    this.currentAdmin = admin
    this.loggedAdmin = admin.nomAdmin + " " + admin.prenomAdmin 
    this.adminRole = admin.roleAdmin
    this.connected = true 
    localStorage.setItem('loggedAdmin', this.loggedAdmin) 
    localStorage.setItem('idAdmin', String(admin.idAdmin))
    localStorage.setItem('connected', String(this.connected))
    localStorage.setItem('role', this.adminRole)
  }

  setLoggedAdminFromLocalStorage(loggedAdmin : string , role : string , id : string) {
    this.connected = true 
    this.loggedAdmin = loggedAdmin 
    this.adminRole = role 
    this.loggedAdminId = parseInt(id)
  }

}
