import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './Components/header/header.component';
import {FooterComponent} from './Components/footer/footer.component';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {SideNavComponent} from './Components/side-nav/side-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './Components/home/home.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { TimeComponent } from './Components/sub-component/time/time.component';
import { LeaveComponent } from './Components/sub-component/leave/leave.component';
import { ReportComponent } from './Components/sub-component/report/report.component';
import { ExtrasComponent } from './Components/sub-component/extras/extras.component';
import { InterviewComponent } from './Components/sub-component/interview/interview.component';
import { SupportComponent } from './Components/sub-component/support/support.component';
import { TrainingComponent } from './Components/sub-component/training/training.component';
import { ProjectComponent } from './Components/sub-component/project/project.component';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SideNavComponent,
    HomeComponent,
    TimeComponent,
    LeaveComponent,
    ReportComponent,
    ExtrasComponent,
    InterviewComponent,
    SupportComponent,
    TrainingComponent,
    ProjectComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterOutlet,
    RouterModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
