console.log("hello world!");
"My name is Burutrubu"
console.log(17+52)
let fname="Aileen"
let lname="Akpalu"
console.log(fname+" "+ lname);
/*interpolation*/
console.log(`${fname} is my first name`);
//if else
let pass="foo"
if(pass.length<6){
     "too short" 
    }
    else{
    "too long"
    }

let x = "foo";
 let y = "";
 if (x.length === 0 && y.length === 0) {
"Both strings are empty!";
} 
else {
"At least one of the strings is nonempty.";
}


//cases
let username = fname.toLowerCase();
console.log(`${username}@example.com`);

//strings
let soliloquoy="To be or not to be a question"
console.log(soliloquoy.includes("question"));
console.log(soliloquoy.charAt(4));

//iteration
for(let i=0;i<5;i++){
    console.log(i);
}

//arrays
let a="ant,bat"
console.log(a.split(","));
//undo split using join
console.log(a[0]);
a=[49,8,17,99]
console.log(a.push(6));
console.log(a.slice(1));
console.log(a.pop());


//date
let now= new Date();
now.getFullYear();
now.getDay();


//regex
let zipCode = new RegExp("\\d{5}");
let result = zipCode.exec("Beverly Hills 90210");
result;
