console.log('Metacharacter Symbol in Regualar Expression');
let regex = /asif/
regex = /^as/ //^ means the expression will match if string start with
regex = /if$/ //$ at the end of expession mean "string ends with"
regex = /as.f/ // matches only one character in string   but length should be same of str
regex = /as*f/ // matches 0 or more character in string 
regex = /as?if?s/ //? after character means that character is optional 
regex = /as\*if/ // here * means exact match with *   

let str = "asif is asif";
let result = regex.exec(str);
console.log(result);

if (regex.exec(str)) {
    console.log(`The string ${str} matches the expression ${regex.source}`);

} else {
    console.log(`The string ${str} does not  matches the expression ${regex.source}`);

}