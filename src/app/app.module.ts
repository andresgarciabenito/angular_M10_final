import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { TrainingComponent } from './training/training.component';
import { GamesComponent } from './games/games.component';
import { MediaComponent } from './media/media.component';
import { ShopComponent } from './shop/shop.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: 'body', component: BodyComponent },
  {path: 'affiliates', component: AffiliatesComponent },
  {path: 'training', component: TrainingComponent },
  {path: 'games', component: GamesComponent },
  {path: 'media', component: MediaComponent },
  {path: 'shop', component: ShopComponent },
  {path: 'login', component: LoginComponent },
  //cualquier ruta desconocida se redirige a una página de inicio
  {path:'**', redirectTo: '/body', pathMatch:'full'}
];

//services
import { Team2019Service } from './team2019.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    GamesComponent,
    MediaComponent,
    ShopComponent,
    AffiliatesComponent,
    TrainingComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    Team2019Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
