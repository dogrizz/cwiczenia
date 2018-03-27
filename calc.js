angular.module('calcApp', [])
    .controller('CalcController', function () {
        let calc = this;
        calc.timeLeft = 1440;
        calc.result = 0;

        calc.calculate = function () {
            const timeForBreaks = calc.timeLeft - (calc.targetAmount - calc.runningAmount);
            const shortAmounts = Math.floor((timeForBreaks - calc.longBreak) / calc.shortBreak);

            calc.result = Math.ceil((calc.targetAmount - calc.runningAmount) / shortAmounts);
        };

    })
    .controller('AccumulatorController', function () {
        let accu = this;
        accu.hours = [];
        accu.result = 0;
        for (let i = 0; i <= 23; i++) {
            accu.hours.push(i);
        }

        accu.minutes = [];
        for (let i = 0; i <= 59; i++) {
            accu.minutes.push(i);
        }

        function getUUID() {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            )
        }

        function getEmptyExercise() {
            return {hours: 0, minutes: 0, uuid: getUUID()};
        }

        accu.exercisesTime = [getEmptyExercise()];

        accu.calculate = function () {
            let sum = 0;
            for (let exercise of accu.exercisesTime) {
                sum += +exercise.hours * 60 + +exercise.minutes;
            }
            accu.result = sum;
        };

        accu.add = function () {
            accu.exercisesTime.push(getEmptyExercise());
        };

        accu.remove = function (exercise) {
            accu.exercisesTime.splice(accu.exercisesTime.indexOf(exercise), 1);
        };
    })
    .controller('ConvertController', function () {
        let conv = this;
        conv.hours = 24;
        conv.minutes = 0;
        conv.result = 1440;

        conv.calculate = function () {
            conv.result = +conv.hours * 60 + +conv.minutes;
        }
    });