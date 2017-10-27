var runners = ["Mary", "Andrew", "Craig", "Michael", "Kenneth", "Dave"];

// rest extract remaining array elements for arguments 
function getLosers(first, second, third, ...losers) {
  return losers;
}

// spread out all arguments the function could have
getLosers(...runners);
