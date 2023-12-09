//your JS code here. If required.
function allMethods() {
  //write your code here
	let obj = Math;
      let ans =  Object.getOwnPropertyNames(obj).filter(function(property) {
        return typeof obj[property] === 'function';
      });
      
      return ans.join(", ");
}

alert(allMethods());
