/*for(i=1 ;i<=5; i++){

    console.log(i)
}
*/

/*output = "" ;

for(i=5 ; i>=1; i--){
    output += i + " ";

}
console.log(output)
*/

/*reverse = "";
str = "Marc";

for (i=str.length-1; i>=0; i--){

    reverse += str[i];
}

console.log(reverse + " ");

*/
/*
output = ""
arr = [1,5,8];

for (i=arr.length-1; i>=0; i--){

   output += arr[i] + " ";
}

console.log(output);*/

arr1 = [1,5,8];
arr2 = [5,7,8,9];


function arrayTraverse(arr){

    output = ""
    
    for (i=0; i=arr.length; i++){
        output += arr[i] + " ";
    }
    console.log(output);

} 
arrayTraverse(arr1);
arrayTraverse(arr2);
