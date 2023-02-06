for(horizantal=1;horizantal<=10;horizantal++){
  a="";
  for(let verticle=1;verticle<=10;verticle++){
    if (horizantal==1||horizantal==10){
      a=a+"*";
    }
    else if(verticle==1||verticle==10){
      a=a+"*";
    }
    else{
      a=a+" ";
    }
    }
  console.log(a);
}