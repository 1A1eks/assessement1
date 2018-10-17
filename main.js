

function determineLang () {
    let temporary = 0;
    let lang = document.getElementById('Language').value;
    switch (lang){
        case "English":
        temporary = 0;
        break;
        case "French":
        temporary = 1;
        break;
        case "Dutch":
        temporary = 2;
        break;
        case "Chinese":
        temporary = 3;
        break;        
    }
    return temporary;
}

function getNumber () {
    let temporary =  document.getElementById('numbXX').value;
    let numbArray = ["0","0","0"]
    if(temporary.length < 3) {
        for (let i = 0; i < temporary.length; i++) {
            
            // control if the input is numbers
            if ("0".charCodeAt(0) -1 < temporary.charCodeAt(i) && temporary.charCodeAt(i) < "9".charCodeAt(0) +1){
                console.log("0".charCodeAt(0) + " + " + temporary.charCodeAt(i) + " + " + "9".charCodeAt(0));

                numbArray[2-i] = temporary.charAt(temporary.length -1 - i);
            } else {
                return "not a number";
            }        
        }
        return numbArray;  
    }
    for (let i = 0; i < temporary.length; i++) {
        if(i>2) {
            return "too long";
        }
        // control if the input is numbers
        if ("0".charCodeAt(0) -1 < temporary.charCodeAt(i) && temporary.charCodeAt(i) < "9".charCodeAt(0) +1){
            console.log("0".charCodeAt(0) + " + " + temporary.charCodeAt(i) + " + " + "9".charCodeAt(0));
            numbArray[i] = temporary.charAt(i);
        } else {
            return "not a number";
        }        
    }


    return numbArray;
}

function toInt (numbArray) {
    let intArray = [0,0,0]
    for (let i = 0; i < numbArray.length; i++) {
        switch (numbArray[i].charCodeAt(0)) {
        case "0".charCodeAt(0):
        intArray[i] = 0;
        break;
        case "1".charCodeAt(0):
        intArray[i] = 1;
        break;
        case "2".charCodeAt(0):
        intArray[i] = 2;
        break;
        case "3".charCodeAt(0):
        intArray[i] = 3;
        break;
        case "4".charCodeAt(0):
        intArray[i] = 4;
        break;
        case "5".charCodeAt(0):
        intArray[i] = 5;
        break;
        case "6".charCodeAt(0):
        intArray[i] = 6;
        break;
        case "7".charCodeAt(0):
        intArray[i] = 7;
        break;
        case "8".charCodeAt(0):
        intArray[i] = 8;
        break;
        case "9".charCodeAt(0):
        intArray[i] = 9;
        break;
        }        
    }
    return intArray;
}

function frenchTens (intArray) {
    let result = "";
    switch (intArray[2]) {
        case 0:
        result+= "dix";
        return result;
        case 1:
        result+= "onze";
        return result;
        case 2:
        result+= "douze";
        return result;
        case 3:
        result+= "treize";
        return result;
        case 4:
        result+= "quatorze";
        return result;
        case 5:
        result+= "quinze";
        return result;
        case 6:
        result+= "seize";
        return result;
        case 7:
        result+= "dix-sept";
        return result;
        case 8:
        result+= "dix-huit";
        return result;
        case 9:
        result+= "dix-neuf";
        return result;
        }
        console.log('this should never happen???');
}

function spokenNumbers (lang, intArray) {
    let result = "";
    if(lang === 0) {
        for (let i = 0; i < intArray.length; i++) {
            console.log(intArray[i] + "   i=???    " + result);
            switch (intArray[i]) {
                case 0:
                ;
                break;
                case 1:
                if (i === 0 || i === 2) {
                    result += "one"
                } else if (i === 1) {
                    switch (intArray[2]) {
                        case 0:
                        result+= "ten";
                        return result;
                        case 1:
                        result+= "eleven";
                        return result;
                        case 2:
                        result+= "twelve";
                        return result;
                        case 3:
                        result+= "thirteen";
                        return result;
                        case 4:
                        result+= "fourteen";
                        return result;
                        case 5:
                        result+= "fifteen";
                        return result;
                        case 6:
                        result+= "sixteen";
                        return result;
                        case 7:
                        result+= "seventeen";
                        return result;
                        case 8:
                        result+= "eighteen";
                        return result;
                        case 9:
                        result+= "nineteen";
                        return result;
                        }
                }
                
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 2:
                if (i === 0 || i === 2) {
                    result += "two";
                } else if (i === 1) {
                    result += "twenty";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                
                break;
                case 3: 
                if (i === 0 || i === 2) {
                    result += "three";
                } else if (i === 1) {
                    result += "thirty";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 4:
                if (i === 0 || i === 2) {
                    result += "four";
                } else if (i === 1) {
                    result += "fourty";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 5:
                if (i === 0 || i === 2) {
                    result += "five";
                } else if (i === 1) {
                    result += "fifty";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 6:
                if (i === 0 || i === 2) {
                    result += "six";
                } else if (i === 1) {
                    result += "sixty";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 7:
                if (i === 0 || i === 2) {
                    result += "seven";
                } else if (i === 1) {
                    result += "seventy";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 8:
                if (i === 0 || i === 2) {
                    result += "eight";
                } else if (i === 1) {
                    result += "eighty";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                case 9:
                if (i === 0 || i === 2) {
                    result += "nine";
                } else if (i === 1) {
                    result += "ninety";
                }
                if (i === 0) {
                    result+="-hundred";
                }
                break;
                }
                //still in for-loop
                // so time to add the " - "

                if (i !== 2) {
                    if (intArray[i] !== 0 && intArray[i+1] !== 0)
                    result += "-";

                }

                if (i === 0 && intArray[1]=== 0 && intArray[2] !== 0){
                    result +="-and-";
                }
        }
        //end for

        return result;
        //end if so return before this
    } else if (lang === 1) {
        
        for (let i = 0; i < intArray.length; i++) {
            switch (intArray[i]) {
                case 0:
                result+= "";
                break;
                case 1:
                if (i === 2) {
                    result += "un";
                } else if (i === 1) {
                    result += frenchTens(intArray);
                    return result;
                } else if (i === 0) {
                    result += "cent";
                }
                break;
                case 2:
                if (i === 0 || i === 2) {
                    result += "deux";
                } else if (i === 1) {
                    result += "vignt";
                } 
                break;
                case 3: 
                if (i === 0 || i === 2) {
                    result += "trois";
                } else if (i === 1) {
                    result += "treize";
                }
                break;
                case 4:
                if (i === 0 || i === 2) {
                    result += "quatre";
                } else if (i === 1) {
                    result += "quarante";
                }
                break;
                case 5:
                if (i === 0 || i === 2) {
                    result += "cinq";
                } else if (i === 1) {
                    result += "cinquante";
                }
                break;
                case 6:
                if (i === 0 || i === 2) {
                    result += "six";
                } else if (i === 1) {
                    result += "soixante";
                }
                break;
                case 7:
                if (i === 0 || i === 2) {
                    result += "sept";
                } else if (i === 1) {
                    result += "soixante-";
                    result += frenchTens(intArray);
                    return result;
                }
                break;
                case 8:
                if (i === 0 || i === 2) {
                    result += "huit";
                } else if (i === 1) {
                    result += "quatre-vingt";
                }
                break;
                case 9:
                if (i === 0 || i === 2) {
                    result += "neuf";
                } else if (i === 1) {
                    console.log(result + " + i " + i);
                    result += "quatre-vingt-";
                    result += frenchTens(intArray);
                    console.log(result + " + i " + i);
                    return result;
                }
                break;
                }

                if (i === 0 && intArray[i] !== 0 && intArray[i] !== 1) {
                    result += "-cent";
                }
                if (i !== 2) {
                    if (intArray[i] !== 0 && intArray[i+1] !== 0)
                    result += "-";

                }

                if (i === 0 && intArray[1]=== 0 && intArray[2] !== 0 && intArray[0] !== 0){
                    result +="-et-";
                }
                console.log(result + " + end for with i = " + i);
        }
        //end for

        return result;
        //end if so return before this
    } else if (lang === 2) {

        for (let i = 0; i < intArray.length; i++) {
            switch (intArray[i]) {
                case 0:
                intArray[i] = 0;
                break;
                case 1:
                intArray[i] = 1;
                break;
                case 2:
                if (i === 0 || i === 2) {

                } else if (i === 1) {
                    result += "";
                }
                break;
                case 3: 
                if (i === 0 || i === 2) {

                } else if (i === 1) {
                    result += "";
                }
                break;
                case 4:
                if (i === 0 || i === 2) {
                    
                } else if (i === 1) {
                    result += "";
                }
                break;
                case 5:
                if (i === 0 || i === 2) {
                    
                } else if (i === 1) {
                    result += "";
                }
                break;
                case 6:
                if (i === 0 || i === 2) {
                    
                } else if (i === 1) {
                    result += "";
                }
                break;
                case 7:
                if (i === 0 || i === 2) {
                    
                } else if (i === 1) {
                    result += "";
                }
                break;
                case 8:
                if (i === 0 || i === 2) {
                    
                } else if (i === 1) {
                    result += "";
                }
                break;
                case 9:
                if (i === 0 || i === 2) {
                    
                } else if (i === 1) {
                    result += "";
                }
                break;
                }
        }
        //end for


        return result;
        //end if so return before this

    } else if (lang === 3) {


        //end for


        //end if so return before this

        return "Sadly, we don't have that feature yet. \nStay tuned!";
    }


}

function calculate () {
    let lang = determineLang();
    console.log(lang);
    let numbA = getNumber();
    console.log(numbA);
    let numbB = toInt(numbA);
    console.log(numbB);
    let answer = spokenNumbers(lang, numbB);
    console.log(answer);

    document.getElementById('answer').innerHTML = answer;    
}