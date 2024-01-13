async function asyncFunction1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("This is the result from async function 1");
        }, 3000);
    });
}

async function asyncFunction2(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`This is result from async function 2 with input: ${result}`);
        }, 5000);
    });
}

async function asyncFunction3(result) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`This is result from async function 3 with input: ${result}`);
        }, 8000);
    });
}

asyncFunction1()
    .then((result1) => {
        console.log(result1);
        return asyncFunction2(result1);
    })
    .then((result2) => {
        console.log(result2);
        return asyncFunction3(result2);
    })
    .then((result3) => {
        console.log(result3);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });


function syncFunction() {
    return "Result from syncFunction";
}

async function asyncFunction() {
    const result = await syncFunction();
    return result;
}

asyncFunction()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });
