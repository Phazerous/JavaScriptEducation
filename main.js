function getInfo() {
    return ['BMW', 'X3'];
}

let [carName, carSeries] = [...getInfo()];

console.log(carName);
console.log(carSeries);