export function advanceTypesAndPractices() {
    intersectionTypes();
    interfacesVsTypeAliases();
}

function intersectionTypes() {
    interface Order {
        id: string;
        amount: number;
        currency: string;
    }

    interface Stripe {
        type: 'stripe';
        card: string;
        cvc: string;
    }

    interface PayPal {
        type: 'paypal'
        email: string;
    }

    type CheckoutCard = Order & Stripe;
    type CheckoutPayPal = Order & PayPal;
    type CheckoutName = Order & { name: string };

    const order: Order = {
        id: 'xj28s',
        amount: 100,
        currency: 'USD'
    };

    const orderCard: CheckoutCard = {
        ...order,
        type: 'stripe',
        card: '1000 2000 3000 4000',
        cvc: '180'
    };

    const orderPayPal: CheckoutPayPal = {
        ...order,
        type: 'paypal',
        email: 'abc@def.com'
    };

    type Payload = CheckoutCard | CheckoutPayPal;

    function checkOut(payload: Payload) {
        if(payload.type === 'stripe') {
            console.log(payload.card, payload.cvc);
        }
        if(payload.type === 'paypal') {
            console.log(payload.email);
        }
    }
}

function interfacesVsTypeAliases() {
    interface Item {
        name: string;
    }

    interface Artist extends Item{
        songs: number;
    }

    // we can have 2 interfaces with same name
    interface Artist {
        getSongs(): number;
    }

    // we can't have 2 types with same name
    type Artist2 = { name: string; } & Item;

    const newArtist: Artist = {
        name: 'ABC',
        songs: 5,
        getSongs(): number {
            return this.songs;
        }
    }
}

function interfacesVsClasses() {
    interface Artist {
        name: string;
    }

    class ArtistCreator implements Artist{
        constructor(public name: string) {}
    }

    function artistFactory({name}: Artist) {
        return new ArtistCreator(name);
    }

    const artist = artistFactory({name: 'Todd'});



}

