
const BORDER_CELL = 100;
const EMPTY_CELL = 0;

export default class BoardCell {
    value = BORDER_CELL;

    setValue = (value) => {
        this.value = value;
    }

    isBorder = () => {
        return this.value === BORDER_CELL;
    }

    isEmpty = () => {
        return this.value === EMPTY_CELL;
    }

    getValue = () => {
        return this.value;
    }
}