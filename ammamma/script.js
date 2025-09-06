class Book {
    static author="natural star";
    constructor(title, price, cost, author) {
        this.title = title;
        this.price = price;
        this.cost = cost;
    }
    //object // instance methods 
    updateprice(newprice)
    {
        this.price=newprice;
    }
    // static methods 
    static getBookname()
    {
     return Book.author;   
    }
}

let javascript = new Book("JavaScript Latest Edition", 400, 198, "Natural Star ");
let python = new Book("python Latest Edition", 200, 195, "Natural Star ");
let cprogramming =new Book("c programming latest edition",350,128,"natural star ");
let java = new Book(" java latest edition",321,89,"natural star ");
console.log(javascript.title);
console.log(python.cost);
// acessing the static variable withi the class name 
console.log(Book.author);
console.log(java.price);
// updating new price to the exsisting price 
javascript.updateprice(1009);
console.log(javascript.price);
console.log(Book.getBookname());
