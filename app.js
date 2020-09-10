/*
@param {string} s
@return {boolean}
*/
let longString = "{({})[{(){}}]{[]([])[]}}[()]{}";

console.log(isValid("()[]{}")); // -> true
console.log(isValid("{({})[{(){}}]{[]([])[]}}[()]{}")); // -> true
console.log(isValid("()[]{}{")); // -> false
console.log(isValid("([)]")); // -> false

function isValid(s) {
    //  remove paired 
    let currentString = s;
    let truncString = s + "initial";
    
    while (truncString != currentString) {
        
        // at the first loop set truncated string to initial string
        if (truncString == s + "initial") {
            truncString = currentString;
            // console.log (`set truncString to ${currentString}`);
        };
        // set current to truncated
        currentString = truncString;

        // cut out pairs 
        truncString = truncString.replace(/\{\}/g,"");
        truncString = truncString.replace(/\[\]/g,"");
        truncString = truncString.replace(/\(\)/g,"");
        
        // console.log(`currentString is ${currentString}`);
    };
    
    // console.log(`truncString is ${truncString}`);
    // return currentString;
    if (truncString == "") {
        return true
    } else {
        return false
    }
    
};




