angular.module('calcApp', [])
    .controller('CalcController', function() {
        let calc= this;
        calc.timeLeft = 1440;
        calc.result = 0;

        calc.calculate = function() {
            const timeForBreaks = calc.timeLeft - (calc.targetAmount - calc.runningAmount);
            const shortAmounts = Math.floor((timeForBreaks - calc.longBreak) / calc.shortBreak);

            calc.result = Math.ceil((calc.targetAmount - calc.runningAmount) / shortAmounts);
        };

    })
    .controller('ConvertController', function() {
        let calc = this;
        calc.hours = 24;
        calc.minutes = 1440;

        calc.calculate = function() {
            calc.minutes = calc.hours*60;
        }
    });