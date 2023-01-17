const cookie = {
    name: 'Chocolate Chip',
    shape: 'round',
    isGlutenFree: false,
    '+Yummy': true,
    eatCookie: function () {
        console.log('I am eating' + this.name);
    }
};
// cookie.name = 'Chocolate Chip';
//console.log(cookie);
//console.log(cookie['+Yummy']);
cookie.eatCookie();

class Cookie {
    constructor(name, isGlutenFree) {
        this.name = name,
        this.isGlutenFree = isGlutenFree;
    }
eatCookie() {
    console.log('I am eating' + this.name);
}
}
const myCookie = new Cookie('Iced Oatmeal', false);
console.log(myCookie);
myCookie.eatCookie();
