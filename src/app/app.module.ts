import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { UpdateAdminComponent } from './update-admin/update-admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListCondidatComponent } from './list-condidat/list-condidat.component';
import { AddCondidatComponent } from './add-condidat/add-condidat.component';
import { UpdateCondidatComponent } from './update-condidat/update-condidat.component';
import { ListEntrepriseComponent } from './list-entreprise/list-entreprise.component';
import { AddEntrepriseComponent } from './add-entreprise/add-entreprise.component';
import { UpdateEntrepriseComponent } from './update-entreprise/update-entreprise.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { ListOffreComponent } from './list-offre/list-offre.component';
import { ListCategorieComponent } from './list-categorie/list-categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { UpdateCategorieComponent } from './update-categorie/update-categorie.component';
import { ListMessageComponent } from './list-message/list-message.component';
import { ListCommentaireComponent } from './list-commentaire/list-commentaire.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    SidebarComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AddAdminComponent,
    ListAdminComponent,
    UpdateAdminComponent,
    PageNotFoundComponent,
    ListCondidatComponent,
    AddCondidatComponent,
    UpdateCondidatComponent,
    ListEntrepriseComponent,
    AddEntrepriseComponent,
    UpdateEntrepriseComponent,
    AddOffreComponent,
    UpdateOffreComponent,
    ListOffreComponent,
    ListCategorieComponent,
    AddCategorieComponent,
    UpdateCategorieComponent,
    ListMessageComponent,
    ListCommentaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
