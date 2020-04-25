var Clock = /** @class */ (function () {
    function Clock(hour, minute) {
        this.currentTime = new Date();
    }
    return Clock;
}());
var Dog = /** @class */ (function () {
    function Dog() {
        this.bark = function (volume) {
            console.log("Bhow bhow in volume: " + volume);
        };
    }
    return Dog;
}());
var tommy = new Dog();
tommy.bark(14);
