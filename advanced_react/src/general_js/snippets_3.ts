interface drink {
    name: string,
    price: number,
    expiry: Date,
    summary(a: string, b: string): string
}

const pepsi: [string, number] = ['cola', 4.50];

const coke: drink = {
    name: 'coke',
    price: 3.50,
    expiry: new Date(),
    summary: (a: string, b: string) => `${a} and ${b}`
}

console.log(coke.summary('water', 'cola'));;

pepsi.push('water'); // Being a 'tuple' shouldn't have allowed pushing more elements

console.log(pepsi);
