function myFunc(){
  var people = [
    { name:'Sally', age:32 },
    { name:'Bob', age:23 },
    { name:'Jim', age:16 },
    { name:'Scott Rhine', age:7 },
    { name:'Angie Davison', age:4 },
    { name:'James Munger', age:3 }
  ];

  var theAdults = people.filter(adults => adults.age >= 18);
  
  for(i=0;i<people.length;i++){
    document.getElementById('array').innerHTML += people[i].name+" who is age "+people[i].age+"<br>"
  }

  for(x=0;x<theAdults.length;x++){
    document.getElementById("adult").innerHTML += theAdults[x].name+" who is age "+theAdults[x].age+"<br>"
  }
  

}