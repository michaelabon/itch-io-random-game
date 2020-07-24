function getRandomIntFloor(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ready(callbackFunction) {
  if (document.readyState != 'loading') {
    callbackFunction(event)
  } else {
    document.addEventListener("DOMContentLoaded", callbackFunction)
  }
}

ready(event => {
  fetch('https://itch.io/bundle/520/games.json', {credentials: 'same-origin'}).then(response => {
    return response.json().then(data => {
      const index = getRandomIntFloor(data.games.length)
      const title = data.games[index].title
      document.querySelector('.filter_options > form > input[name="search"]').value = title;
      return data;
    }).catch(e => {
      console.error("Error while reading json", e)
      return e;
    });
  }).catch(e => {
    console.error("Error while fetching", e);
    return e;
  });
})
