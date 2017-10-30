import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-navigation',
  templateUrl: '/header-navigation.component.html'
})

export class HeaderNavigationComponent {
    @Output() changeDifficultyOption = new EventEmitter();

    public onDifficultyOptionChanged(option: string) {
        this.changeDifficultyOption.emit(option);
    }
}
