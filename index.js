
function receivesAFunction(spy){
  console.log(spy());
}
 
 function returnsANamedFunction(){
 return function grabName(name){
return name !=''
 }

 }

 function returnsAnAnonymousFunction(){
  return function(){}
 }