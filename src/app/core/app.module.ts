import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'blog', component: BlogComponent },
  { path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    FirebaseAuthComponent,
    MainComponent,
    BlogComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
  ],
  providers: [AuthService, AngularFireDatabase],
  bootstrap: [TemplateComponent]  // main (first) component
})

export class AppModule { }


