import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SugestoesPage } from '../pages/sugestoes/sugestoes';
import { SobreNosPage } from '../pages/sobre-nos/sobre-nos';
import { ConteudosIccPage } from '../pages/conteudos-icc/conteudos-icc';
import { ConteudosGaPage } from '../pages/conteudos-ga/conteudos-ga';
import { ConteudosMatDiscretaPage } from '../pages/conteudos-mat-discreta/conteudos-mat-discreta';
import { ConteudosCalculo1Page } from '../pages/conteudos-calculo1/conteudos-calculo1';
import { IccIntroPage } from '../pages/icc-intro/icc-intro';
import { IccProgramacaoPage } from '../pages/icc-programacao/icc-programacao';
import { Calculo1FuncoesPage } from '../pages/calculo1-funcoes/calculo1-funcoes';
import { Calculo1LimitesPage } from '../pages/calculo1-limites/calculo1-limites';
import { Calculo1DerivadasPage } from '../pages/calculo1-derivadas/calculo1-derivadas';
import { Calculo1DerivadasDefinicoesPage } from '../pages/calculo1-derivadas-definicoes/calculo1-derivadas-definicoes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SugestoesPage,
    SobreNosPage,
    ConteudosIccPage,
    ConteudosGaPage,
    ConteudosMatDiscretaPage,
    ConteudosCalculo1Page,
    IccIntroPage,
    IccProgramacaoPage,
    Calculo1FuncoesPage,
    Calculo1LimitesPage,
    Calculo1DerivadasPage,
    Calculo1DerivadasDefinicoesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SugestoesPage,
    SobreNosPage,
    ConteudosIccPage,
    ConteudosGaPage,
    ConteudosMatDiscretaPage,
    ConteudosCalculo1Page,
    IccIntroPage,
    IccProgramacaoPage,
    Calculo1FuncoesPage,
    Calculo1LimitesPage,
    Calculo1DerivadasPage,
    Calculo1DerivadasDefinicoesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
