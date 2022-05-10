DATA TYPE NUMBER:
 decimal and integer

 support number notation
 default base 10
 also support binary, hex, octal
 document.writeln(100)
 document.writeln(100.098)
 document.writeln(0b1111101)

DATA TYPE BOOLEAN:
 - true
 - false

DATA TYPE STRING:
 - squence character
 - combine string with +

 document.writeln('sya')
 document.writeln('this is string data type')

 - supporting escape sequence:
 - \n = enter
 - \t = tab
 - \' = '
 - \" = "
 - \\ = \

DATA TYPE ARRAY:
 - is a data set
 - dynamic = increase by it self when we input data into array
 - create array
  * let array = [];
 - every data in array is stored sequentially
 - the first order in array starts from zero
 - the order in array is called index
 - add data
  * const name = [];
    names.push["Eko"];
    names.push["Yabai"];
    names.push["kali"];

    console.table(names);
 - operator array
  * array.push() = add data
  * array.length() = count length array
  * array.[index] = access data using index
  * array.[index] = value | change value on specific index
  * delete.array[index] = delete value on specific index
 - need to remember
  * array is infinity
  * we can push all data type in array
  * JS support multidimensional array

DATA TYPE OBJECT:
 - in other programming language like PHP we can change index in array with another data type
 - this feature called associative array or hash
 - JS is not support associative array
 - if we force to replace index with another data type it will be automatically changed to object data type
 - Object is same with array but can change the index
 - index is for array in object call attribute or properties
 - create object
  * const obj = {};
 - change properties in object
  * same with array
 - create object with properties
  * const obj = {
	name: 'kali',
	alamat: 'indenesia',
	umur: 40
    };'
 - access properties in object
  * ${obj.name} 

