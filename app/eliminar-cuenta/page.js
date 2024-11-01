import './../styles.css';

export default function EliminarCuenta() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Solicitud de Eliminación de Cuenta</h1>
      <h3>Última actualización: 16/09/2024</h3>

      <h2>1. Instrucciones para solicitar la eliminación de la cuenta</h2>
      <p>
        En <strong>Miji Market</strong>, nos tomamos muy en serio tu privacidad y queremos brindarte un control total sobre tus datos personales. Si deseas eliminar tu cuenta y los datos asociados, sigue las instrucciones a continuación.
      </p>
      <ol>
        <li>
          Envía un correo electrónico a <a href='mailto:miji.markets@gmail.com'>miji.markets@gmail.com</a> desde la dirección de correo asociada a tu cuenta.
        </li>
        <li>
          En el asunto del correo, escribe: <strong>"Solicitud de eliminación de cuenta"</strong>.
        </li>
        <li>
          En el cuerpo del mensaje, incluye la siguiente información:
          <ul>
            <li>Nombre completo asociado a la cuenta.</li>
            <li>Dirección de correo electrónico registrada en la cuenta.</li>
            <li>Cualquier comentario adicional que desees agregar.</li>
          </ul>
        </li>
      </ol>

      <h2>2. Datos que serán eliminados</h2>
      <p>
        Cuando solicites la eliminación de tu cuenta, eliminaremos los siguientes datos asociados a tu cuenta:
      </p>
      <ul>
        <li>Información de perfil, como nombre, correo electrónico y número de teléfono.</li>
        <li>Historial de pedidos y detalles de transacciones.</li>
        <li>Direcciones guardadas y métodos de pago.</li>
      </ul>
      <p>
        Ten en cuenta que ciertos datos pueden ser retenidos por motivos legales o regulatorios, según sea necesario.
      </p>

      <h2>3. Período de Retención</h2>
      <p>
        Los datos serán eliminados permanentemente en un plazo de 15 días después de recibir y verificar tu solicitud. Recibirás una confirmación por correo electrónico una vez que se haya completado el proceso.
      </p>

      <h2>4. Contacto para más información</h2>
      <p>
        Si tienes alguna pregunta sobre la eliminación de tu cuenta o sobre cómo manejamos tus datos personales, no dudes en ponerte en contacto con nosotros a través del correo <a href="mailto:miji.markets@gmail.com">miji.markets@gmail.com</a>.
      </p>

      <footer style={{ marginTop: '2rem', textAlign: 'center' }}>
        <p>&copy; 2024 Miji Markets. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
