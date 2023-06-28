import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  public appPages = [

    //Telas Individual
    // title: 'Home', url: '/folder/inbox', icon: 'mail' 
    { title: 'Home', url: '/home'},
    { title: 'Metas', url: '/metas'},
    { title: 'Gastos', url: '/gastos'},
    { title: 'Deveres', url: '/deveres'},
    { title: 'Ganhos', url: '/ganhos'},
    { title: 'Estatística', url: '/estatisticas'},
    { title: 'Perfil', url: '/perfil'},

  ];

  constructor() {}

}
