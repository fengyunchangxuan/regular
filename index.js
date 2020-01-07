// 限定符
// 限定符用来指定正则表达式的一个给定组件必须要出现多少次才能满足匹配。有 * 或 + 或 ? 或 {n} 或 {n,} 或 {n,m} 共6种。
// *	匹配前面的子表达式零次、一个或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
// +	匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
// ?	匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。
// {n}	n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。
// {n,}	n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。
// {n,m}	m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。
// 以下正则表达式匹配一个正整数，[1-9]设置第一个数字不是 0，[0-9]* 表示任意多个数字：
let str1 = 'aaadsgasgasdg';

let reg111 = /a*/;
let reg112 = /ga*s/;
let reg121 = /ad/;
let reg122 = /^aa?d/;
let reg131 = /b+/;
let reg132 = /d+/;

//
// console.log(reg111.test(str1));
// console.log(reg112.test(str1));
// console.log(reg121.test(str1));
// console.log(reg122.test(str1));
// console.log(reg131.test(str1));
// console.log(reg132.test(str1));

let reg141 = /ds{0}g/;
let reg142 = /ds{1}g/;
let reg143 = /ds{2}g/;
// console.log(reg141.test(str1));
// console.log(reg142.test(str1));
// console.log(reg143.test(str1));

let reg151 = /ds{0,}g/;
let reg152 = /ds{1,}g/;
let reg153 = /ds{2,}g/;
// console.log(reg151.test(str1));
// console.log(reg152.test(str1));
// console.log(reg153.test(str1));


//定位符

// $ 匹配输入字符串的结尾位置。如果设置了 RegExp 对象的 Multiline 属性，则 $ 也匹配 '\n' 或 '\r'。要匹配 $ 字符本身，请使用 \$。
// ^ 匹配输入字符串的开始位置，除非在方括号表达式中使用，此时它表示不接受该字符集合。要匹配 ^ 字符本身，请使用 \^。
// \b 匹配一个单词边界，即字与空格间的位置。
// \B 非单词边界匹配。
let str2 = 'asdgasghfkfhkg asdgasg assasdas';
let reg211 = /a$/;
let reg212 = /g$/;
let reg221 = /^a/;
let reg222 = /^s/;

// console.log(reg211.test(str2));
// console.log(reg212.test(str2));
// console.log(reg221.test(str2));
// console.log(reg222.test(str2));

let reg231 = /kg\b/;
let reg232 = /fh\b/;
let reg241 = /kg\B/;
let keg242 = /fh\B/;
// console.log(reg231.test(str2));
// console.log(reg232.test(str2));
// console.log(reg241.test(str2));
// console.log(keg242.test(str2));

// . 匹配除换行符（\n、\r）之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像"(.|\n)"的模式。
let str3 = 'sadgasg\ng\rg';
let reg311 = /.*/;
let reg312 = /g.g/;
let reg313 = /g(.|\n)g/;
// console.log(reg311.test(str3));
// console.log(reg312.test(str3));
// console.log(reg313.test(str3));
// console.log(reg222.test(str3));


// | 是一个条件选择符，相当于选择前面或者后面的来匹配,eg:x|y	匹配 x 或 y。例如，'z|food' 能匹配 "z" 或 "food"。'(z|f)ood' 则匹配 "zood" 或 "food"。

let str4 = 'asdgas';
let reg411 = /a|sg/;
let reg412 = /b|sdg/;
let reg413 = /dgs|das/

// console.log(reg411.test(str4));
// console.log(reg412.test(str4));
// console.log(reg413.test(str4));


// \d 匹配一个数字字符。等价于 [0-9]。
// \D 匹配一个非数字字符。等价于 [^0-9]。
let str5 = 's1235';
let reg511 = /^\d/;
let reg512 = /\d/;
let reg521 = /\D/;
let reg522 = /\D$/;

// console.log(reg511.test(str5));
// console.log(reg512.test(str5));
// console.log(reg521.test(str5));
// console.log(reg522.test(str5));

// \w 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。
// \W 匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。


// \f 匹配一个换页符。等价于 \x0c 和 \cL。
// \n 匹配一个换行符。等价于 \x0a 和 \cJ。
// \r 匹配一个回车符。等价于 \x0d 和 \cM。
// \s 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。
// \S 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。
// 
// \xn 匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'\x41' 匹配 "A"。'\x041' 则等价于 '\x04' & "1"。正则表达式中可以使用 ASCII 编码。
// \num 匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。
// \n 标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，
// 如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。
// 
// \nm 标识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。
// 如果 \nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。
// 如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm 将匹配八进制转义值 nm。

// \nml	如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。
// \un 匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。