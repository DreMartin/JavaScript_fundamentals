let car = {
    make: 'Honda',
    model: 'Civic',
    miles: 30000,

    drive: function(mile) {
        this.miles = mile + this.miles
        return this.miles
    },
    showInfo: function() {
        console.log(car.make, car.model)
    }
}

// car.year = 2000

// console.log(`My car is a ${car.year} ${car.make} ${car.model}, with ${car.miles} miles.`)

console.log(car.drive(5000))

console.log(car.miles)

console.log(`Your car has a total of ${car.miles} miles.`)