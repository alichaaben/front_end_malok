import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { AddCondidatComponent } from './add-condidat/add-condidat.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { ListCommentaireComponent } from './list-commentaire/list-commentaire.component';
import { ListCondidatComponent } from './list-condidat/list-condidat.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { ListMessageComponent } from './list-message/list-message.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { UpdateCondidatComponent } from './update-condidat/update-condidat.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'connexion', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'admin' , component: ListAdminComponent} ,
      { path: 'addadmin' , component: AddAdminComponent} ,
      { path: 'updateadmin/:id' , component: UpdateAdminComponent},
      { path: 'condidat' , component: ListCondidatComponent} ,
      { path: 'addcondidat' , component: AddCondidatComponent} ,
      { path: 'updatecondidat/:id' , component: UpdateCondidatComponent} ,
      { path: 'entreprise' , component: ListEntrepriseComponent} ,
      { path: 'addentreprise' , component: AddEntrepriseComponent} ,
      { path: 'updateentreprise/:id' , component: UpdateEntrepriseComponent},
      { path: 'offre' , component: ListOffreComponent} ,
      { path: 'addoffre' , component: AddOffreComponent} ,
      { path: 'updateoffre/:id' , component: UpdateOffreComponent},
      { path: 'categorie' , component: ListCategorieComponent} ,
      { path: 'addcategorie' , component: AddCategorieComponent} ,
      { path: 'updatecategorie/:id' , component: UpdateCategorieComponent} ,
      { path: 'message' , component: ListMessageComponent},
      { path: 'commentaire' , component: ListCommentaireComponent} 

    ]
  },
  { path: "**" , component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
