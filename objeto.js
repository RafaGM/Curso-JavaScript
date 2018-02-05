/***
Se deben crear los siguientes objetos con sus atributos:

Objeto Alumno:
-Nombre
-Apellidos
-Email
-Edad
-Array de Cursos
-Contraseña
- nombreCompleto --> function


Objeto Profesor:
- Nombre
-Apellidos
-Email
-Array de Cursos
-Especialidad
-Contraseña
- nombreCompleto --> function
*****/

var Alumno = {
	Nombre: "nombre",
	Apellidos: ["Apellido1", "Apellido2"],
	Email: "email@email.com",
	Edad: 22,
	Cursos: ["html", "css", "js"],
	Contraseña: "********",
	nombreCompleto : function() {
		return this.Nombre + " "+ this.Apellidos[0] + " " + this.Apellidos[1];
			}

};

var Profesor = {
	Nombre: "nombre",
	Apellidos: ["Apellido1", "Apellido2"],
	Email: "email@email.com",
	Cursos: ["html", "css", "js"],
	Especialidad: "Suspender",
	Contraseña: "********",
	nombreCompleto : function() {
		return this.Nombre + " "+ this.Apellidos[0] + " " + this.Apellidos[1];
			}

};

console.log(Alumno.Nombre + " " + Alumno.Cursos[1] + " " + Alumno.nombreCompleto);
console.log(Profesor.Cursos[2] + " " + Profesor.nombreCompleto);