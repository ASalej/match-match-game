import { uniqueId } from 'lodash';

export class Card {
    private readonly id: number = parseInt(uniqueId(), 10);
    private value: number = 0;
    private skirt: number = 0;

    public isValueVisible: boolean = false;
    public isValueGuessed: boolean = false;

    constructor(value: number, skirt: number) {
        this.value = value;
        this.skirt = skirt;
    }

    public showCardValue(): number {
        this.isValueVisible = true;
        return this.value;
    }

    public hideCard(): void {
        this.isValueVisible = false;
    }

    public getId(): number {
        return this.id;
    }

    public getSkirt(): number {
        return this.skirt;
    }

    public getValue(): number {
        return this.value;
    }
}
