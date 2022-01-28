import React from 'react';
import '../style/components/Conditions.css';

const Conditions = () => {
  return (
    <section className="section-text">
      <h2 className="section-text__createAccount">Crear cuenta</h2>

      <p className="section-text__Conditions">
        Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
        <a href="https://100ladrillos.zendesk.com/hc/es/articles/360001074632-Aviso-de-Privacidad">
          , Aviso de Privacidad
        </a>
        <a href="https://100ladrillos.zendesk.com/hc/es/articles/360001106571-Derechos-ARCO">
          , Derechos Arco
        </a>
        , y nuestros
        <a href="https://100ladrillos.zendesk.com/hc/es/articles/360001099131-T%C3%A9rminos-y-Condiciones">
          , Terminos y Condiciones
        </a>
        .
      </p>
    </section>
  );
};

export default Conditions;
