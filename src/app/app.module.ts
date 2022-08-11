import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { DonutListComponent } from './donut-list/donut-list.component';
import { DonutDetailsComponent } from './donut-details/donut-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FamousPeopleListComponent } from './famous-people-list/famous-people-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FamousePeopleDetailsComponent } from './famouse-people-details/famouse-people-details.component';

const routes: Routes = [
{path: 'Donuts', component: DonutListComponent},
{path: 'Donuts/:id', component: DonutDetailsComponent},
{path: 'FamousPeople', component: FamousPeopleListComponent},
{path: 'Famouspeople/:firstName', component: FamousePeopleDetailsComponent},


]

@NgModule({
  declarations: [
    AppComponent,
    DonutListComponent,
    DonutDetailsComponent,
    FamousPeopleListComponent,
    FamousePeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
