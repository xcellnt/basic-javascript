CONVERSION NUMBER AND STRING:
 - parseInt() = string to number (integer)
 - parseFloat() = string to number ( odd number / floating point )
 - number() = string to number (igt and floating point)
 - number.toString() = number to string


NAN:
 - NAN is Not A Number
 - number doesn't telerate data 
  * document.writeln(`<p>${parseInt("salah"})</p>`); // NaN
  * document.writeln(`<p>${parseFloat("1.1salah"})</p>`); // 1.1

  * document.writeln(`<p>${Number("1.1salah"})</p>`); // NaN
  * document.writeln(`<p>${Number("1X"})</p>`); // NaN
  * document.writeln(`<p>${Number("bukan number"})</p>`); // NaN
 - if nan is operated with other data, it will still be nan
 - checking is nan or not = isNaN()
