
var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log(`length of object ${Object.keys(student).length}`);
console.log(`before deleting`);
console.log(Object.keys(student));
console.log(`After deleting`);
delete student.rollno;
console.log(Object.keys(student));
var library = [ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }];
console.log(`Author\t\t\ttitle\t\t\treadingStatus`);
for(let obj of library)
{
    console.log(`${obj.author}\t\t${obj.title}\t\t${obj.readingStatus}`);
}
var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];

