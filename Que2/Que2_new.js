'use strict';

const fs = require('fs');

let student ;
let fileName = 'student.json';
let nodeValue = 'Ali Akbar';
let newJsonFileName = 'modifiedStudent.json';

exports.modifyXMLData = function(callback) {
    fs.readFile(fileName, (err, data) => {  
        if (err) throw err;
        student = JSON.parse(data);
        student.name = nodeValue ;
        console.log('reading file '+fileName);  
        let data1 = JSON.stringify(student, null, 2);  
        fs.writeFile(newJsonFileName, data1, (err) => {  
            if (err) throw err;
            console.log('Data written to file');
            console.log('This is after the write call');  
            callback('true');
        });
    });
}

exports.modifyXMLData(function (result) {
    console.log(result);
});