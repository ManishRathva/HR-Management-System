import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth-components/login/login.component';
import { RegisterComponent } from './auth-components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { ExtrasComponent } from './Components/sub-component/extras/extras.component';
import { InterviewComponent } from './Components/sub-component/interview/interview.component';
import { LeaveComponent } from './Components/sub-component/leave/leave.component';
import { ProjectComponent } from './Components/sub-component/project/project.component';
import { ReportComponent } from './Components/sub-component/report/report.component';
import { SupportComponent } from './Components/sub-component/support/support.component';
import { TimeComponent } from './Components/sub-component/time/time.component';
import { TrainingComponent } from './Components/sub-component/training/training.component';

const routes: Routes = [
  {path:'', redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'time',component:TimeComponent},
  {path:'project',component:ProjectComponent},
  {path:'leave',component:LeaveComponent},
  {path:'report',component:ReportComponent},
  {path:'extras',component:ExtrasComponent},
  {path:'interview',component:InterviewComponent},
  {path:'support',component:SupportComponent},
  {path:'training',component:TrainingComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
