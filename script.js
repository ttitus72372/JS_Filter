function myFunc(){
  var rockets = [
    { name:'Sally', age:32 },
    { name:'Bob', age:23 },
    { name:'Jim', age:16 },
    { name:'Scott Rhine', age:7 },
    { name:'Angie Davison', age:4 },
    { name:'James Munger', age:3 }
  ];

  var theAdults = rockets.filter(adults => adults.age >= 18);
  
  for(i=0;i<rockets.length;i++){
    document.getElementById('array').innerHTML += rockets[i].name+" who is age "+rockets[i].age+"<br>"
  }

  for(x=0;x<theAdults.length;x++){
    document.getElementById("adult").innerHTML += theAdults[x].name+" who is age "+theAdults[x].age+"<br>"
  }
  

}