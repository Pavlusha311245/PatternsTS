class Singleton {
    private static instance: Singleton;

    private constructor() {
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }

        return Singleton.instance;
    }
}

const singletonTest1 = Singleton.getInstance();
const singletonTest2 = Singleton.getInstance();

if (singletonTest1 === singletonTest2) {
    console.log('objects are the same')
} else {
    console.log('objects are different')
}