let number =[1,2,3,4,5,7,6,8,9]//[3,4,2,5,6,1,7,9];
let current = 0;
for (var i=0; i<number.length; i++){
    let current1=number[i];
    if(current>current1){
        current = current1;    
    }
   else if(current<current1){
        current=current1;
    }
}
console.log("the highest number is "+current);