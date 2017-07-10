var textareaMorseCodeToText = document.getElementById("morseCodeToText");
var outputText = document.getElementById("outputText");

function searchCharacterFromMorseCode(morseCode){
	var character = "";
	for(var i in codes){
		if(morseCode==codes[i].code){
			character=codes[i].character;
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
			output+=searchCharacterFromMorseCode(morseCodeContainer);
			morseCodeContainer="";
			if(morseCode.charAt(i+1)==" "){
				output+=" ";
			}
		}
	}
	output+=searchCharacterFromMorseCode(morseCodeContainer);
	return output;
}

function toText(){
	var morseCodeFromTextarea = textareaMorseCodeToText.value;
	var morseCodeWithDashes = morseCodeFromTextarea.replace(/_/g, "-");
	var translated = translateFromMorseCodeToText(textareaMorseCodeToText.value);
	outputText.value = translated;
}