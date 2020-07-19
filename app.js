
const fs = require('fs');
const path = require('path');

filePath = '/Users/sohan/suresh/nodejs/jul2020/moduleone/employee.txt'


console.log(path.extname(filePath));
/*
console.log('****** Before reading the file *******');

//synchronously reading file
var data = fs.readFileSync('./employee.txt');
console.log(data.toString());

//asynchronously reading file
fs.readFile('./employee.txt', function(err, data){
    if(err){
        console.log('*** Error while reading the file ***');
    }
    else {
        console.log(data.toString());
    }
})


fs.writeFileSync('students.txt', "Suresh,26,Male,BTech");

console.log('******* End of Program *****');*/