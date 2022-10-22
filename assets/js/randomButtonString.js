function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var strings = ["Click Here to Check out the Repo!","Have a look at the project!","See the project here!","Click to see the project!"];

document.getElementById("repobutton").innerHTML = strings[getRandomInt(0,strings.length-1)];