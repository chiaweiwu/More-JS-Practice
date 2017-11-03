
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Write this first.
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question("Is el1 > el2?", function(answer){
    if (answer === "true"){
      callback(true);
    } else if (answer === "false"){
      callback(false);
    }
    // reader.close();
  });

}


// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  console.log("4 inner bubble sort");
  if (i == arr.length-1){
    console.log("5 inner bubble sort");

    outerBubbleSortLoop(madeAnySwaps);
  }
  else{
    console.log("6 inner bubble sort");

    askIfGreaterThan(arr[i], arr[i+1], function (isGreaterThan){
      console.log("in swapper function");
      if (isGreaterThan){
        [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
        madeAnySwaps=true;
      }else{
        madeAnySwaps=false;
      }
    });
  }
  console.log("7 inner bubble sort");
  innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    console.log("shouldnt ssee this too much");
    if (madeAnySwaps){

      innerBubbleSortLoop(arr, 0 , madeAnySwaps, outerBubbleSortLoop);
    }
    else{
      sortCompletionCallback(arr);
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }
  let madeAnySwaps=true;
  outerBubbleSortLoop(madeAnySwaps);

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
