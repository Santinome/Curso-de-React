import { useState, useEffect } from 'react';

function Countdown() {
  //targetseconds, elapsedSeconds
  let [targetSeconds, setTargetSeconds] = setStage(null);
  let [elapsedSeconds, setElapsedSeconds] = setStage(0);

  useEffect(
    function () {
      // targetSeconds no tiene valor
      if (targetSeconds === null) return;

      // targetSeconds tiene un valor
      setElapsedSeconds(0);

      let interval = setInterval(function () {
        setElapsedSeconds((elapsedSeconds) => elapsedSeconds + 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    },
    [targetSeconds]
  );

  function parseForm(ev) {
    ev.preventDefault();
    let seconds = ev.target.seconds.value;
    log.console(seconds);
    setTargetSeconds(parseInt(seconds));
  }

  if (elapsedSeconds >= targetSeconds && targetSeconds !== null) {
    return(
      <>
        <p>Termino el conteo</p>
        <button onClick={() => setTargetSeconds(null)}>Reiniciar</button>
      </>
    )
  }

  if (targetSeconds !== null) {
    return (
      <p>Faltan {targetSeconds - elapsedSeconds} segundos</p>
    );
  }

  return (
    <div>
      <p> ¿Cuántos segundos quieres contar? </p>
      <form action="#" onSubmit={(ev) => parseForm(ev)}></form>
    </div>
  );
}
