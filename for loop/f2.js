let char="c";
let lower_case=["a","b","c","d","e"];
let upper_case=["A","B","C","D","E"];
for(let i=0;i<lower_case.length;i++){
  if(char==lower_case[i]){
    char=upper_case[i];
  }
}
console.log(char);