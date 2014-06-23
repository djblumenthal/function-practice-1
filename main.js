// Problem 1
function tripleFive() {
	for (i=0; i<3; i++){
		console.log("Five!");
	}
}

// Problem 2
function lastLetter(userstr) {
	return userstr.charAt(userstr.length-1);
}

// Problem 3
function square(num){
	return num*num;
}

// Problem 4
function negate(num){
	return -num;
}

// Problem 5: 
function toArray(x,y,z){
	return [x,y,z];
}

// Problem 6:
function startsWithA(str){
	return (str[0].toLowerCase()==="a");
}

// Problem 7:
function excite(str){
	return str+"!!!"
}

// Problem 8:
function sun(str){
	return (str.toLowerCase().indexOf("sun")!== -1);
}

// Problem 9:
function tiny(num){
	return (num > 0 && num < 1);
}

// Problem 10
function getSeconds(str) {
	return parseInt(str.substring(0,2))*60 + parseInt(str.substring(3,5));
}