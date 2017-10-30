import { Component, ViewChild } from '@angular/core';
import { GameBoardComponent } from './../game-board/game-board.component';

@Component({
  selector: 'main-wrapper',
  templateUrl: '/main-wrapper.component.html'
})

export class MainWrapperComponent {
    @ViewChild(GameBoardComponent) gameBoard: GameBoardComponent;

    public onDifficultyOptionChanged(option: string) {
        this.gameBoard.changeDifficultyOption(option);
    }
}
