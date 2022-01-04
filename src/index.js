module.exports = function toReadable (number) {
 const str = String(number)
 if(str.length == 1) {
     return Units(number)
 } else if(str.length == 2) {
     if (number > 10 && number < 20) {
         return Numbers(number)
     }
     const dosens = Dosens(str[0])
     const units = str[1]== 0 ? '' : ' ' + Units(str[1])
     return (dosens + units)
 } else if (str.length == 3) {
     const hundreds = Units(str[0])
     const dosens = str[1] == 0 ? '' : ' ' + Dosens(str[1])
     const units = str[2] == 0 ? '' : ' ' +  Units(str[2])
     if ( str[1] == 0 && str[2] == 0) {
         return (hundreds + ' ' + 'hundred')
     } else if( str[1] ==  1 && str[2] != 0) {
         const num = Numbers(str[1] + str[2])
         return(hundreds + ' ' + 'hundred' + ' ' + num)
     } 
       return(hundreds + ' ' + 'hundred' +  dosens + units )
 }
}

function Units(number) {
    if(number == 1) {
        return('one')
    } else if(number == 2) {
        return("two")
    } else if(number == 3) {
        return("three")
    } else if(number == 4) {
        return("four")
    } else if(number == 5) {
        return("five")
    } else if(number == 6) {
        return("six")
    } 
    else if(number == 7) {
        return("seven")
    }else if(number == 8) {
        return("eight")
    }  
    else if(number == 9){
        return("nine")
    } else if(number == 0){
        return('zero')
    }
}

function Dosens(number){
    if (number == 1) {
        return('ten')
    } else if (number == 2){
        return('twenty')
    } else if (number == 3){
        return('thirty')
    } else if (number == 4) {
        return('forty')
    } else if (number == 5){
        return('fifty')
    } else if (number == 6){
        return('sixty')
    } else if (number == 7){
        return('seventy')
    } else if(number == 8) {
        return('eighty')
    } else if(number == 9) {
        return('ninety')
    }
}

function Numbers(num) {
    if(num == 11) {
        return('eleven')
    } else if (num == 12) {
        return('twelve')
    } else if (num == 13) {
        return ('thirteen')
    } else if (num == 14) {
        return ('fourteen')
    } else if (num == 15) {
        return('fifteen')
    } else if (num == 16){
        return('sixteen')
    } else if (num == 17) {
        return('seventeen')
    } else if (num == 18) {
        return('eighteen')
    } else if (num == 19) {
        return('nineteen')
    }
}
