/*var a=[3,1,3];
 for(var i=0; i<a.length-1; i++){
    for (var j=i+1; j<a.length-1; j++){
    if (a[i]==a[a.length-j]){
        console.log('The given input is a palindrome.')
    }
    else{
        console.log('The given input is not a palindrome.')
    }
 }
}*/

var arr=[3,1,3,];
var len=arr.length;
var msg='It is a palindrome';
for(var i=0; i < len/2; i++){
    if(arr[i]!= arr[len-1-i]){
        msg='It is not a palindrome';
    }
}
console.log(`${arr}: ${msg}`);