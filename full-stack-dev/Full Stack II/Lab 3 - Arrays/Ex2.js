const emptyArray = function(myArray) {

    while(myArray.length > 0) {
      myArray.pop();
  }
    return myArray;
}

emptyArray([1,2,3])

emptyArray(["egg","bacon","toast","coffee","random","juice"]);