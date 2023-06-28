import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  //Telas Inicio
  {
    path: 'login',
    loadChildren: () => import('./pagesInicio/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagesInicio/cadastro/cadastro.module').then(m => m.CadastroPageModule)
  },
  {
    path: 'classe',
    loadChildren: () => import('./pagesInicio/classe/classe.module').then(m => m.ClassePageModule)
  },
  {
    path: 'tipofamilia',
    loadChildren: () => import('./pagesInicio/tipofamilia/tipofamilia.module').then(m => m.TipofamiliaPageModule)
  },
  {
    path: 'iniciokid',
    loadChildren: () => import('./pagesInicio/iniciokid/iniciokid.module').then(m => m.IniciokidPageModule)
  },


  //Telas Individual
  {
    path: 'home',
    loadChildren: () => import('./pagesIndividual/home/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'metas',
    loadChildren: () => import('./pagesIndividual/metas/metas.module').then(m => m.MetasPageModule)
  },
  {
    path: 'gastos',
    loadChildren: () => import('./pagesIndividual/gastos/gastos.module').then(m => m.GastosPageModule)
  },
  {
    path: 'deveres',
    loadChildren: () => import('./pagesIndividual/deveres/deveres.module').then(m => m.DeveresPageModule)
  },
  {
    path: 'ganhos',
    loadChildren: () => import('./pagesIndividual/ganhos/ganhos.module').then(m => m.GanhosPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pagesIndividual/perfil/perfil.module').then(m => m.PerfilPageModule)
  },
  {
    path: 'estatisticas',
    loadChildren: () => import('./pagesIndividual/estatisticas/estatisticas.module').then(m => m.EstatisticasPageModule)
  },

  
  //Telas Kids
  {
    path: 'home-kids',
    loadChildren: () => import('./pagesKids/home-kids/home-kids.module').then( m => m.HomeKidsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
