import { Component } from '@angular/core';

const DEFAULT_SKIRT: number = 0;
const DEFAULT_CARDS_COUNT: number = 10;
const DEFAULT_DIFFICULTY: string = 'Easy';

@Component({
  selector: 'game-board',
  templateUrl: '/game-board.component.html'
})

export class GameBoard {
    public skirt: number = DEFAULT_SKIRT;
    public cardsCount: number = DEFAULT_CARDS_COUNT;
    public difficulty: string = DEFAULT_DIFFICULTY;
    
    public changeSkirt(skirt: number): void {
        this.skirt = skirt;
    }
    
    public changeDifficultyOption(option: string) {
        if (this.difficulty !== option) {
            switch(option) {
                case 'Easy': 
                    this.cardsCount = 10;
                    break;
                case 'Medium': 
                    this.cardsCount = 20;
                    break;
                case 'Hard': 
                    this.cardsCount = 30;
                    break;
            }   
            // start new game
            this.difficulty = option;
            
        }
    }
}