interface Prototype {
    clone(): Prototype;
}

class Rectangle implements Prototype {
    a: number
    b: number

    public clone() {
        return Object.create(this);
    }
}

const rect1 = new Rectangle()
rect1.a = 4;
rect1.b = 5;

const rect2 = rect1.clone()

if (rect1 === rect2) {
    console.log('objects are the same')
} else {
    console.log('objects are different')
}