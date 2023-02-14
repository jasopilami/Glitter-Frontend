function createGlitt(glitt) {
  return `
        <div class="card-text nb-3 glitter-container bg-color shadow-lg">
        <div class="card-body m-2 pt-3">
        <p class="card-text color">${glitt.text}</p>
        <hr />
        <p class="card-text color">${glitt.name || ""}</p>
        <hr />
        <div class="card-footer">
            <button type="button" class="btn btn-icon color"><i class="fa-solid fa-retweet"></i></button>
            <button type="button" class="btn btn-icon color"><i class="fa-solid fa-thumbs-up"></i></button>
       </div>
      </div>
    </div>`;
}

function postGlitt() {
  const text = document.getElementById("glittText") as HTMLTextAreaElement;
  const payload = { text: text.value, user: "Jascha" };
  fetch("http://localhost:3000/glitts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res.json();
    })
    .then((glitt) => {
      document.getElementById("cards-container").innerHTML +=
        createGlitt(glitt);
    });
}

function displayGlitts(glitts) {
  glitts.forEach((element) => {
    document.getElementById("cards-container").innerHTML +=
      createGlitt(element);
  });
}

fetch("http://localhost:3000/glitts")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    displayGlitts(data);
  })
  .catch(function (err) {
    console.log(err);
  });
