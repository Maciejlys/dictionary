import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThemeSwitchComponent } from './components/atoms/theme-switch/theme-switch.component';
import { HeaderComponent } from './components/atoms/organisms/header/header.component';
import { InputComponent } from './components/atoms/input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { TermWithPhoneticComponent } from './components/molecules/term-with-phonetic/term-with-phonetic.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HeaderComponent,
    InputComponent,
    HttpClientModule,
    TermWithPhoneticComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
