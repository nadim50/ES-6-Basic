


function add(a, b = 0) {
    var c = a + b;
    return c;
}

const cc = add(12);
console.log(cc);

// template string

var abc = ` I
Love 
You 
Santi`

console.log(abc);

const x = 20;
const y = 30;

const sum = `sum of ${x} and ${y} is:${x + y}`;
console.log(sum);


const sum1 = [34, 444, 4440];

const res = `${sum1.length}`;
console.log(res);

/// arrow function

const sub = (n, m) => (n - m);

console.log(sub(5, 2));



/// single line arrow function

const news = a => a * 2;
console.log(news(3));

/// Multi Line arrow function

const totalsum = (l, o, p) => {
    const sum = l + p;
    const dif = sum - o;
    const res = dif * 2;
    return res;
}

console.log(totalsum(2, 3, 2));


/// spreaded operator (... )

const nadim = [23, 21, 25, 78, 28];
const largest = Math.max(...nadim);
console.log(...nadim);
console.log(largest);


const santi = [34, 56, 36];
const adnan = [...santi];
//const adnan = [100, ...santi, 99, 999];
adnan.push(56);

console.log(santi);
console.log(adnan);

///  object distructing

const fish = {
    name: 'ilsa',
    address: 'chadpur',
    color: 'silver',
    price: 34444
};

const name = fish.name;
console.log(name);
const color = fish.color;
console.log(color);

const { address, price } = fish;
console.log(address, price);

/// 1 system
const { age, name1 } = { name1: 'jui', age: 34, address: 'pirojpur' };
console.log(age, name1);

//// Array destrucing

const [A, b] = [3, 44, 21, 56];
console.log(A, b);

const nayoks = ['sami', 'sumon', 'saiful', 'sajol', 'sahommiS'];
const [xx, yy, z, w, p] = nayoks;
console.log(p, w);

function v() {
    return ['dady', 'mummy'];
}

const [abbu, maa] = v();
console.log(maa, abbu);
