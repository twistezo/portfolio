import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Routing
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../firebase-auth/auth.service';
import { FirebaseAuthComponent } from '../firebase-auth/firebase-auth.component';
// My Components
import { TemplateComponent } from '../template/template.component';
import { MainComponent } from '../main/main.component';
import { BlogComponent } from '../blog/blog.component';
import { ProjectsComponent } from '../projects/projects.component';
import { FormComponent } from '../form/form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'prefix'
  },
  {
    path: '**',
    redirectTo: '/main',
    pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [
    FirebaseAuthComponent,
    MainComponent,
    BlogComponent,
    TemplateComponent,
    ProjectsComponent,
    FormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AuthService, AngularFireDatabase, BlogComponent],
  bootstrap: [TemplateComponent]  // main (first) component
})

export class AppModule { }


