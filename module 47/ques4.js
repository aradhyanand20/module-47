// Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign  them values and log their values to the console before and after they are declared to demonstrate variable
// hoisting

{
    console.log(x);
    let x = 10;
    console.log(x);

    console.log(y);
    var y =20
    console.log(y);
    
    console.log(z);
    const z =30
    console.log(z);


}