// Simular un objeto character
let character = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
};

// Convertir objeto a JSON
let jsonText = JSON.stringify(character);
console.log(jsonText);  // {"name":"John Doe","age":30,"occupation":"Software Engineer"}

// Convertir JSON a objeto
let obj = JSON.parse(jsonText);
console.log(obj);  // John Doe