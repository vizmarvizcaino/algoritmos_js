// como pasar todo el bootcamp para graduarme como desarrollador


let inscripcion = true;
let entrevista = true;
let asistencia = 96;
let desafiosDiarios = 75;
let desafiosFinalesModulos = 100;
let evaluacionModulos = false;


if (inscripcion) {
  console.log("Adelante tu inscripcion fue exitosa, puedes seguir y agendar tu entrevista!!!");
  if (entrevista) {
    console.log("Felicitaciones tu entrevista a sido exitosa, has conseguido el primer paso de tu objetivo y estas adentro del bootcamp");
    if (asistencia >= 95 && asistencia <= 100) {
      console.log("Vas bien, tu asistencia esta sobre el promedio minimo, sigue adelante animos!!!");
      if (desafiosDiarios >= 75 && desafiosDiarios <= 100) {
        console.log("Has cumplido con la meta requerida de enviar los desafios diarios para seguir adelante!!!");
        if (desafiosFinalesModulos === 100) {
          console.log("Has entregado todos tus desafios finales de los modulos y debes esperar evaluacion del tutor");
          if (evaluacionModulos) {
            console.log("Te puedes graduar como desarrollador has superados todas las etapas de los modulos finales");
          } else {
            console.log("No puedes graduarte no superaste la evaluacion final de los modulos");
          }
        } else {
          console.log("No puedes graduarte, no entregaste todos los desafios finales de los modulos");
        }
      } else {
        console.log("lastimosamente no has enviado los desafios diarios minimos requeridos para seguir la cursada!!!");
      }
    } else {
      console.log("lastimosamente has faltado mucho a las clases, vuelve a intentarlo esfuerzate mas y mejora la asistencia!!!");
    }
  } else {
    console.log("Animate vuelve agendar una entrevista y esfuerzate mas!!! ");
  }
} else {
  console.log("Animate vuelve a intentarlo!!!");
}
