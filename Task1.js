//Object comparison irrespective of the order.

var obj1 = { name: "Person 1", age: 5};
var obj2 = { age: 5, name: "Person 1"};

function compareObjects(obj1, obj2) {

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if(keys1.length != keys2.length){
        return false;
    }

    for(const key in obj1) {
        
        if(!(obj1[key] === obj2[key])){
            return false;
        } 

    }

    return true;

}


console.log(" Object 1 : ", obj1, " Object 2 : ", obj2);
console.log("Both objects are equal : ", compareObjects(obj1, obj2));
