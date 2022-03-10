var sampleText = "Javascript is a must-know programming language for a modern developer";

function modifyText(text) {
    var newText = [];

    for (var item of text) {
        newText.unshift(item);
    }    
    
    return {
        result1: text.split(" ").reverse().join(" "),
        result2: newText.join("")
    }
    
}

console.log(modifyText(sampleText));