var Book = /** @class */ (function () {
    function Book(name, author) {
        this.name = name;
        this.author = author;
    }
    Book.prototype.show = function (city) {
        console.log(city);
        console.log("Book name: " + this.name);
        console.log("Author: " + this.author);
        return 10;
    };
    return Book;
}());
var obj = new Book("Kavita", "My Jee Batch");
obj.show("Hyd");
