import React from 'react';

function UMLElements() {
  return (
    <article className="slide">
      <header>
        <h2>UML elementi lietošanas gadījumu diagrammā</h2>
      </header>
      <section>
        <p>Lietošanas gadījumu diagrammā tiek izmantoti šādi UML elementi:</p>
        <ul>
          <li><strong>Dalībnieki (Actors)</strong> - ārējie lietotāji, kas mijiedarbojas ar sistēmu.</li>
          <li><strong>Lietošanas gadījumi (Use Cases)</strong> - funkcionalitātes vai darbības, ko sistēma nodrošina dalībniekiem.</li>
          <li><strong>Attiecības (Associations)</strong> - līnijas, kas savieno dalībniekus ar lietošanas gadījumiem.</li>
          <li><strong>Sistēmas robežas (System Boundary)</strong> - rāmis, kas norāda, kas ietilpst sistēmā un kas ir ārpus tās.</li>
          <li><strong>Paplašinājuma attiecības (Extend)</strong> - attiecības, kas apzīmē izvēles papildu funkcionalitāti.</li>
          <li><strong>Iekļaušanas attiecības (Include)</strong> - attiecības, kas norāda uz atkārtoti izmantojamu funkcionalitāti starp lietošanas gadījumiem.</li>
        </ul>
      </section>
    </article>
  );
}

export default UMLElements;
