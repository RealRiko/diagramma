import React from 'react';

function Task() {
  return (
    <article className="slide">
      <header>
        <h2>Uzdevums kursa biedriem</h2>
      </header>
      <section>
        <div className="task-description">
          <p>Izveidojiet klašu diagrammu vienkāršai e-veikala sistēmai, kurā:</p>
          <ul>
            <li>Ir <code>Customer</code> (Klients) klase ar pamata atribūtiem</li>
            <li>Ir <code>Product</code> (Produkts) klase ar nosaukumu, cenu un aprakstu</li>
            <li>Ir <code>Order</code> (Pasūtījums) klase, kas savieno klientu ar produktiem</li>
            <li>Ir <code>ShoppingCart</code> (Iepirkumu grozs) klase</li>
          </ul>
          
          <h3>Prasības:</h3>
          <ol>
            <li>Attēlojiet visas minētās klases ar atbilstošiem atribūtiem un metodēm</li>
            <li>Izveidojiet korektas attiecības starp klasēm</li>
            <li>Norādiet kardinalitāti katrai attiecībai</li>
            <li>Pievienojiet vismaz vienu mantošanas attiecību</li>
          </ol>
        </div>
      </section>
    </article>
  );
}

export default Task;