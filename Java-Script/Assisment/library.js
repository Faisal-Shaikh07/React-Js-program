class Library {
    #Book_price;
    constructor(Book_id, Book_name, Book_cat, Book_students, Book_price) {
        this.Book_id = Book_id;
        this.Book_name = Book_name;
        this.Book_cat = Book_cat;
        this.Book_students = Book_students;
        this.#Book_price = Book_price;
    }
    getbook(){
        return(this.#Book_price);
    }
}

let Book1 = new Library(1, 'The Lord of the rings', 'suspense', 'True', 75);
let Book2 = new Library(2, 'Nineteen Eighty', 'Drama', 'True');
let Book3 = new Library(3, 'Diary of a nobody', 'Novel', 'False');



class Staff extends Library {
    constructor(Staff_id, Staff_name, Designation) {
        this.Staff_id = Staff_id;
        this.Staff_name = Staff_name;
        this.Designation = Designation;
    }
}



class Students extends Library {
    constructor(Student_id, Student_name, Student_class) {
        this.Student_id = Student_id;
        this.Student_name = Student_name;
        this.Student_class = Student_class;
    }
}

console.log(Book1.getbook());