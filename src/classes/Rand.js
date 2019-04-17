export default class Rand {
    enerateFromRange (from, to) {
        return Math.floor( Math.random() * (to - from + 1) ) + from;
    }
}