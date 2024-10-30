

let notaExam1 = parseFloat(prompt("Introduce la nota del examen 1:"));
let notaExam2 = parseFloat(prompt("Introduce la nota del examen 2:"));
let notaTrab1 = parseFloat(prompt("Introduce la nota del trabajo 1:"));
let notaTrab2 = parseFloat(prompt("Introduce la nota del trabajo 2:"));

if (notaExam1 >= 4.5 && notaExam2 >= 4.5 && notaTrab1 >= 4.5 && notaTrab2 >= 4.5) {
    let mediaExamenes = (notaExam1 + notaExam2) / 2;
    let mediaTrabajos = (notaTrab1 + notaTrab2) / 2;
    let notaFinal = (mediaExamenes * 0.75) + (mediaTrabajos * 0.25);

    if (notaFinal >= 5) {
        document.write("Aprobaste la asignatura con una media de: " + notaFinal);
    } else {
        document.write("No aprobaste la asignatura.<br> Tu nota Final ha sido: " + notaFinal);
    }
} else {
    document.write("No has aprobado la asignatura porque alguna de las notas es inferior a 4.5.");
}