import React from 'react';
import UML from './piemers.png';  

function UseCaseDiagram() {
  return (
    <article className="slide blog-example">
      <header>
        <h2>Lietošanas gadījumu diagramma</h2>
      </header>
      <section>
        <div className="diagram-container">
          <img 
            src={UML}
            alt="Online Shopping System Use Case Diagram" 
          />
        </div>
        <div className="explanation">
          <h3>Skaidrojums:</h3>
          <ul>
            <li>Diagrammā attēlota <code>Online Shopping System</code> sistēma</li>
            <li>Aktieri (actors): <code>Customer</code>, <code>Identity Provider</code>, <code>Credit Payment Service</code>, <code>PayPal</code></li>
            <li>Galvenie lietošanas gadījumi: <code>View items</code>, <code>Make purchase</code>, <code>Complete checkout</code>, <code>Log in</code></li>
            <li><code>{'<<include>>'}</code> attiecības starp lietošanas gadījumiem</li>
            <li><code>{'<<service>>'}</code> attiecība autentifikācijai</li>
          </ul>
        </div>
      </section>
    </article>
  );
}

export default UseCaseDiagram;