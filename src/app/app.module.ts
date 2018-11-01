import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomePageComponent } from './project/module/home-page/home-page.component';
import { LastUpdateComponent } from './project/module/home-page/components/last-update/last-update.component';
import { SuggestedComponent } from './project/module/home-page/components/suggested/suggested.component';
import { HeaderComponent } from './project/core/header/header.component';
import { FooterComponent } from './project/core/footer/footer.component';
import { RegisterComponent } from './project/module/register/register.component';
import { LoginComponent } from './project/module/login/login.component';
import { DashboardComponent } from './project/module/member/module/dashboard/dashboard.component';
import { ProfileComponent } from './project/module/member/module/profile/profile.component';
import { MemberComponent } from './project/module/member/member.component';
import { ReportComponent } from './project/module/member/module/report/report.component';
import { ApartmentComponent } from './project/module/member/module/apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LastUpdateComponent,
    SuggestedComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    MemberComponent,
    ReportComponent,
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
