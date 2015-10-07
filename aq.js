var log = console.log;

var dic = {"狗":"dog", "貓":"cat", "一隻":"a", "追":"chase", "吃":"eat"};

function bu(s) {
  var array = [];
  for (var i=0; i<s.length;) {
    for (var len=4; len>0; len--) {
      var str = s.substr(i, len);
      var toWord = dic[str];
      if (typeof toWord !== "undefined") {
        array.push(toWord);
        break;
      }
    }
    i=i+Math.max(1,len);
  }
  return array;
}

var a = bu(process.argv[2]);
log(a);

var str = a.join([separator = ' ']);
log(str);
