import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {ContatoSalvarComponent} from   './contato/contato-salvar/contato-salvar.component';
import {ContatoListarComponent} from   './contato/contato-listar/contato-listar.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  {path: 'contato-salvar', component: ContatoSalvarComponent},
  {path: 'contato-listar', component: ContatoListarComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
