class Car {
    public wheels: number;
    public color: string;
    public seats: number;
}

interface CarBuilder {
    setWheels(wheelsCount: number): void;

    setColor(color: string): void;

    setSeats(seatsCount: number): void;
}

class CarBuilder implements CarBuilder {
    private car: Car;

    constructor() {
        this.car = new Car()
    }

    setWheels(wheelsCount: number): void {
        this.car.wheels = wheelsCount
    }

    setSeats(seatsCount: number): void {
        this.car.seats = seatsCount
    }

    setColor(color: string): void {
        this.car.color = color
    }

    reset() {
        this.car = new Car()
    }

    get()
    {
        return this.car
    }
}

const carBuilder = new CarBuilder();

carBuilder.setWheels(4)
carBuilder.setSeats(4)
carBuilder.setColor("Black")

const car = carBuilder.get()
console.log(car)