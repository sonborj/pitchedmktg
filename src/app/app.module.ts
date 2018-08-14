import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


//layouting
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatMenuModule, MatTableModule,
  MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatSelectModule, MatInputModule 
} from '@angular/material';


//components
import { EmailtemplatesComponent } from './emailtemplates/emailtemplates.component';
import { EmailschedulesComponent } from './emailschedules/emailschedules.component';
import { CustomersubscriptionComponent } from './customersubscription/customersubscription.component';
import { CustomersubscriptionDetailComponent } from './customersubscription/customersubscription-detail/customersubscription-detail.component';
import { EmailtemplatesDetailComponent } from './emailtemplates/emailtemplates-detail/emailtemplates-detail.component';

//services
import { PitchedService } from './services/pitched.service';
import { CustomersubscriptionsService } from './services/customersubscriptions.service';
import { EmailtemplatesService } from './services/emailtemplates.service';



const routes: Routes = [
  {
    path: '',
    component: EmailtemplatesComponent
  },
  {
    path: 'emailtemplates',
    children: [
      {
        path: '',
        component: EmailtemplatesComponent
      },
      {
        path: ':id',
        component: EmailtemplatesDetailComponent
      }
    ]    
  },
  {
    path: 'emailschedules',
    component: EmailschedulesComponent
  },
  {
    path: 'customersubscription',    
    children: [
      {
        path: '',
        component: CustomersubscriptionComponent
      },
      {
        path: ':id',
        component: CustomersubscriptionDetailComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,    
    EmailtemplatesComponent,
    EmailschedulesComponent,
    CustomersubscriptionComponent,
    CustomersubscriptionDetailComponent,
    EmailtemplatesDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,   
    MatTableModule, MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatSelectModule, MatInputModule ,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [
    PitchedService,
    CustomersubscriptionsService,
    EmailtemplatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
