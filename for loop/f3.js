let sum=0;
let count=0;
let arr=[11,2,3,4,5,6];
for(let i=0;i<arr.length;i++){
  if(arr[i]%2==0){
    sum=sum+arr[i];
    count++;
  }
}
console.log(sum/count);