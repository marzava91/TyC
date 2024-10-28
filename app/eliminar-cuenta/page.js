import React from "react";

export default function EliminarCuenta() {
  return (
    <div className="container mx-auto p-4">
      <header>
        <h1 className="text-3xl font-bold mb-4">Solicitud de Eliminación de Cuenta</h1>
      </header>

      <section>
        <p className="mb-4">
          En <strong>Miji Market</strong>, nos tomamos muy en serio tu privacidad y queremos brindarte un control total sobre tus datos personales. Si deseas eliminar tu cuenta y los datos asociados, sigue las instrucciones a continuación.
        </p>

        <h2 className="text-2xl font-bold mb-2">Pasos para solicitar la eliminación de tu cuenta:</h2>
        <ol className="list-decimal ml-6 mb-4">
          <li className="mb-2">
            Envía un correo electrónico a <a href="mailto:miji.markets@gmail.com" className="text-blue-500 hover:underline">miji.markets@gmail.com</a> desde la dirección de correo asociada a tu cuenta.
          </li>
          <li className="mb-2">
            En el asunto del correo, escribe: <strong>"Solicitud de eliminación de cuenta"</strong>.
          </li>
          <li className="mb-2">
            En el cuerpo del mensaje, incluye la siguiente información:
            <ul className="list-disc ml-6 mt-2">
              <li>Nombre completo asociado a la cuenta.</li>
              <li>Dirección de correo electrónico registrada en la cuenta.</li>
              <li>Cualquier comentario adicional que desees agregar.</li>
            </ul>
          </li>
        </ol>

        <h2 className="text-2xl font-bold mb-2">¿Qué datos se eliminarán?</h2>
        <p className="mb-4">
          Cuando solicites la eliminación de tu cuenta, eliminaremos los siguientes datos asociados a tu cuenta:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>Información de perfil, como nombre, correo electrónico y número de teléfono.</li>
          <li>Historial de pedidos y detalles de transacciones.</li>
          <li>Direcciones guardadas y métodos de pago.</li>
        </ul>
        <p className="mb-4">
          Ten en cuenta que ciertos datos pueden ser retenidos por motivos legales o regulatorios, según sea necesario.
        </p>

        <h2 className="text-2xl font-bold mb-2">Período de Retención</h2>
        <p className="mb-4">
          Los datos serán eliminados permanentemente en un plazo de 15 días después de recibir y verificar tu solicitud. Recibirás una confirmación por correo electrónico una vez que se haya completado el proceso.
        </p>
      </section>

      <footer className="mt-8">
        <p className="text-center">&copy; 2024 Miji Markets. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
