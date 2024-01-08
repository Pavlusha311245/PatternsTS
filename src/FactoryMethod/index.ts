interface Transport {
    delivery();
}

class Car implements Transport {
    delivery() {
        return 'Delivery by car';
    }
}

class Airplane implements Transport {
    delivery() {
        return 'Delivery by airplane';
    }
}

abstract class TransportFactory {
    public abstract createTransport(): Transport;
}

class CarTransportFactory implements TransportFactory {
    createTransport(): Transport {
        return new Car();
    }
}

class AirplaneTransportFactory implements TransportFactory {
    createTransport(): Transport {
        return new Airplane();
    }
}

const carTransportFactory = new CarTransportFactory();
const car = carTransportFactory.createTransport()
const airplaneTransportFactory = new AirplaneTransportFactory()
const airplane = airplaneTransportFactory.createTransport();

if (car instanceof Car) {
    console.log(car.delivery());
}
if (airplane instanceof Airplane) {
    console.log(airplane.delivery());
}

