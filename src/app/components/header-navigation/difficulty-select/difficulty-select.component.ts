import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'difficulty-select',
  templateUrl: '/difficulty-select.component.html'
})

export class DifficultySelectComponent {
    public selectedOption: string;
    public isOptionsVisible: boolean = false;

    @Input() options: string[] = [];

    @Output() changeOption = new EventEmitter();

    public onChangeOption(option: string) {
        this.changeOption.emit(option);
        this.selectedOption = option;
        this.isOptionsVisible = false;
    }

    public onShowOptions() {
        this.isOptionsVisible = true;
    }

}
