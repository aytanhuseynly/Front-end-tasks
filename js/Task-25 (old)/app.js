//1.how to capitalize 
var str1 = 'aytan';
var str2 = str1.charAt(0).toUpperCase() + str1.slice(1);
alert(str2);

//2.how to use trim
var text1 = "       Aytan Huseynova        ";
var text2 = text1.trim();
alert(text2)

//3.how do use split for sentence
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split(" ");
alert(str2);

//4.how do use split
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split("a");
alert(str2);

//5.how do use split
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split("a");
alert(str2[1]);

//6.how do use split
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split("a");
alert(str2[0]);

//7.how do use split
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split("a");
alert(str2[2]);

//8.how do use split
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split("s");
alert(str2[2]);

//9.how do use split
var str1 = 'Aytan Huseynova is here';
var str2 = str1.split("h");
alert(str2[3]);

 //10.change first letter
 var str1 = 'Aytan';
var str2 = str1.charAt(0).toLowerCase() + str1.slice(1);
alert(str2);

 //11.change second letter
var str1 = 'AYtan';
var str2 = str1.charAt(0)+str1.charAt(1).toLowerCase() + str1.slice(2);
alert(str2);

//12.abbreviation
var text1 = "United Kingdom";
var text2=text1.replace(/United Kingdom/i, 'UK')
alert(text2);

//13.remove char from string
var text1 = "United Kingdom";
var text2=text1.charAt(0) + text1.slice(2);
alert(text2);

//14.remove char from str
var str = 'Animals';
var char = (prompt("Enter char: "));
var str2 = str.split(char);
alert("Removed version is " + str2); 
    
    
  


