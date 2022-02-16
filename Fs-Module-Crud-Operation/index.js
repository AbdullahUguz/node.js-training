
const fs = require('fs');


// creating employees.json and adding employee 1
const writeFile = () => {
    return new Promise((resolve,reject) =>{
        fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err) => {
            if (err) {
                console.log(err);
                reject('there is a problem writeFile')
            } else {
                resolve('employees.json added');
            }
        });
    });
}



// reading employees.json
const readFile = () => {
    return new Promise((resolve,reject) =>{
        fs.readFile('employees.json', 'utf8', (err, data) => {
            if (data) {
                console.log(data);
                resolve('employees.json read');
            } else {
                console.log(err);
                reject('there is a problem in readFile')
            }
        });
    });
}



// updating employee 1
const updateFile = () => {
    return new Promise((resolve,reject) =>{
        fs.appendFile('employees.json', '{"name":"employee 2","salary":4000}', (err) => {
            if (err) {
                reject('there is a problem in updateFile');
                console.log(err);
            } else {
                resolve('employees.json updated');
            }
        });
    });
}


// deleting employees.json
const deleteFile = () => {
    return new Promise((resolve,reject) => {
        fs.unlink('employees.json', (err) => {
            if (err) {
                reject('there is a problem in deleteFile');
                console.log(err);
            } else {
                resolve('employees.json deleted');
            }
        });
    });    
}


async function crudOperation(){
    try{
        console.log("write file : ",await writeFile());
        console.log("read file :",await readFile());
        console.log("update file : ",await updateFile());
        console.log("read file : ",await readFile());
        console.log("delete file : ",await deleteFile());

    }catch(error){
        console.log(error);
    }
}
crudOperation();
