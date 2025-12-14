for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz",{i});
    } 
    
    else if (i % 3 === 0) {
        console.log("Fizz",{i});
    } 
    
    else if (i % 5 === 0) {
        console.log("Buzz",{i});
    } 
    
    else {
        if (i % 2 === 0) {
            console.log('Even number:' ,{i});
        } else {
            console.log('Odd number: ',{i});
        }
    }
}