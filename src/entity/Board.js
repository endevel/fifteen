import BoardCell from "./BoardCell";

const CELL_COUNT = 36;
const DEBUG_MODE = true;

export default class Board {
    finalPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];
    elements = [];
    map = [];

    constructor () {
        this.map = [
            7, 8, 9, 10, 13, 14, 15, 16, 
            19, 20, 21, 22, 25, 26, 27, 28
        ]
        this.createElements();
        this.shuffle();
        console.log(this.finalPosition);
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
        if ( DEBUG_MODE ) {
            this.fakeShuffle();
            return;
        }

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

    fakeShuffle = () => {
        for ( let i = 0; i < this.map.length - 1; i++ ) {
            this.elements[this.map[i]].setValue(i+1);
        }        
        this.elements[this.map[12]].setValue(0);
        this.elements[this.map[13]].setValue(13);        
        this.elements[this.map[14]].setValue(14);
        this.elements[this.map[15]].setValue(15);        
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
    
    isFinalPosition = () => {
        const arr = this.getElementsAsNumbers();
        if ( arr.length !== this.finalPosition.length ) {
            return false;
        }

        for ( let i = 0; i < arr.length; i++ ) {
            if ( arr[i] !== this.finalPosition[i] ) {
                //console.log('not final: ');
                //console.log(arr);
                //console.log(this.finalPosition);
                return false;
            }
        }
        return true;
    }

    getElementsAsNumbers = () => {
        return this.elements.filter( n => !n.isBorder() ).map( n => n.getValue());
    }    

    getPosition = () => {
        return this.getElementsAsNumbers();
    }
}