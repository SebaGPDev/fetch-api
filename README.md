# Proyecto de Repaso de JavaScript

Este proyecto contiene varios archivos que demuestran conceptos clave de JavaScript, su sintaxis, y cómo se pueden utilizar para desarrollar aplicaciones web funcionales y dinámicas.

## Tipos de Datos

### Descripción

JavaScript soporta varios tipos de datos, incluidos primitivos como `String`, `Number`, `Boolean`, `null`, y `undefined`, así como objetos complejos como `Object` y `Array`.

### Dificultad: Básico

### Uso

Utilizados para manipular valores y realizar operaciones lógicas y matemáticas.

### Ejemplo

```javascript
let name = "Rick Sanchez";  // String
let age = 70;               // Number
let isActive = true;        // Boolean
```

## Estructuras de Control

### Descripción

Permiten dirigir el flujo de ejecución del código basándose en condiciones y ciclos.

### Dificultad: Intermedio

### Uso

Controlar el comportamiento del programa dependiendo de diferentes condiciones o repetir un bloque de código.

### Ejemplo

```javascript
if (age > 60) {
    console.log("Senior");
} else {
    console.log("Adult");
}
```

## Funciones

### Descripción
Bloques de código diseñados para realizar una tarea específica, invocados por su nombre.

### Dificultad: Intermedio

### Uso
Reutilizar código, modularizar tareas, y manejar eventos.

### Ejemplo

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Morty"));
```