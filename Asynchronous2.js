async function waitForMessage () {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Hello, Async/Await!"), 1000)
    })

    let result = await promise;
    console.log(result);
}

waitForMessage();