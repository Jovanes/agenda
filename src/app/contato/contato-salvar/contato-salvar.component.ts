import { Component, OnInit } from '@angular/core';
import { Contato } from '../entidade/contato';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-contato-salvar',
  templateUrl: './contato-salvar.component.html',
  styleUrls: ['./contato-salvar.component.scss'],
})
export class ContatoSalvarComponent implements OnInit {
contato: Contato = new Contato();

  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {}
salvar(){
this.banco.list('contato').push(this.contato);
this.contato = new Contato();
alert('deu certo aaaaaa!! VAMO VÉIO RAPTORS É SELEÇAO');


}
}
