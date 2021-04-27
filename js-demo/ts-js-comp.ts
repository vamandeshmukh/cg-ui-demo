class Book {
   public name: string;
   public author: string;
   public static myBook: string;

    constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
    }

    public show(city: string): number {
        console.log(city);
        console.log(`Book name: ${this.name}`);
        console.log(`Author: ${this.author}`);
        return 10;
    }
}
// Book obj = new Book("Kavita", "My Jee Batch");
let obj = new Book("Kavita", "My Jee Batch");
obj.show("Hyd");
console.log(Book.myBook);
// console.log(obj.myBook);
