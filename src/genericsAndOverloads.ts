export function genericsAndOverloads() {
    functionGenerics();
    functionsOverloads();
}

function functionGenerics() {
    class Pizza {
        constructor(private name: string, private price: number) {
        }
    }

    class List<T> {
        private list: T[] = [];

        addItem(item: T): void {
            this.list.push(item);
        };

        getList(): T[] {
            return this.list;
        }
    }

    const list = new List<Pizza>();

    list.addItem(new Pizza('Pepperoni', 15));

    const pizzas: Pizza[] = list.getList();

    class Coupon {
        constructor(private name: string) {
        }
    }
    const anotherList = new List<Coupon>();

    anotherList.addItem(new Coupon('pizza25'));
    const coupons: Coupon[] = anotherList.getList();

}

function functionsOverloads() {
    // virtual implementation
    function reverse(str: string): string;
    function reverse<T>(arr: T[]): T[];

    function reverse<T>(something: string | T[]): string | T[] {
        if(typeof something === 'string') {
            return something
                .split('')
                .reverse()
                .join('');
        }
        return something.slice().reverse();
    }
    reverse('Pepperoni');
    reverse(['bacon', 'pepperoni', 'chilli', 'mushrooms']);
    reverse([1, 2, 3, 4]);
}
