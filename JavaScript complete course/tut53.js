console.log('Generators in java Script');

function* numbersGen() {
    let i = 0;
    while (true) {
        // yield i++;
        yield(i++).toString;
    }
    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    // yield 'asif';
    // yield 'kashi';
    // yield 'saqi';
    // yield 'tayyab';
}
let gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);