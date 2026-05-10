import queryfyDate from "../utils/queryfyDate.js";


const projectStarted = (cardDetails) => {
    const link = `https://keinoestudio.com/permanent/templates/emails/project-started?name=${cardDetails.name}&deliveryTime=${cardDetails.deliveryTime}&deliveryDate=${queryfyDate(cardDetails.deliveryDate)}`

    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
            <html dir="ltr" lang="en">
              <head>
                <link
                  rel="preload"
                  as="image"
                  href="https://www.keinoestudio.com/assets/next-gen-emails/ng-email-header.png" />
                <link
                  rel="preload"
                  as="image"
                  href="https://www.keinoestudio.com/assets/next-gen-emails/ng-footer-title.png" />
                <link
                  rel="preload"
                  as="image"
                  href="https://www.keinoestudio.com/assets/next-gen-emails/ng-keino-small.png" />
                <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
                <meta name="x-apple-disable-message-reformatting" />
              </head>
              <body style="background-color:#E0DBDB">
                <!--$--><!--html--><!--head--><!--body-->
                <table
                  border="0"
                  width="100%"
                  cellpadding="0"
                  cellspacing="0"
                  role="presentation"
                  align="center">
                  <tbody>
                    <tr>
                      <td
                        style="background-color:#E0DBDB;font-family:Arial, Helvetica, sans-serif">
                        <table
                          align="center"
                          width="100%"
                          border="0"
                          cellpadding="0"
                          cellspacing="0"
                          role="presentation"
                          style="max-width:600px;margin:0 auto;padding:64px 12px 0">
                          <tbody>
                            <tr style="width:100%">
                              <td>
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="padding:12px 24px">
                                  <tbody style="width:100%">
                                    <tr style="width:100%">
                                      <td data-id="__react-email-column">
                                        <p
                                          style="font-size:12px;line-height:16px;margin-top:16px;margin-bottom:16px">
                                          Si no puedes visualizar este email correctamente,
                                          ábrelo en tu navegador a través de
                                          <a
                                            href="${link}"
                                            style="color:#006bff;text-decoration-line:none"
                                            target="_blank"
                                            >este enlace</a
                                          >.
                                        </p>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation">
                                  <tbody style="width:100%">
                                    <tr style="width:100%">
                                      <td data-id="__react-email-column">
                                        <table
                                          align="center"
                                          width="100%"
                                          border="0"
                                          cellpadding="0"
                                          cellspacing="0"
                                          role="presentation">
                                          <tbody style="width:100%">
                                            <tr style="width:100%">
                                              <td
                                                data-id="__react-email-column"
                                                style="padding:24px;background-color:#f0f5ff;border-radius:8px">
                                                <a
                                                  href="https://keinoestudio.com/?from=email-header"
                                                  style="color:#067df7;text-decoration-line:none"
                                                  target="_blank"
                                                  ><img
                                                    src="https://www.keinoestudio.com/assets/next-gen-emails/ng-email-header.png"
                                                    alt="keino estudio"
                                                    style="width:100%"
                                                    width="520"
                                                /></a>
                                                <h1
                                                  style="color:#006bff;font-size:22px;font-weight:normal;padding:12px 0">
                                                  Hemos comenzado las tareas de este
                                                  proyecto.
                                                </h1>
                                                <p
                                                  style="font-size:14px;line-height:20px;margin-top:16px;margin-bottom:16px">
                                                  Este email se envía a modo informativo
                                                  para comunicar que las tareas asociadas al
                                                  proyecto
                                                  <span style="color:#006bff"
                                                    >${cardDetails.name}</span
                                                  >
                                                  han comenzado. A lo largo del proceso de
                                                  desarrollo iremos informando de los
                                                  cambios más relevantes. Del mismo modo,
                                                  comunicaremos el fin de las tareas
                                                  cumpliendo con los plazos establecidos.
                                                </p>
                                                <p
                                                  style="font-size:14px;line-height:20px;margin-top:16px;margin-bottom:16px">
                                                  Por ahora no es necesario ninguna
                                                  intervención por tu parte, aunque es
                                                  posible que a lo largo del proceso se
                                                  solicite información, como accesos,
                                                  direcciones de correo o permisos para
                                                  acceso a servicios por parte de terceros.
                                                  A fin de agilizar los trámites y cumplir
                                                  con los plazos programados, rogamos
                                                  prestar atención a las comunicaciones de
                                                  keino estudio® y responder a la mayor
                                                  brevedad posible.
                                                </p>
                                                <p
                                                  style="font-size:14px;line-height:20px;margin-top:16px;margin-bottom:16px">
                                                  A modo recordatorio, indicamos de nuevo
                                                  que el plazo estimado de desarrollo es
                                                  de <span style="color:#006bff"
                                                    >${cardDetails.deliveryTime == 1 ? cardDetails.deliveryTime + ' día hábil' : cardDetails.deliveryTime + 'días hábiles'}</span
                                                  >, por lo que mantenemos nuestro
                                                  compromiso de entrega en fecha de
                                                  <span style="color:#006bff">${cardDetails.deliveryDate}</span>
                                                  Mientras, nos ponemos a disposición para
                                                  resolver cualquier duda a través de
                                                  nuestros canales de comunicación.
                                                </p>
                                                <p
                                                  style="font-size:18px;line-height:22px;padding-bottom:24px;color:#006bff;margin-top:16px;margin-bottom:16px">
                                                  Gracias por confiar en keino estudio<sup style="font-size:10px"
                                                    >®</sup
                                                  >
                                                </p>
                                                <table
                                                  align="center"
                                                  width="100%"
                                                  border="0"
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  role="presentation">
                                                  <tbody style="width:100%">
                                                    <tr style="width:100%">
                                                      <td
                                                        data-id="__react-email-column"
                                                        style="background-color:#000d21;color:f0f5ff;padding:24px 16px;border-radius:4px">
                                                        <a
                                                          href="https://www.keinoestudio.com/contacto"
                                                          style="color:#067df7;text-decoration-line:none"
                                                          target="_blank"
                                                          ><img
                                                            src="https://www.keinoestudio.com/assets/next-gen-emails/ng-footer-title.png"
                                                            style="display:block;outline:none;border:none;text-decoration:none;width:100%;max-width:314px"
                                                            width="314"
                                                        /></a>
                                                        <p
                                                          style="font-size:14px;line-height:22px;color:#f0f5ff;margin-bottom:2rem;margin-top:16px">
                                                          En keino estudio<sup
                                                            style="font-size:6px"
                                                            >®</sup
                                                          >
                                                          nos gusta estar al lado de
                                                          nuestros clientes y atender
                                                          cualquier duda o petición que
                                                          pueda surgir de cara a este
                                                          proyecto o a cualquier otra
                                                          necesidad en la que podamos
                                                          aportar nuestra experiencia. Como
                                                          siempre, estamos disponibles a
                                                          través de nuestros canales de
                                                          comunicación.
                                                        </p>
                                                        <p
                                                          style="font-size:14px;line-height:24px;margin:0.8rem 0;color:#f0f5ff;margin-top:0.8rem;margin-right:0;margin-bottom:0.8rem;margin-left:0">
                                                          C/ Emilio González López 32, 15011
                                                          A Coruña
                                                        </p>
                                                        <p
                                                          style="font-size:14px;line-height:24px;margin:0.8rem 0;color:#f0f5ff;margin-top:0.8rem;margin-right:0;margin-bottom:0.8rem;margin-left:0">
                                                          <a
                                                            href="tel:+34881170845"
                                                            style="color:#f0f5ff;text-decoration-line:none"
                                                            target="_blank"
                                                            >(+34) 881 17 08 45</a
                                                          >
                                                          ·
                                                          <a
                                                            href="tel:+34643726383"
                                                            style="color:#f0f5ff;text-decoration-line:none"
                                                            target="_blank"
                                                            >(+34) 643 72 63 83</a
                                                          >
                                                        </p>
                                                        <p
                                                          style="font-size:14px;line-height:24px;margin:0.8rem 0;color:#f0f5ff;margin-top:0.8rem;margin-right:0;margin-bottom:0.8rem;margin-left:0">
                                                          <a
                                                            href="mailto:oficina@keinoestudio.com"
                                                            style="color:#f0f5ff;text-decoration-line:none"
                                                            target="_blank"
                                                            >oficina@keinoestudio.com</a
                                                          >
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <p
                                                  style="font-size:14px;line-height:22px;color:#006bff;margin-top:16px;margin-bottom:16px">
                                                  Recordamos que el horario de atención al
                                                  público es de lunes a jueves de 9:00 a
                                                  13:00 y de 15:00 a 18:00 y los viernes de
                                                  9:30 a 13:30. Desde el 1 de junio hasta el
                                                  31 de agosto, de lunes a viernes de 8:30 a
                                                  16:00.
                                                </p>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                                <table
                                  align="center"
                                  width="100%"
                                  border="0"
                                  cellpadding="0"
                                  cellspacing="0"
                                  role="presentation"
                                  style="padding:12px 24px">
                                  <tbody style="width:100%">
                                    <tr style="width:100%">
                                      <td
                                        data-id="__react-email-column"
                                        style="padding:24px 0">
                                        <a
                                          href="https://keinoestudio.com/?from=email-footer"
                                          style="color:#067df7;text-decoration-line:none"
                                          target="_blank"
                                          ><img
                                            src="https://www.keinoestudio.com/assets/next-gen-emails/ng-keino-small.png"
                                            style="display:block;outline:none;border:none;text-decoration:none;width:126px"
                                        /></a>
                                        <p
                                          style="font-size:12px;line-height:16px;margin-top:16px;margin-bottom:16px">
                                          En keino estudio<sup style="font-size:6px"
                                            >®</sup
                                          >
                                          somos respetuosos con la privacidad y los datos de
                                          nuestra comunidad. Para más información, visita
                                          nuestra
                                          <a
                                            href="https://www.keinoestudio.com/politica-privacidad"
                                            style="color:#067df7;text-decoration-line:none"
                                            target="_blank"
                                            >política de privacidad</a
                                          >.
                                        </p>
                                        <ul
                                          style="color:#000d21;font-size:20px;list-style:none;padding:0">
                                          <li
                                            style="display:inline-block;padding-right:24px;color:#000d21;margin:0">
                                            <a
                                              href="https://www.linkedin.com/company/keinoestudio"
                                              style="color:#000d21;text-decoration-line:none"
                                              target="_blank"
                                              >IN</a
                                            >
                                          </li>
                                          <li
                                            style="display:inline-block;padding-right:24px;color:#000d21;margin:0">
                                            <a
                                              href="https://www.instagram.com/keinoestudio/"
                                              style="color:#000d21;text-decoration-line:none"
                                              target="_blank"
                                              >IG</a
                                            >
                                          </li>
                                          <li
                                            style="display:inline-block;padding-right:24px;color:#000d21;margin:0">
                                            <a
                                              href="https://github.com/keinoestudio"
                                              style="color:#000d21;text-decoration-line:none"
                                              target="_blank"
                                              >GH</a
                                            >
                                          </li>
                                          <li
                                            style="display:inline-block;padding-right:24px;color:#000d21;margin:0">
                                            <a
                                              href="https://www.behance.net/keinoestudio"
                                              style="color:#000d21;text-decoration-line:none"
                                              target="_blank"
                                              >BE</a
                                            >
                                          </li>
                                          <li
                                            style="display:inline-block;padding-right:24px;color:#000d21;margin:0">
                                            <a
                                              href="https://www.youtube.com/@keinoestudio"
                                              style="color:#000d21;text-decoration-line:none"
                                              target="_blank"
                                              >YT</a
                                            >
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!--/$-->
              </body>
            </html>
            `
}

export default projectStarted