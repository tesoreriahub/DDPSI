// Función para manejar el REGEX de los nombres ingresados
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Tópicos diagnosticados
const topics = {
    Autenticación: {
        description: "La mayoría de las violaciones de datos reportadas se deben al uso de contraseñas débiles, predeterminadas o robadas (según informes de Verizon). Utilice contraseñas largas, seguras y únicas, adminístrelas en un administrador de contraseñas seguro, habilite la autenticación de dos factores, esté al tanto de las infracciones y tenga cuidado al iniciar sesión en sus cuentas.",
        questions: [
            {
                text: "¿Utiliza una contraseña segura?",
                explanation: "Si su contraseña es demasiado corta o contiene palabras, lugares o nombres de diccionario, entonces puede ser descifrada fácilmente mediante algoritmos de fuerza bruta o alguien puede adivinarla. La forma más sencilla de crear una contraseña segura es hacerla larga (más de 12 caracteres). Considere la posibilidad de utilizar una frase de contraseña, formada por muchas palabras. Como alternativa, utilice un generador de contraseñas para crear una contraseña aleatoria larga y segura."
            },
            {
                text: "¿Evita reutilizar sus contraseñas?",
                explanation: "Si alguien reutilizara una contraseña y un sitio en el que tenía una cuenta sufriera una filtración, entonces un delincuente podría fácilmente obtener acceso no autorizado a sus otras cuentas. Esto generalmente se hace mediante solicitudes de inicio de sesión automatizadas a gran escala y se denomina Credential Stuffing. Desafortunadamente, esto es muy común, pero es fácil protegerse: use una contraseña diferente para cada una de sus cuentas en línea."
            },
            {
                text: "¿Utiliza un administrador de contraseñas seguro?",
                explanation: "Para la mayoría de las personas será casi imposible recordar cientos de contraseñas seguras y únicas. Un administrador de contraseñas es una aplicación que genera, almacena y completa automáticamente sus credenciales de inicio de sesión. Todas sus contraseñas se cifrarán con 1 contraseña maestra (que debe recordar y debe ser muy segura). La mayoría de los administradores de contraseñas tienen extensiones de navegador y aplicaciones móviles, por lo que sea cual sea el dispositivo en el que se encuentre, sus contraseñas se pueden completar automáticamente."
            },
            {
                text: "¿Evita compartir contraseñas?",
                explanation: "Si bien puede haber ocasiones en las que necesites compartir el acceso a una cuenta con otra persona, generalmente debes evitar hacerlo porque hace que sea más fácil que la cuenta se vea comprometida. Si es absolutamente necesario compartir una contraseña, por ejemplo, cuando trabaja en un equipo con una cuenta compartida, debe hacerlo a través de las funciones integradas en un administrador de contraseñas."
            },
            {
                text: "¿Habilita la autenticación de 2 factores?",
                explanation: "2FA es donde debes proporcionar algo que sabes (una contraseña) y algo que tienes (como un código en tu teléfono) para iniciar sesión. Esto significa que si alguien tiene tu contraseña (por ejemplo, a través de phishing, malware o una violación de datos), no podrán iniciar sesión en su cuenta. Es fácil comenzar: descargue una aplicación de autenticación en su teléfono, luego vaya a la configuración de seguridad de su cuenta y siga los pasos para habilitar 2FA. La próxima vez que inicie sesión en un dispositivo nuevo, se le solicitará el código que aparece en la aplicación de su teléfono (funciona sin Internet y el código generalmente cambia cada 30 segundos)."
            },
            {
                text: "¿Mantiene seguros los códigos de respaldo?",
                explanation: "Cuando habilita la autenticación multifactor, generalmente se le proporcionarán varios códigos que puede usar si su método 2FA se pierde, se rompe o no está disponible. Guarde estos códigos en un lugar seguro para evitar pérdidas o acceso no autorizado. Debe guardarlos en papel o en un lugar seguro en el disco (por ejemplo, en un almacenamiento fuera de línea o en un archivo/unidad cifrados). No los almacene en su Administrador de contraseñas como fuentes y contraseñas 2FA y deben guardarse por separado."
            }
        ]
    },
    Navegación_Web: {
        description: "La mayoría de los sitios web en Internet utilizan algún tipo de seguimiento, a menudo para obtener información sobre el comportamiento y las preferencias de sus usuarios. Estos datos pueden ser increíblemente detallados y, por lo tanto, son extremadamente valiosos para las organizaciones, gobiernos y los ladrones de propiedad intelectual. Las violaciones y filtraciones de datos son comunes, y desanonimizar la actividad web de los usuarios suele ser una tarea trivial.",
        questions: [
            {
                text: "¿Bloquea los anuncios?",
                explanation: "El uso de un bloqueador de anuncios puede ayudar a mejorar su privacidad al bloquear los rastreadores que implementan los anuncios. Cuando se muestran anuncios de terceros en una página web, estos tienen la capacidad de rastrearlo, recopilando información personal sobre usted y sus hábitos, que luego puede venderse o usarse para mostrarle anuncios más específicos, y algunos anuncios son simplemente maliciosos o falso. El bloqueo de anuncios también hace que las páginas se carguen más rápido, utiliza menos datos y proporciona una experiencia menos abarrotada."
            },
            {
                text: "¿Se asegura que el sitio web sea legitimo?",
                explanation: "Puede parecer obvio, pero cuando inicie sesión en cualquier cuenta en línea, verifique que la URL sea correcta. Almacenar los sitios visitados habitualmente en sus favoritos es una buena manera de garantizar que la URL sea fácil de encontrar. Cuando visite sitios web nuevos, busque señales comunes de que podrían no ser seguros: advertencias del navegador, redireccionamientos, spam en el sitio y ventanas emergentes. También puede consultar la legitimidad de un sitio web utilizando herramienta para ello."
            },
            {
                text: "¿Utiliza un navegador que respeta su privacidad?",
                explanation: "Firefox (con algunos ajustes) y Brave son navegadores seguros y respetuosos con la privacidad. Ambos son rápidos, de código abierto, fáciles de usar y están disponibles en los principales sistemas operativos. Su navegador tiene acceso a todo lo que hace en línea, así que, si es posible, evite Google Chrome, Edge y Safari, ya que (sin la configuración correcta) los tres recopilan datos de uso, llaman a casa y permiten un seguimiento invasivo. Firefox requiere algunos cambios para lograr una seguridad óptima."
            },
            {
                text: "¿Utiliza un motor de búsqueda privado?",
                explanation: "El uso de un motor de búsqueda sin seguimiento que preserve la privacidad reducirá el riesgo de que sus términos de búsqueda no se registren o se utilicen en su contra. Google implementa algunas políticas de seguimiento increíblemente invasivas y tiene un historial de mostrar resultados de búsqueda sesgados. Por tanto, Google, junto con Bing, Baidu, Yahoo y Yandex, son incompatibles con cualquiera que busque proteger su privacidad. Se recomienda actualizar la búsqueda predeterminada de su navegador a un motor de búsqueda que respete la privacidad."
            },
            {
                text: "¿Elimina complementos innecesarios del navegador?",
                explanation: "Las extensiones pueden ver, registrar o modificar cualquier cosa que usted haga en el navegador, y algunas aplicaciones de navegador de apariencia inocente tienen intenciones maliciosas. Los sitios web pueden ver qué extensiones ha instalado y pueden usarlas para mejorar su huella digital, para identificarlo o rastrearlo con mayor precisión. Tanto las tiendas web de Firefox como las de Chrome le permiten comprobar qué permisos/derechos de acceso requiere una extensión antes de instalarla. Consulta las reseñas. Instale únicamente las extensiones que realmente necesite y elimine aquellas que no haya usado por un tiempo."
            },
            {
                text: "¿Mantiene el navegador actualizado?",
                explanation: "Las vulnerabilidades del navegador se descubren y reparan constantemente, por lo que es importante mantenerlo actualizado para evitar un exploit de día cero."
            },
            {
                text: "¿Comprueba HTTPS?",
                explanation: "Si ingresa información en un sitio web que no es HTTPS, estos datos se transportan sin cifrar y, por lo tanto, pueden ser leídos por cualquiera que los intercepte. No ingrese ningún dato en un sitio web que no sea HTTPS, pero tampoco permita que el candado verde le dé una falsa sensación de seguridad, el hecho de que un sitio web tenga un certificado SSL no significa que sea legítimo o confiable."
            },
            {
                text: "¿Utiliza modo incógnito?",
                explanation: "Cuando utilices la máquina de otra persona, asegúrate de estar en una sesión privada o de incógnito. Esto evitará que se guarden el historial del navegador, las cookies y algunos datos, pero no es infalible: aún así se le puede rastrear."
            },
            {
                text: "¿Administra las cookies?",
                explanation: "Borrar las cookies periódicamente es un paso que puede tomar para ayudar a reducir el seguimiento de los sitios web. Las cookies también pueden almacenar su token de sesión, que si se captura, permitiría que alguien acceda a sus cuentas sin credenciales. Para mitigar esto, debes borrar las cookies con frecuencia."
            }
        ]
    },
    e_Mail: {
        description: "Si un pirata informático obtiene acceso a sus correos electrónicos, proporciona una puerta de entrada para que sus otras cuentas se vean comprometidas (mediante el restablecimiento de contraseñas), por lo que la seguridad del correo electrónico es primordial para su seguridad digital.",
        questions: [
            {
                text: "¿Tiene más de una dirección de correo electrónico?",
                explanation: "Considere la posibilidad de utilizar una dirección de correo electrónico diferente para las comunicaciones críticas para la seguridad que para el correo trivial, como los boletines. Esta compartimentación podría reducir la cantidad de daño causado por una violación de datos y también facilitar la recuperación de una cuenta comprometida."
            },
            {
                text: "¿Mantiene privada la dirección de correo electrónico?",
                explanation: "No comparta públicamente su correo electrónico principal, ya que las direcciones de correo suelen ser el punto de partida para la mayoría de los ataques de phishing."
            },
            {
                text: "¿Mantiene su cuenta segura?",
                explanation: "Utilice una contraseña larga y única, habilite 2FA y tenga cuidado al iniciar sesión. Su cuenta de correo electrónico proporciona un punto de entrada fácil a todas sus otras cuentas en línea para un atacante."
            },
            {
                text: "¿Deshabilita la carga automática de contenido remoto?",
                explanation: "Los mensajes de correo electrónico pueden contener contenido remoto, como imágenes u hojas de estilo, que a menudo se cargan automáticamente desde el servidor. Debe desactivar esta opción, ya que expone su dirección IP y la información de su dispositivo y, a menudo, se utiliza para realizar seguimiento."
            }
        ]
    },
    Mensajeria: {
        description: "",
        questions: [
            {
                text: "¿Utiliza únicamente mensajeros totalmente cifrados de extremo a extremo?",
                explanation: "El cifrado de extremo a extremo es un sistema de comunicación en el que los mensajes se cifran en su dispositivo y no se descifran hasta que llegan al destinatario previsto. Esto garantiza que cualquier actor que intercepte el tráfico no pueda leer el contenido del mensaje, ni nadie con acceso a los servidores centrales donde se almacenan los datos."
            },
            {
                text: "¿Utiliza únicamente plataformas de mensajería de código abierto?",
                explanation: "Si el código es de código abierto, cualquier persona calificada para hacerlo puede examinarlo y auditarlo de forma independiente, para garantizar que no haya puertas traseras, vulnerabilidades u otros problemas de seguridad."
            },
            {
                text: "¿Utiliza una plataforma de mensajería confiable?",
                explanation: "Al seleccionar una aplicación de mensajería cifrada, asegúrese de que sea completamente de código abierto, estable, mantenida activamente e idealmente respaldada por desarrolladores acreditados."
            },
            {
                text: "¿Verifica la configuración de seguridad?",
                explanation: "Habilite la configuración de seguridad, incluida la verificación de contactos, las notificaciones de seguridad y el cifrado. Deshabilite las funciones opcionales que no sean de seguridad, como confirmación de lectura, última conexión en línea y notificación de escritura."
            },
            {
                text: "¿Se asegura de que el entorno de sus destinatarios sea seguro?",
                explanation: "Su conversación sólo puede ser tan segura como el eslabón más débil. A menudo, la forma más sencilla de infiltrarse en un canal de comunicaciones es apuntar al individuo o nodo con menor protección."
            },
            {
                text: "¿Deshabilita los servicios en la nube?",
                explanation: "Algunas aplicaciones de mensajería móvil ofrecen un complemento web o de escritorio. Esto no sólo aumenta la superficie de ataque, sino que se ha relacionado con varios problemas de seguridad críticos y, por lo tanto, debe evitarse, si es posible."
            },
            {
                text: "¿Sus chats grupales son seguros?",
                explanation: "El riesgo de compromiso aumenta exponencialmente cuanto más participantes hay en un grupo, a medida que aumenta la superficie de ataque. Verifique periódicamente que todos los participantes sean legítimos."
            }
        ]
    },
    Redes_Sociales: {
        description: "Las comunidades en línea existen desde la invención de Internet y brindan a personas de todo el mundo la oportunidad de conectarse, comunicarse y compartir. Aunque estas redes son una excelente manera de promover la interacción social y unir a las personas, eso tiene un lado oscuro: existen algunas preocupaciones serias sobre la privacidad de los servicios de redes sociales, y estos sitios de redes sociales son propiedad de corporaciones privadas y generan ingresos. recopilando datos sobre individuos y vendiéndolos, a menudo a terceros anunciantes. Asegure su cuenta, bloquee su configuración de privacidad, pero sepa que incluso después de hacerlo, todos los datos cargados intencionalmente o no son efectivamente públicos. Si es posible, evite el uso de redes sociales convencionales.",
        questions: [
            {
                text: "¿Asegura su cuenta?",
                explanation: "Los perfiles de las redes sociales son robados o apropiados con demasiada frecuencia. Para proteger su cuenta: utilice una contraseña única y segura y habilite la autenticación de dos factores."
            },
            {
                text: "¿Verifica la configuración de privacidad?",
                explanation: "La mayoría de las redes sociales te permiten controlar tu configuración de privacidad. Asegúrese de sentirse cómodo con los datos que está exponiendo actualmente y a quién."
            },
            {
                text: "¿Piensa en todas las interacciones como públicas?",
                explanation: "Todavía existen numerosos métodos para ver el contenido privado de un usuario en muchas redes sociales. Por lo tanto, antes de subir, publicar o comentar cualquier cosa, piensa ¿Me importaría si esto fuera totalmente público?."
            },
            {
                text: "¿Piensa en todas las interacciones como permanentes?",
                explanation: "Prácticamente todas las publicaciones, comentarios, fotografías, etc. cuentan con una copia de seguridad continua de una gran cantidad de servicios de terceros, que archivan estos datos y los hacen indexables y disponibles públicamente casi para siempre."
            },
            {
                text: "¿Evita revelar demasiado de su vida personal?",
                explanation: "La información del perfil crea una mina de oro de información para los piratas informáticos, el tipo de datos que les ayuda a personalizar las estafas de phishing. Evite compartir demasiados detalles (Fecha de nacimiento, ciudad natal, escuela, etc.)."
            },
            {
                text: "¿Tiene cuidado con lo que sube?",
                explanation: "Las actualizaciones de estado, los comentarios, los registros y los medios pueden revelar involuntariamente mucho más de lo que pretendía. Esto es especialmente relevante para fotos y vídeos, que pueden mostrar cosas de fondo."
            },
            {
                text: "¿Comparte su correo electrónico y su número de teléfono?",
                explanation: "Publicar su dirección de correo electrónico real o número de teléfono móvil les da a los piratas informáticos, trolls y spammers más municiones para usar en su contra, y también puede permitir que se conecten alias, perfiles o puntos de datos separados."
            },
            {
                text: "¿Evita otorgar permisos o conexiones innecesarias?",
                explanation: "De forma predeterminada, muchas de las aplicaciones de redes sociales populares te pedirán permiso para acceder a tus contactos, registro de llamadas, ubicación, historial de mensajes, etc. Si no necesitan este acceso, no se lo concedas."
            },
            {
                text: "¿Evita publicar datos geográficos mientras esté fuera?",
                explanation: "Si planeas compartir algún contenido que revele una ubicación, espera hasta haber abandonado ese lugar. Esto es particularmente importante cuando está de viaje, en un restaurante, campus, hotel/resort, edificio público o aeropuerto."
            }
        ]
    },
    Redes: {
        description: "Esta sección cubre cómo conectar sus dispositivos a Internet de forma segura, incluida la configuración de su enrutador y una VPN.",
        questions: [
            {
                text: "¿Utiliza una VPN?",
                explanation: "Utilice una VPN paga y de buena reputación. Esto puede ayudar a proteger los sitios que visita para que no registren su IP real, reducir la cantidad de datos que su ISP puede recopilar y aumentar la protección en WiFi pública."
            },
            {
                text: "¿Cambia la contraseña de su enrutador?",
                explanation: "Después de obtener un nuevo enrutador, cambie la contraseña. Las contraseñas predeterminadas del enrutador están disponibles públicamente, lo que significa que cualquier persona que se encuentre cerca podría conectarse."
            },
            {
                text: "¿Utiliza WPA2 y una contraseña segura?",
                explanation: "Existen diferentes protocolos de autenticación para conectarse a WiFi. Actualmente, las opciones más seguras son WPA2 y WPA3 (en enrutadores más nuevos)."
            },
            {
                text: "¿Mantiene actualizado el firmware del enrutador?",
                explanation: "Los fabricantes lanzan actualizaciones de firmware que corrigen vulnerabilidades de seguridad, implementan nuevos estándares y, en ocasiones, agregan funciones o mejoran el rendimiento de su enrutador."
            }
        ]
    },
    Dispositivos_Móviles: {
        description: "Los teléfonos inteligentes han revolucionado muchos aspectos de la vida y han puesto el mundo a nuestro alcance. Para muchos de nosotros, los teléfonos inteligentes son nuestro principal medio de comunicación, entretenimiento y acceso al conocimiento. Pero si bien han llevado la comodidad a un nivel completamente nuevo, suceden algunas cosas indeseadas detrás de la pantalla. El seguimiento geográfico se utiliza para rastrear cada uno de nuestros movimientos y tenemos poco control sobre quién tiene estos datos; su teléfono incluso puede rastrear su ubicación sin GPS. A lo largo de los años, surgieron numerosos informes que describen formas en las que el micrófono de su teléfono puede espiar y la cámara puede observarlo, todo sin su conocimiento o consentimiento. Y luego están las aplicaciones maliciosas, la falta de parches de seguridad y las posibles o probables puertas traseras. El uso de un teléfono inteligente genera una gran cantidad de datos sobre usted, desde información que comparte intencionalmente hasta datos generados silenciosamente a partir de sus acciones. Puede resultar aterrador ver lo que Google, Microsoft, Apple y Facebook saben sobre nosotros; a veces saben más que nuestra familia más cercana. Es difícil comprender qué revelarán sus datos, especialmente en combinación con otros datos. Estos datos se utilizan para mucho más que solo publicidad: más a menudo se utilizan para calificar a las personas en materia de finanzas, seguros y empleo. Los anuncios dirigidos pueden incluso utilizarse para una vigilancia detallada (ver ADINT). A muchos de nosotros nos preocupa cómo los gobiernos recopilan y utilizan los datos de nuestros teléfonos inteligentes y, con razón, las agencias federales a menudo solicitan nuestros datos a Google, Facebook, Apple, Microsoft, Amazon y otras empresas de tecnología. A veces, las solicitudes se realizan de forma masiva y devuelven información detallada sobre todas las personas que se encuentran dentro de una determinada geocerca, a menudo de personas inocentes. Y esto no incluye todo el tráfico de Internet al que las agencias de inteligencia de todo el mundo tienen acceso sin obstáculos.",
        questions: [
            {
                text: "¿Cifra su dispositivo?",
                explanation: "Para mantener sus datos a salvo del acceso físico, utilice el cifrado de archivos. Esto significará que si pierde o le roban su dispositivo, nadie tendrá acceso a sus datos."
            },
            {
                text: "¿Desactiva las funciones de conectividad que no se estén utilizando?",
                explanation: "Cuando no esté utilizando WiFi, Bluetooth, NFC, etc., desactive esas funciones. Hay varias amenazas comunes que utilizan estas características."
            },
            {
                text: "¿Mantiene el recuento de aplicaciones al mínimo?",
                explanation: "Desinstale las aplicaciones que no necesita o que no utiliza con regularidad. Como las aplicaciones suelen ejecutarse en segundo plano, lo que ralentiza el dispositivo, pero también recopila datos."
            },
            {
                text: "¿Evita otorgar permisos a las aplicaciones?",
                explanation: "No otorgue permisos a las aplicaciones que no necesitan."
            },
            {
                text: "¿Instala aplicaciones unicamente de fuentes oficiales?",
                explanation: "Las aplicaciones de Apple App Store y Google Play Store se escanean y firman criptográficamente, lo que las hace menos propensas a ser maliciosas."
            }
        ]
    },
    Computadora_Personal: {
        description: "Aunque Windows y OS X son fáciles de usar y convenientes, ambos están lejos de ser seguros. Su sistema operativo proporciona la interfaz entre el hardware y sus aplicaciones, por lo que, si se ve comprometido, puede tener efectos perjudiciales.",
        questions: [
            {
                text: "¿Mantiene su sistema actualizado?",
                explanation: "Las actualizaciones del sistema contienen correcciones/parches para problemas de seguridad, mejoran el rendimiento y, en ocasiones, agregan nuevas funciones. Instale nuevas actualizaciones cuando se le solicite."
            },
            {
                text: "¿Cifra su dispositivo?",
                explanation: "Utilice herramientas de cifrado del disco para Windows, MacOS o Linux para habilitar el cifrado completo. Esto evita el acceso no autorizado en caso de pérdida o robo de su computadora."
            },
            {
                text: "¿Tiene copia de seguridad de los datos importantes?",
                explanation: "Mantener copias de seguridad cifradas evita pérdidas debido a ransomware, robo o daños."
            },
            {
                text: "¿Activa el bloqueo de pantalla cuando está inactivo?",
                explanation: "Bloquee su computadora cuando esté ausente y configúrela para que solicite una contraseña al reanudar desde el protector de pantalla o en suspensión para evitar el acceso no autorizado."
            },
            {
                text: "¿Deshabilita asistentes como Siri?",
                explanation: "Los asistentes controlados por voz pueden tener implicaciones para la privacidad debido a los datos enviados para su procesamiento. Deshabilite o limite sus capacidades de escucha."
            },
            {
                text: "¿Revisa sus programas instalados?",
                explanation: "Mantenga las aplicaciones instaladas al mínimo para reducir la exposición a vulnerabilidades y borre periódicamente los cachés de las aplicaciones."
            },
            {
                text: "¿Administra los permisos?",
                explanation: "Controla qué aplicaciones tienen acceso a tu ubicación, cámara, micrófono, contactos y otra información confidencial."
            },
            {
                text: "¿Apaga su computadora en lugar de ponerla en espera?",
                explanation: "Apague su dispositivo cuando no esté en uso, especialmente si su disco está cifrado, para mantener los datos seguros."
            },
            {
                text: "¿Tiene cuidado al conectar dispositivos tipo USB a su computadora?",
                explanation: "Los dispositivos USB pueden representar serias amenazas. Considere la posibilidad de utilizar antivirus siempre para comprobar de forma segura los dispositivos USB."
            }
        ]
    },
    Smart_Home: {
        description: "Los asistentes domésticos (como Google Home, Alexa y Siri) y otros dispositivos conectados a Internet recopilan grandes cantidades de datos personales (incluidas muestras de voz, datos de ubicación, detalles del hogar y registros de todas las interacciones). Dado que usted tiene un control limitado sobre lo que se recopila, cómo se almacena y para qué se utilizará, esto hace que sea difícil recomendar cualquier producto de consumo para el hogar inteligente a cualquiera que se preocupe por la privacidad y la seguridad. Seguridad versus Privacidad: Hay muchos dispositivos inteligentes en el mercado que afirman aumentar la seguridad de su hogar y al mismo tiempo ser fáciles y convenientes de usar (como alarmas antirrobo inteligentes, cámaras de seguridad para Internet, cerraduras inteligentes y timbres de acceso remoto, por nombrar algunos). Puede parecer que estos dispositivos facilitan la seguridad, pero existe una contrapartida en términos de privacidad: ya que recopilan grandes cantidades de datos personales y le dejan sin control sobre cómo se almacenan o utilizan. La seguridad de estos dispositivos también es cuestionable, ya que muchos de ellos pueden ser (y están siendo) pirateados, lo que permite a un intruso eludir la detección con el mínimo esfuerzo. La opción que más respeta la privacidad sería no utilizar dispositivos inteligentes conectados a Internet en su hogar y no depender de un dispositivo de seguridad que requiera una conexión a Internet. Pero si lo hace, es importante comprender completamente los riesgos de cualquier producto antes de comprarlo. Luego ajuste la configuración para aumentar la privacidad y la seguridad. Las siguientes preguntas le guiarán a mitigar los riesgos asociados con los dispositivos domésticos conectados a Internet.",
        questions: [
            {
                text: "¿Cambia el nombre de los dispositivos para no especificar marca/modelo?",
                explanation: "Cambie los nombres predeterminados de los dispositivos por algo genérico para evitar ataques dirigidos que oculten la información de la marca o el modelo."
            },
            {
                text: "¿Desactiva el micrófono y la cámara cuando no estén en uso?",
                explanation: "Utilice interruptores de hardware para apagar micrófonos y cámaras en dispositivos inteligentes para protegerlos contra grabaciones accidentales o accesos específicos."
            },
            {
                text: "¿Comprende qué datos se recopilan, almacenan y transmiten?",
                explanation: "Investigue y garantice su comodidad con las prácticas de manejo de datos de los dispositivos domésticos inteligentes antes de comprarlos, evitando dispositivos que compartan datos con terceros."
            },
            {
                text: "¿Establece configuraciones de privacidad y opta por no compartir datos con terceros?",
                explanation: "Ajuste la configuración de la aplicación para lograr controles de privacidad más estrictos y opte por no compartir datos con terceros siempre que sea posible."
            },
            {
                text: "¿Evita vincular tus dispositivos domésticos inteligentes a su identidad real?",
                explanation: "Utilice nombres de usuario y contraseñas anónimos, evitando registrarse/iniciar sesión a través de redes sociales u otros servicios de terceros para mantener la privacidad."
            },
            {
                text: "¿Proteje su red?",
                explanation: "Asegure la red y el WiFi de su hogar para evitar el acceso no autorizado a dispositivos inteligentes."
            }
        ]
    },
    Finanzas_Personales: {
        description: "El fraude con tarjetas de crédito es la forma más común de robo de identidad (con 133.015 informes en los EE. UU. solo en 2017) y una pérdida total de 905 millones de dólares, lo que representó un aumento del 26% con respecto al año anterior. La cantidad promedio perdida por persona fue de US429 en 2017. Es más importante que nunca tomar medidas básicas para protegerse de ser víctima. Nota sobre las tarjetas de crédito: Las tarjetas de crédito cuentan con métodos tecnológicos para detectar y detener algunas transacciones fraudulentas. Los principales procesadores de pagos implementan esto extrayendo enormes cantidades de datos de los titulares de sus tarjetas, para saber mucho sobre los hábitos de gasto y consumo de cada persona. Estos datos se utilizan para identificar fraudes, pero también se venden a otros intermediarios de datos. Por lo tanto, las tarjetas de crédito son buenas para la seguridad, pero terribles para la privacidad de los datos.",
        questions: [
            {
                text: "¿Esta registrado para recibir alertas de fraude y monitoreo de crédito?",
                explanation: "Habilite alertas de fraude y monitoreo de crédito para recibir alertas sobre actividades sospechosas."
            },
            {
                text: "¿Aplica un congelamiento de crédito?",
                explanation: "Evite consultas de crédito no autorizadas congelando su crédito."
            },
            {
                text: "¿Utiliza tarjetas virtuales?",
                explanation: "Utilice números de tarjetas virtuales para transacciones en línea para proteger sus datos bancarios reales."
            },
            {
                text: "¿Utiliza efectivo para transacciones locales?",
                explanation: "Pague en efectivo en compras locales y cotidianas para evitar la elaboración de perfiles financieros por parte de las instituciones."
            },
            {
                text: "¿Utiliza una dirección de entrega alternativa?",
                explanation: "Opte por entregas a direcciones no personales, como apartados de correos, direcciones de reenvío o ubicaciones de recogida locales para evitar vincular compras directamente con usted."
            }
        ]
    },
    Aspecto_Humano: {
        description: "Muchas filtraciones, hackeos y ataques de datos son causados ​por errores humanos. Las siguientes preguntas contiene los aspectos básicos para validar el riesgo de que esto le suceda. Muchas de ellas son de sentido común, pero vale la pena tomar nota de ellas.",
        questions: [
            {
                text: "¿Verifica los destinatarios?",
                explanation: "Los correos electrónicos se pueden falsificar fácilmente. Verifique la autenticidad del remitente, especialmente para acciones sensibles, y prefiera ingresar las URL manualmente en lugar de hacer clic en los enlaces de los correos electrónicos."
            },
            {
                text: "¿Nunca deja sus dispositivos desatendidos?",
                explanation: "Los dispositivos desatendidos pueden verse comprometidos incluso con contraseñas seguras. Utilice funciones de cifrado y borrado remoto como Buscar mi teléfono para dispositivos perdidos."
            },
            {
                text: "¿Esta alerta de la Cam-fectación?",
                explanation: "Protéjase contra el camfecting mediante el uso de cubiertas para cámaras web y bloqueadores de micrófonos. Silencie a los asistentes domésticos cuando no estén en uso o no estén discutiendo temas delicados."
            },
            {
                text: "¿Esta alerta del Shoulder Surfing?",
                explanation: "Utilice pantallas de privacidad en computadoras portátiles y móviles para evitar que otras personas lean su pantalla en espacios públicos."
            },
            {
                text: "¿Esta alerta de los ataques de Phising?",
                explanation: "Tenga cuidado con los intentos de phishing. Verifique las URL, el contexto de los mensajes recibidos y emplee buenas prácticas de seguridad, como usar 2FA y no reutilizar contraseñas."
            },
            {
                text: "¿Esta alerta del Stalkerware?",
                explanation: "Tenga cuidado con el stalkerware instalado por conocidos para espiar. Esté atento a señales como un uso inusual de la batería y realice restablecimientos de fábrica si lo sospecha."
            },
            {
                text: "¿Instala software de fuentes confiables?",
                explanation: "Descargue software únicamente de fuentes legítimas y verifique archivos con herramientas antes de la instalación."
            },
            {
                text: "¿Almacena sus datos de forma segura?",
                explanation: "Asegúrese de que todos los datos personales en los dispositivos o en la nube estén cifrados para protegerlos contra el acceso no autorizado."
            },
            {
                text: "¿Oculta sus detalles personales de los documentos?",
                explanation: "Al compartir documentos, oscurezca los detalles personales con rectángulos opacos para evitar la fuga de información."
            }

        ]
    },
};

// Recomendaciones
const recommendations = {
    Autenticación: [
        { name: "howsecurityismypassword", url: "https://howsecureismypassword.net/" },
        { name: "KeePass", url: "https://keepass.info/" },
        { name: "Bitwarden", url: "https://bitwarden.com/" },
        { name: "Proton", url: "https://proton.me/pass" },
        { name: "2fas", url: "https://2fas.com/" },
        { name: "Aegis", url: "https://getaegis.app/" },
        { name: "Authenticator", url: "https://mattrubin.me/authenticator/" }
    ],
    Navegación_Web: [
        { name: "Mozilla Firefox", url: "https://www.mozilla.org/es-ES/firefox/" },
        { name: "Brave Browser", url: "https://brave.com/" },
        { name: "DuckDuckGo", url: "https://duckduckgo.com/" },
        { name: "Qwant", url: "https://www.qwant.com/" },
        { name: "Whatismybrowser", url: "https://www.whatismybrowser.com/" },
        { name: "EFF", url: "https://www.eff.org/https-everywhere" }
    ],
    e_Mail: [
        { name: "Howtostopemailtracking", url: "https://www.theverge.com/22288190/email-pixel-trackers-how-to-stop-images-automatic-download" }
    ],
    Mensajeria: [
        { name: "Signal", url: "https://signal.org/" }
    ],
    Redes_Sociales: [
        { name: "Mastodon", url: "https://mastodon.social/explore" },
        { name: "PeerTube", url: "https://joinpeertube.org/" },
        { name: "dTube", url: "https://d.tube/" }
    ],
    Redes: [
        { name: "Por recomendar", url: "" }
    ],
    Dispositivos_Móviles: [
        { name: "Por recomendar", url: "" }
    ],
    Computadora_Personal: [
        { name: "Cryptomator", url: "https://cryptomator.org/android/" },
        { name: "Veracriypt", url: "https://veracrypt.fr/en/Home.html" },
        { name: "oo-software", url: "https://www.oo-software.com/en/shutup10" }
    ],
    Smart_Home: [
        { name: "Por recomendar", url: "" }
    ],
    Finanzas_Personales: [
        { name: "Privacy", url: "https://privacy.com/" },
        { name: "MYSUDO", url: "https://mysudo.com/" }
    ],
    Aspecto_Humano: [
        { name: "VirusTotal", url: "https://www.virustotal.com/gui/home/upload" }
    ]
};

// Crear la encuesta y las respuestas tipo radio
function createSurvey() {
    const surveyContainer = document.getElementById('questions');
    for (const [topic, topicData] of Object.entries(topics)) {
        const topicDiv = document.createElement('div');
        topicDiv.className = 'topic';
        topicDiv.innerHTML = `
            <h3>${topic.charAt(0).toUpperCase() + topic.slice(1)}</h3>
            <p class="topic-description justified">${topicData.description}</p>
        `;
        
        topicData.questions.forEach((question, index) => {
            const questionDiv = document.createElement('div');
            questionDiv.className = 'question';
            questionDiv.innerHTML = `
                <label title="${question.explanation}">${question.text}</label>
                <div class="radio-group">
                    <label><input type="radio" name="${topic}_q${index}" value="si" required> Si</label>
                    <label><input type="radio" name="${topic}_q${index}" value="no" required> No</label>
                </div>
            `;
            topicDiv.appendChild(questionDiv);
        });
        surveyContainer.appendChild(topicDiv);
    }
}

// Se cuenta la cantidad de respuestas SI y se calcula el porcentaje
function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const results = {};
    
    for (const topic of Object.keys(topics)) {
        const yesCount = topics[topic].questions.reduce((count, _, index) => 
            count + (form[`${topic}_q${index}`].value === 'si' ? 1 : 0), 0);
        const percentage = (yesCount / topics[topic].questions.length) * 100;
        results[topic] = parseFloat(percentage.toFixed(2));
    }
    
    displayResults(results);
}

// Función para presentar los resultados en gráfico radial y en barras descendentes
function displayResults(results) {
    document.getElementById('surveyForm').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const firstName = getUrlParameter('firstName');
    const lastName = getUrlParameter('lastName');

     // Calculate the mean percentage
     const meanPercentage = Object.values(results).reduce((sum, value) => sum + value, 0) / Object.keys(results).length;
    
     // Determine the classification
     let classification;
     if (meanPercentage <= 25) {
         classification = "Novato ingenuo";
     } else if (meanPercentage <= 50) {
         classification = "Examinador tradicional";
     } else if (meanPercentage <= 75) {
         classification = "Inconformista flexible";
     } else {
         classification = "Colaborador confiable";
     }
    
    // Muestra el titulo encima de los resultados con el nombre de la persona
    // document.getElementById('results').insertAdjacentHTML('afterbegin', `<h2>Resultado diagnóstico para ${firstName} ${lastName}</h2>`);

     // Display results with name and classification
    const resultsHeader = document.createElement('div');
    resultsHeader.innerHTML = `
        <h2>Resultado diagnóstico para ${firstName} ${lastName}</h2>
        <p>Clasificación: ${classification} (${meanPercentage.toFixed(2)}%)</p>
    `;
    document.getElementById('results').insertBefore(resultsHeader, document.getElementById('results').firstChild);


    const labels = Object.keys(results).map(topic => topic.charAt(0).toUpperCase() + topic.slice(1));
    const data = Object.values(results);

    // Gráfico de barras descendentes
    const sortedIndices = data.map((value, index) => ({ value, index }))
                              .sort((a, b) => b.value - a.value)
                              .map(item => item.index);
    const sortedLabels = sortedIndices.map(index => labels[index]);
    const sortedData = sortedIndices.map(index => data[index]);

    const ctx = document.getElementById('radarChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: Object.keys(results).map(topic => topic.charAt(0).toUpperCase() + topic.slice(1)),
            datasets: [{
                label: 'Porcentajes de respuestas Si por aspecto',
                data: Object.values(results),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgb(75, 192, 192)',
                pointBackgroundColor: 'rgb(75, 192, 192)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(75, 192, 192)'
            }]
        },
        options: {
            elements: {
                line: {
                    borderWidth: 3
                }
            },
            scales: {
                r: {
                    angleLines: {
                        display: false
                    },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    ticks: {
                        stepSize: 20,
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // Gráfico en barras
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: sortedLabels,
            datasets: [{
                label: 'Porcentajes de respuestas Si por aspecto',
                data: sortedData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        callback: function(value) {
                            return value + '%';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    // recomendaciones
    const recommendationsDiv = document.getElementById('recommendationsSection');
    recommendationsDiv.innerHTML = '<h3>Recomendaciones</h3>';

    let hasRecommendations = false;

    for (const [topic, percentage] of Object.entries(results)) {
        if (percentage < 75) {
            const topicKey = topic.replace(/\s+/g, '_');
            if (recommendations.hasOwnProperty(topicKey)) {
                const topicRecommendations = recommendations[topicKey];
                const topicDiv = document.createElement('div');
                topicDiv.innerHTML = `<h4>${topic} (${percentage.toFixed(2)}%)</h4><ul>`;
                topicRecommendations.forEach(rec => {
                    topicDiv.innerHTML += `<li><a href="${rec.url}" target="_blank">${rec.name}</a></li>`;
                });
                topicDiv.innerHTML += '</ul>';
                recommendationsDiv.appendChild(topicDiv);
                hasRecommendations = true;
            }
        }
    }

    if (!hasRecommendations) {
        recommendationsDiv.innerHTML += '<p>Sin recomendaciones.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const firstName = getUrlParameter('firstName');
    const lastName = getUrlParameter('lastName');
    const userName = document.getElementById('userName');
    if (firstName && lastName) {
        userName.textContent = `¡Bienvenido(a), ${firstName} ${lastName}!`;
    }
    createSurvey();
    document.getElementById('surveyForm').addEventListener('submit', handleSubmit);
});