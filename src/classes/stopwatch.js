export default class StopWatch {
    constructor () {
        this.day     = 0;
        this.hours   = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.timerId = 0;    
    }


    start = () => {
        this.reset();
        this.timerId = setInterval( () => {
            this.update();
        }, 1000)
    }

    finish = () => {
        clearInterval (this.timerId);
    }

    update = () => {
        this.seconds++;
        if ( this.seconds >= 60 ) {
            this.minutes++
            if ( this.minutes >= 60 ) {
                this.hours++;
                if ( this.hours >= 24 ) {
                    this.day++
                    this.hours = 0;
                }
                this.minutes = 0;
            }
            this.seconds = 0;
        }
        this.onUpdate(this.day, this.hours, this.minutes, this.seconds);
    }

    reset = () => {
        this.day     = 0;
        this.hours   = 0;
        this.minutes = 0;
        this.seconds = 0;
    }

    onUpdate = ( day, hours, minutes, seconds ) => {
    }
}
