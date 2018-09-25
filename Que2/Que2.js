'use strict';

const fs = require('fs');

let student ;
fs.readFile('student.json', (err, data) => {  
    if (err) throw err;
    student = JSON.parse(data);
     student.name = "ALI AKBAR";
     console.log('This is after the read call');  
     let data1 = JSON.stringify(student, null, 2);  
     fs.writeFile('student-1.json', data1, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
    console.log('This is after the write call');  

});
    console.log(student);
});


