console.log('Characters classes in regular expression ');
let regex = /\wsi/ //\w mean word character --> _ or alphabet or number 
regex = /\w+a/ //\w+ mean one or more word character  
regex = /\Wa/ //\W  means one  non word character 
regex = /\W+a/ //\W+ means more than one non word character 
regex = /\da/ //digit mean only number   \d means one digit match  
regex = /\d+a/ //\d+ means one than one  digit match 
regex = /\D3/ //\\D means one non digit match  
regex = /\D+3/ //\D means more than one non digit 
regex = /\si/ //\s means  one WHITESPACE 
regex = /\s+i/ //\s+ means more than one WhiteSPACE
regex = /\Si/ //S means  one NON WHITESPACE t 
regex = /\S+i/ //\S+ means more than one NON WhiteSPACE 
regex = /aa\b/ //\b mean word boundary : mean after \b there is new word with space 

// Assertions 
regex = /a(?=a)/
regex = /a(?!a)/


str = "aawsiasi3r5r";
str = "aawsi#asi3r5r";
str = "aawsi###asi3r5r";
str = "aawsi3asi3r5r";
str = "aawsi333asi3r5r";
str = "aawsi333asi3r5r";
str = "aawsi333as i3r5r";
str = "aawsi333as       i3r5r";
str = "aawsi333asi3r5r";
str = "aa wsi333asi3r5r";
str = "aa wsi333asi3r5r";
str = "aq wsi333asi3r5r";
let result = regex.exec(str);
console.log(result);

if (regex.exec(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);

} else {
    console.log(`The string ${str} does not  matches the expression ${regex.source}`);

}