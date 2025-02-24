const myFirstPromise = new Promise((resolve, reject) => {
    const isSuccess = true;

    if(isSuccess){
        resolve("Hello, Promise!");
    }
    else {
        reject("No!")
    }
  });
  

  myFirstPromise.then(message => {
    console.log(message);
  });