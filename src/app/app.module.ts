import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { HeaderNavigationComponent } from './components/header-navigation/header-navigation.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { CardSetComponent } from './components/card-set/card-set.component';
import { CardComponent } from './components/card-set/card/card.component';
import { DifficultySelectComponent } from './components/header-navigation/difficulty-select/difficulty-select.component';

@NgModule({
  declarations: [
      AppComponent,
      MainWrapperComponent,
      HeaderNavigationComponent,
      GameBoardComponent,
      CardSetComponent,
      CardComponent,
      DifficultySelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
