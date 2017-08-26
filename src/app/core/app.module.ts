import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Routing
// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from '../core/app-routing.module';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from '../firebase-auth/auth.service';
import { FirebaseAuthComponent } from '../firebase-auth/firebase-auth.component';
// My
import { MainComponent } from '../main/main.component';
import { BlogComponent } from '../blog/blog.component';

@NgModule({
  declarations: [
    FirebaseAuthComponent,
    MainComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // RouterModule,
    // AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [MainComponent]  // main (first) component
})

export class AppModule { }
