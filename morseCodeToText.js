var textareaMorseCodeToText = document.getElementById("inputMorseCodeToText");
var outputText = document.getElementById("outputText");

function returnCharacterFromMorseCode(morseCode){
	var character = "";
	for(var i in codes){
		if(morseCode==codes[i].code){
			character=i;
		}
	}
	return character;
}

function translateFromMorseCodeToText(morseCode){
	var output = "";
	var morseCodeContainer = "";
	for (var i = 0; i < morseCode.length; i++) {
		if((morseCode.charAt(i)==".") || (morseCode.charAt(i)=="-")){
			morseCodeContainer+=morseCode.charAt(i);
		}
		else{
			output+=returnCharacterFromMorseCode(morseCodeContainer);
			morseCodeContainer="";
			if(morseCode.charAt(i+1)==" "){
				output+=" ";
			}
		}

		if(i==(morseCode.length-1)){
			output+=returnCharacterFromMorseCode(morseCodeContainer);
		}
	}
	return output;
}

function fromMorseCodeToText(){
	var morseCodeFromTextarea = textareaMorseCodeToText.value;
	var morseCodeWithDashes = morseCodeFromTextarea.replace(/_/g, "-");
	var translated = translateFromMorseCodeToText(textareaMorseCodeToText.value);
	outputText.value = translated;
}