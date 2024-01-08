interface Chair {
    hasLegs(): boolean;
}

interface Sofa {
    hasLegs(): boolean;
}

class MedivalChair implements Chair {
    hasLegs(): boolean {
        return true;
    }
}

class CyberChair implements Chair {
    hasLegs(): boolean {
        return true;
    }
}

class MedivalSofa implements Sofa {
    hasLegs(): boolean {
        return true;
    }
}

class CyberSofa implements Sofa {
    hasLegs(): boolean {
        return true;
    }
}

abstract class FurnitureFactory {
    public abstract createChair(): Chair;

    public abstract createSofa(): Sofa;
}

class MedivalFactory implements FurnitureFactory {
    createChair(): Chair {
        return new MedivalChair();
    }

    createSofa(): Sofa {
        return new MedivalSofa();
    }
}

class CyberFactory implements FurnitureFactory {
    createChair(): Chair {
        return new CyberChair();
    }

    createSofa(): Sofa {
        return new CyberSofa();
    }
}

const medivalFactory = new MedivalFactory()
const cyberFactory = new CyberFactory();

const medivalChair: Chair = medivalFactory.createChair();
const medivalSofa: Sofa = medivalFactory.createSofa();

if (medivalChair instanceof MedivalChair) {
    console.log('Medival chair has legs')
}

if (medivalSofa instanceof MedivalSofa) {
    console.log('Medival sofa has legs')
}

const cyberChair: Chair = cyberFactory.createChair();
const cyberSofa: Sofa = cyberFactory.createSofa()

if (cyberChair instanceof CyberChair) {
    console.log('Cyber chair has legs')
}

if (cyberSofa instanceof CyberSofa) {
    console.log('Cyber sofa has legs')
}