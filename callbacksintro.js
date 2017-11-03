const readline= require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback){



    if (numsLeft>0){
      reader.question("input a number", function(answer){
         sum = sum + parseInt(answer);
         addNumbers(sum, numsLeft-1, completionCallback);
        // console.log (sum);
        // reader.close();
      });


    } else if (numsLeft===0) {
      completionCallback(sum);
      reader.close();
    }
}
addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
