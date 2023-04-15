export function mappedTypes() {
    interface Person {
        name: string;
        age?: number;
    }
    const person: Person = {
        name: 'Todd',
        age: 27
    };
    person.name = 'ABC';

    // read only
    type MyReadonly<T> = {
        readonly [P in keyof T]: T[P];
    }

    function freezePerson<T>(obj: T): Readonly<T> {
        return Object.freeze(obj);
    }

    const newPerson = freezePerson(person);

    // partial
    type MyPartial<T> = {
        [P in keyof  T]+?: T[P];
    }
    function updatePerson(person: Person, prop: Partial<Person>) {
        return {...person, ...prop};
    }
    updatePerson(person, {name: 'ABC'});

    // required
    type MyRequired<T> = {
        [P in keyof  T]-?: T[P];
    }

    const requiredPerson: MyRequired<Person> = {
        name: 'Todd',
        age: 27
    }

    function printAge(person: MyRequired<Person>) {
        return `${person.name} is ${person.age}`;
    }

    const age = printAge(requiredPerson);

    //partial
    type MyPick<T, K extends keyof T> = {
        [P in K]: T[P]
    }

    interface PersonWithAddress {
        name: string;
        age: number;
        address: {};
    }

    const anotherPerson: MyPick<Person, 'name' | 'age'> = {
        name: 'Todd',
        age: 27
    };

    // record mapped type
    let dictionary: { [key: string]: any} = {};

    let record: Record<string, TrackStates>;

    interface TrackStates {
        current: string;
        next: string;
    }

    const item: Record<keyof TrackStates, string> = {
        current: 'h412412',
        next: '82n1241'
    }

    // Numbers are coerced to String
    dictionary[0] = item;
    // console.log(dictionary);
}
