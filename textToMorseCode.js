var textareaTextToMorseCode = document.getElementById("inputTextToMorseCode");
var textareaOutputMorseCode = document.getElementById("outputMorseCode");

function translateFromTextToMorseCode(text){
	var length = text.length;
	var output = "";
	for (var i = 0; i < length; i++) {
		if(text.charAt(i)==" "){
			output+=" ";
		}
		else{
			if(typeof codes[text.charAt(i)].code!=='undefined'){
				output+=codes[text.charAt(i)].code+" ";
			}
		}
	}
	return output;
}

function fromTextToMorseCode(){
	var translated = translateFromTextToMorseCode(textareaTextToMorseCode.value.toLowerCase());
	textareaOutputMorseCode.value = translated;
}