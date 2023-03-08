var number=[2,3,4,5,1];
var num=number[0];
for(i=1;i<=number.length-1;i++){
    if(number[i]<num){

      num = number[i];
    }
}
console.log(' The minimum number is '  + num);