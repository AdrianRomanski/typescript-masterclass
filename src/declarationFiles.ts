import * as _ from 'lodash';

export function declarationFiles() {
    function foo(name: string) {}

    let chunk = _.chunk([1,2,3,4],  2); // [[1,2],  [3,4]]

    _.mixin({
        log(item: string) {
            console.log(':::', item);
        }
    });

    _.log('Hello');
}

function emittingDeclarationFiles() {

}

export class Foo {
    constructor(public name: string) {}
    bar(age:number){}
}
