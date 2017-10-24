import { Component } from '@angular/core';

const DEFAULT_SKIRT: number = 0;
const DEFAULT_CARDS_COUNT: number = 16;

@Component({
  selector: 'game-board',
  templateUrl: '/game-board.component.html'
})

export class GameBoard {
    public skirt: number = DEFAULT_SKIRT;
    public cardsCount: number = DEFAULT_CARDS_COUNT;
    
    public changeSkirt(skirt: number): void {
        this.skirt = skirt;
    }
    
    public changeCardsCount(cardsCount: number): void {
        this.cardsCount = cardsCount;
        // start new Game;
    }
}