import React from 'react';
import BlogUML from './blogp.svg'; 

function UseCaseDiagram() {
  return (
    <article className="slide blog-example">
      <header>
        <h2>Projekta "Blogs" lietošanas gadījumu diagramma</h2>
      </header>
      <section>
        <div className="diagram-container">
          <img 
            src={BlogUML}
            alt="Blogs Use Case Diagram" 
          />
        </div>
        <div className="explanation">
          <h3>Skaidrojums:</h3>
          <ul>
            <li>Diagrammā attēloti galvenie sistēmas "Blogs" lietošanas gadījumi</li>
            <li>Aktieri (actors): <code>Author</code> un <code>Reader</code></li>
            <li>Galvenie lietošanas gadījumi: blogu veidošana, rediģēšana, dzēšana un lasīšana</li>
            <li>Diagramma vizualizē, kā lietotāji mijiedarbojas ar sistēmu</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

export default UseCaseDiagram;