// Почему результат разный?

// Почему результат второго alert'а такой странный?

alert( 123456789 ^ 0 ); // 123456789
alert( 12345678912345 ^ 0 ); // 1942903641

// Побитовый оператор ^ преобразует его в 32-битное путём отбрасывания десятичной точки и
// «лишних» старших цифр. При этом, так как число большое и старшие биты здесь ненулевые, 
// то, естественно, оно изменится.