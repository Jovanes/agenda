import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {ContatoSalvarComponent} from  './contato/contato-salvar/contato-salvar.component';
import {ContatoListarComponent} from  './contato/contato-listar/contato-listar.component';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';


@NgModule({
  declarations: [AppComponent,ContatoSalvarComponent,ContatoListarComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,FormsModule,
  AngularFireModule.initializeApp({
    apiKey: "AIzaSyAVIAym28fc0n04kPqB-nCdy2MoF97TnL8",
    authDomain: "agenda-d3cbb.firebaseapp.com",
    databaseURL: "https://agenda-d3cbb.firebaseio.com",
    projectId: "agenda-d3cbb",
    storageBucket: "",
    messagingSenderId: "310887257017",
    appId: "1:310887257017:web:94aa9126d5c1dff3"
  }),AngularFireDatabaseModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
