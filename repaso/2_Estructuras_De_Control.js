// if-else
if (age > 60) {
    console.log("Rick es viejo.");
} else {
    console.log("Rick es joven.");
}

// while
let i = 0;
while (i < episodes.length) {
    console.log(episodes[i]);
    i++;
}

// for
for (let i = 0; i < episodes.length; i++) {
    console.log(episodes[i]);
}

// switch
switch (character.name) {
    case "Rick Sanchez":
        console.log("Es Rick.");
        break;
    case "Morty Smith":
        console.log("Es Morty.");
        break;
    default:
        console.log("Es un personaje desconocido.");
        break;
}
