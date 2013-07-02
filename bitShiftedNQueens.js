NQ = function(n){
  var solutions = 0;
  var rowSpace = function(r, backward, column, forward){
    for (var c = 1; c < 1 << n; c*=2){
      if (!((column | backward | forward) & c)) {
        if (r+1 < n) rowSpace(r+1, (backward + c) >> 1, column + c, (forward + c) << 1);
        else solutions++
      }
    }
  };
  rowSpace(0, 0, 0, 0);
}
for (var i = 0; i < 18; i++){
  var before = new Date();
  NQ(i);
  var after = new Date();
  console.log(i,": ",after-before,"ms");
}