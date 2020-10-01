var allowedIntoMovie = function(age, isSupervised) {
    if (age>=15 || isSupervised){ //age >= 15 || isSupervised
          return true
      } else {
          return false
      }
  }
  
  
  allowedIntoMovie(14, true) //  => true
  allowedIntoMovie(14, false) // => false
  allowedIntoMovie(16, false) // => true