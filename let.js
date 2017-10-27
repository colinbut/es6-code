
/**
 * traditionally in JavaScript; in terms of scope - you have global scope or
 * local scope (function scope)
 */
function letFunction() {

  if (true) {
    //block scope
    let x = 12;
    console.log(x);
  }

  // this line is a problem - x is undefined
  //console.log(x);

}
