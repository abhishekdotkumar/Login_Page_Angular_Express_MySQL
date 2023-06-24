import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginService } from './login/login-service/login.service';
import { UserDetailsService } from './user-details/user-details-service/user-details.service';
import { RegisterService } from './register/register-service/register.service';
import { HttpClientModule } from '@angular/common/http';
import { NotificationService } from './shared/notification-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorComponent } from './error/error.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    LoginService,
    UserDetailsService,
    RegisterService,
    NotificationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
