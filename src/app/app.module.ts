import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HardstyleComponent } from './hardstyle/hardstyle.component';
import { FormsModule } from '@angular/forms';

import { HardstyleService } from './services/hardstyle.service';
import { HarstyleModifComponent } from './harstyle-modif/harstyle-modif.component';
import { HarstyleNewComponent } from './harstyle-new/harstyle-new.component';
import { HomeComponent } from './home/home.component';
import { HarstyleListComponent } from './harstyle-list/harstyle-list.component'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {
    path: 'hardstyles',
    component: HarstyleListComponent
  },
  {
    path: 'new',
    component: HarstyleNewComponent
  },
  {
    path: 'modif/:id',
    component: HarstyleModifComponent
  },
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HardstyleComponent,
    HarstyleModifComponent,
    HarstyleNewComponent,
    HomeComponent,
    HarstyleListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HardstyleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
