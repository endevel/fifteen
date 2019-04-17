import BoardCell from "./BoardCell";

const CELL_COUNT = 36;

export default class Board {
    elements = [];
    map = [];

    constructor () {
        this.map = [
            7, 8, 9, 10, 13, 14, 15, 16, 
            19, 20, 21, 22, 25, 26, 27, 28
        ]
        this.createElements();
        this.shuffle();
    }

    createElements = () => {
        this.elements.length = 0;
        for ( let i = 0; i < CELL_COUNT; i++ ) {
            this.elements.push(new BoardCell());
        }
        for ( let i = 0; i < this.map.length; i++ ) {
            this.elements[this.map[i]].setValue(i);
        }
    }

    shuffle = () => {
        const arr = this.getElementsAsNumbers();
        let j, tmp;
        for ( let i = arr.length - 1; i > 0; i-- ) {
            j = Math.floor(Math.random() * (i + 1));
            tmp = arr[j];
            arr[j] = arr[i];
            arr[i] = tmp;
        }
        for ( let i = 0; i < this.map.length; i++ ) {
            this.elements[this.map[i]].setValue(arr[i]);
        }        
    }

    swapCells ( firstNdx, secondNdx ) {
        const firstValue = this.elements[this.map[firstNdx]].getValue();
        const secondValue = this.elements[this.map[secondNdx]].getValue();
        this.elements[this.map[firstNdx]].setValue(secondValue);
        this.elements[this.map[secondNdx]].setValue(firstValue);
    }

    swap = ( index ) => {
        const ndx = this.map[index];

        if (this.elements[ndx].isEmpty()) {
            return;
        }

        let nextNdx = ndx - 1;
        if (this.elements[nextNdx].isEmpty()) {
            this.swapCells(this.map.indexOf(ndx), this.map.indexOf(nextNdx));
            return;
        }
        
        nextNdx = ndx + 1;
        if (this.elements[nextNdx].isEmpty() ) {
            this.swapCells(this.map.indexOf(ndx), this.map.indexOf(nextNdx));
            return;
        }
        nextNdx = ndx - 6;
        if (this.elements[nextNdx].isEmpty() ) {
            this.swapCells(this.map.indexOf(ndx), this.map.indexOf(nextNdx));
            return;
        }

        nextNdx = ndx + 6;
        if (this.elements[nextNdx].isEmpty() ) {
            this.swapCells(this.map.indexOf(ndx), this.map.indexOf(nextNdx));
            return;
        }
    }
    
    getElementsAsNumbers = () => {
        return this.elements.filter( n => !n.isBorder() ).map( n => n.getValue());
    }    

    getPosition = () => {
        return this.getElementsAsNumbers();
    }
}