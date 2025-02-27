import React from 'react';

function WhatIsIt() {
  return (
    <article className="slide">
      <header>
        <h2>Kas ir lietošanas gadījumu diagramma?</h2>
      </header>
      <section>
        <p> (UML) lietošanas gadījumu diagramma var apkopot informāciju par jūsu sistēmas lietotājiem (sauktiem arī par dalībniekiem) un</p>
          <p>viņu mijiedarbību ar sistēmu.</p>
        <p> Lai to izveidotu, jums būs jāizmanto specializētu simbolu un savienotāju komplekts. Efektīva lietošanas gadījumu diagramma var palīdzēt jūsu komandai apspriest un pārstāvēt:</p>
      
        <ul>
          <li>Scenāriji, kuros jūsu sistēma vai lietojumprogramma mijiedarbojas ar cilvēkiem, organizācijām vai ārējām sistēmām</li>
          <li>Mērķi, ko jūsu sistēma vai lietojumprogramma palīdz šīm entītijām (sauktas par dalībniekiem) sasniegt</li>
          <li>Jūsu sistēmas darbības joma</li>
        </ul>
      </section>
    </article>
  );
}

export default WhatIsIt;