function sendRequest(filePath) {
  return new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    request.open("GET", filePath);
    request.setRequestHeader("Content-Type", "application/json; charset=utf8");
    request.send();
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(request.response);
      } else if (request.status !== 200) {
        reject(request.status + " " + request.statusText);
      }
    });
  });
}


let firstRequest, secondRequest;


function unique(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}


function bothPromises() {
  if (typeof firstRequest !== "undefined" && typeof secondRequest !== "undefined") {
    Promise.all([firstRequest, secondRequest]).then(values => {
      let arr = [];
      for (let i = 0; i < values.length; i++) {
        if (values[i][0] === "{") // фильтрация ошибок
          arr = arr.concat(JSON.parse(values[i]).hobby.split(","));
      }
      document.getElementById("hobbies").innerHTML = "The list of hobbies: " + unique(arr);
    });
  }
}

document.getElementById("firstButton").addEventListener("click", () => {
  firstRequest = sendRequest("../files/first.json")
    .then(
      result => {
        document.getElementById("firstText").innerHTML = result;
        return result;
      },
      error => {
        document.getElementById("firstText").innerHTML = error;
        return error;
      }
    )
    .then(data => {
      bothPromises();
      return data;
    });
});

document.getElementById("secondButton").addEventListener("click", () => {
  secondRequest = sendRequest("../files/second.json")
    .then(
      result => {
        document.getElementById("secondText").innerHTML = result;
        return result;
      },
      error => {
        document.getElementById("secondText").innerHTML = error;
        return error;
      }
    )
    .then(data => {
      bothPromises();
      return data;
    });
});
