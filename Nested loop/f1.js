for(i=1;i<=12;i++){
  if(i==1||i==3||i==5||i==7||i==8)
    for(j=1;j<=31;j++){
      console.log(i+"-"+j);
    }
  else if(i==2){
    for(j=1;j<=28;j++){
      console.log(i+"-"+j);
    }
  }
  else{
    for(j=1;j<31;j++){
      console.log(i+"-"+j);
    }
  }
}