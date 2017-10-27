/**
 * const defines read-only variables
 * const is also block scope
 */
function constFunction() {

  const y = 3;

  // this line is a problem
  //const y = 23;

  if (true) {
    // this is allowed as it is defined inside a new block obtaining new scope
    const y = 8;

    const z = 9;
  }

  // okay since z is outside of the if statement
  const z = 23;


}
