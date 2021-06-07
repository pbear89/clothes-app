import React from "react";

export default function CheckoutSteps(props) {
  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? "active" : ""}>Iniciar Sesión</div>
      <div className={props.step2 ? "active" : ""}>Envio</div>
      <div className={props.step3 ? "active" : ""}>Método de Pago</div>
      <div className={props.step4 ? "active" : ""}>Resumen del Pedido</div>
    </div>
  );
}
