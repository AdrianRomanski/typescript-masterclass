export function understandingAndTypingThis(): void {
    thisKeyword();
    callApplyAndBind();
    arrowFunctionsAndLexicalScope();
    thisAndNoImplicitThis();
}

function thisKeyword() {
    // console.log('thisKeyword:::', this);

    const myObj = {
        myMethod() {
            // console.log('Object:::', this);
        }
    };
    myObj.myMethod();

    class MyClass {
        myMethod() {
            // console.log('MyClass:::', this);
        }
    }

    const myInstance = new MyClass();
    myInstance.myMethod();

}

function callApplyAndBind() {

    const myObj = {
        firstObjectMethod() {
            // console.log('Object:::', this);
        }
    };

    const myObj2 = {
        secondObjectMethod() {
            // console.log('Object Second:::', this);
        }
    };

    function myFunction(arg1: string, arg2: string) {
        // console.log('Function:::', this, arg1, arg2);
    }
    const bindFunction = myFunction.bind(myObj);
    const bindFunction2 = myFunction.bind(myObj2);
    bindFunction('ABC', 'DEF');
    bindFunction('123', '456');
    bindFunction2('ABC', 'DEF');
    myFunction.call(myObj, 'ABC', 'DEF');
    myFunction.apply(myObj, ['ABC', 'DEF']);
}

function arrowFunctionsAndLexicalScope() {
    class MyClass {
        myMethod() {
            const foo = 123;
            // console.log('1', this);
            setTimeout( () => {
                // console.log(this);
            }, 0);
        }
    }

    const myInstance = new MyClass();
    myInstance.myMethod();
}

function thisAndNoImplicitThis() {
    const elem = document.querySelector('.click');

    function handleClick(this: HTMLAnchorElement, event: Event) {
        event.preventDefault();
        console.log(this.classList);
    }

    elem.addEventListener('click', handleClick, false);
}
