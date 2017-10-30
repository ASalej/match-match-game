import { Component, Output, ViewChild } from '@angular/core';
import { GameBoard } from './../game-board/game-board.component';

@Component({
  selector: 'main-wrapper',
  templateUrl: '/main-wrapper.component.html'
})

export class MainWrapperComponent {
    @ViewChild(GameBoard) gameBoard: GameBoard;
    
    public onDifficultyOptionChanged(option: string) {
        this.gameBoard.changeDifficultyOption(option);
    }
}