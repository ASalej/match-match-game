import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainWrapperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
