import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { BreadscrumbsComponent } from './header/breadscrumbs/breadscrumbs.component';
import { FilterComponent } from './main/filter/filter.component';
import { FilterGroupComponent } from './main/filter-group/filter-group.component';
import { ListComponent } from './main/list/list.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuMainComponent } from './side-menu/side-menu-main/side-menu-main.component';
import { SideMenuMainParticipantsComponent } from './side-menu/side-menu-main-participants/side-menu-main-participants.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BreadscrumbsComponent,
    FilterComponent,
    FilterGroupComponent,
    ListComponent,
    SideMenuComponent,
    SideMenuMainComponent,
    SideMenuMainParticipantsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
