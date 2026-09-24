# Casos de prueba: creación de una cuenta en EspoCRM

## 1. Objetivo

Validar que el flujo de creación de una cuenta en el módulo Cuentas funciona correctamente, incluyendo casos normales, alternos y pruebas de borde, de acuerdo con los criterios de aceptación definidos para el proceso.

## 2. Alcance

- Acceso a la aplicación con el usuario Administrator.
- Selección del idioma Spanish (Spain).
- Inicio de sesión correcto.
- Navegación al módulo Cuentas.
- Apertura del formulario de creación de cuenta.
- Captura de datos básicos.
- Guardado exitoso.
- Validación de errores.
- Cobertura de escenarios límite.

## 3. Datos de prueba sugeridos

- Nombre válido: "Empresa Prueba S.A."
- Nombre vacío: ""
- Nombre con caracteres especiales: "Empresa & Co. 2026"
- Sitio web válido: "https://www.empresa-prueba.com"
- Sitio web inválido: "not-a-valid-url"
- Correo válido: "contacto@empresa-prueba.com"
- Correo inválido: "correo-invalido"
- Teléfono válido: "+34 600 123 456"
- Dirección de facturación: "Calle Mayor 10, Madrid"
- Dirección de envío: "Avenida del Sol 25, Barcelona"
- Descripción: "Cliente estratégico del sector tecnológico"

## 4. Supuestos y precondiciones

- El usuario tiene acceso al entorno demo de EspoCRM.
- El usuario Administrator existe y es válido.
- La aplicación está disponible en https://demo.us.espocrm.com/.
- El idioma Spanish (Spain) está disponible.
- El módulo Cuentas está habilitado para el perfil utilizado.
- El usuario tiene permisos para crear registros dentro del módulo Cuentas.

## 5. Matriz de casos de prueba

| ID | Escenario | Tipo | Precondición | Pasos | Resultado esperado |
|---|---|---|---|---|---|
| CT-01 | Acceder a la pantalla de login | Positivo | La aplicación está disponible | 1. Abrir la URL demo. 2. Verificar pantalla de inicio. | Se muestra la pantalla de login con los campos Username y Language visibles. |
| CT-02 | Seleccionar usuario Administrator | Positivo | La pantalla de login está visible | 1. Seleccionar Administrator. | El usuario queda seleccionado correctamente. |
| CT-03 | Seleccionar idioma Spanish (Spain) | Positivo | La pantalla de login está visible | 1. Elegir Spanish (Spain) en Language. | El idioma queda configurado en español. |
| CT-04 | Iniciar sesión correctamente | Positivo | Usuario y idioma seleccionados | 1. Hacer clic en Login. | El sistema accede a la dashboard principal y la interfaz se presenta en español. |
| CT-05 | Acceder a módulo Cuentas | Positivo | Usuario autenticado | 1. Hacer clic en Cuentas desde la navegación principal. | Se abre la vista de listado de Cuentas. |
| CT-06 | Abrir formulario de creación | Positivo | Usuario en listado de Cuentas | 1. Hacer clic en + Crear cuenta. | Se abre la vista de creación con el formulario cargado. |
| CT-07 | Completar registro mínimo válido | Positivo | Formulario abierto | 1. Ingresar Nombre. 2. Guardar. | El sistema crea la cuenta correctamente y confirma el registro. |
| CT-08 | Guardar cuenta con todos los campos completos | Positivo | Formulario abierto | 1. Completar Nombre, Sitio web, Correo, Teléfono, direcciones y descripción. 2. Guardar. | La cuenta se guarda con todos los datos ingresados. |
| CT-09 | Validar campo Nombre obligatorio | Negativo | Formulario abierto | 1. Dejar Nombre vacío. 2. Intentar guardar. | El sistema bloquea la acción y muestra validación del campo obligatorio. |
| CT-10 | Validar email con formato inválido | Negativo | Formulario abierto | 1. Ingresar correo no válido. 2. Guardar. | El sistema muestra error de formato o invalidez. |
| CT-11 | Validar sitio web con formato inválido | Negativo | Formulario abierto | 1. Ingresar URL no válida. 2. Guardar. | El sistema invalida la entrada o muestra mensaje de error. |
| CT-12 | Capturar teléfono con caracteres válidos | Positivo | Formulario abierto | 1. Ingresar teléfono con formato esperado. 2. Guardar. | El teléfono se acepta sin errores. |
| CT-13 | Ingresar dirección de facturación y envío | Positivo | Formulario abierto | 1. Completar ambos campos de dirección. 2. Guardar. | Ambos campos se guardan correctamente. |
| CT-14 | Completar descripción larga | Positivo | Formulario abierto | 1. Ingresar texto largo en Descripción. 2. Guardar. | El texto se acepta y se persiste sin truncamiento no esperado. |
| CT-15 | Cancelar creación de cuenta | Negativo | Formulario abierto | 1. Completar algunos datos. 2. Hacer clic en Cancelar o salir. | El formulario se cierra y no se guarda ninguna información. |
| CT-16 | Crear cuenta con caracteres especiales en el nombre | Positivo | Formulario abierto | 1. Ingresar nombre con símbolos y puntuación. 2. Guardar. | El sistema acepta el valor y genera la cuenta. |
| CT-17 | Verificar persistencia tras guardar | Positivo | Cuenta creada | 1. Guardar la cuenta. 2. Revisar el listado de Cuentas. | La nueva cuenta aparece en el módulo con el nombre registrado. |
| CT-18 | Verificar internacionalización en el formulario | Positivo | Formulario abierto | 1. Revisar etiquetas, botones y mensajes. | Los textos están en español y corresponden al idioma actual. |
| CT-19 | Validar campo Nombre con espacios en blanco | Negativo | Formulario abierto | 1. Ingresar varios espacios en Nombre. 2. Guardar. | El sistema lo trata como valor vacío y solicita corrección. |
| CT-20 | Intentar guardar sin completar ningún campo | Negativo | Formulario abierto | 1. No ingresar ningún valor. 2. Guardar. | El sistema impide el guardado y muestra validaciones obligatorias. |

## 6. Casos de prueba de borde

### 6.1 Borde de longitud

| ID | Escenario | Resultado esperado |
|---|---|---|
| B-01 | Nombre con longitud máxima permitida por el sistema | Se acepta si cumple el límite de validación y se guarda correctamente. |
| B-02 | Nombre con longitud superior al máximo | El sistema rechaza la entrada o muestra error según la regla del sistema. |
| B-03 | Descripción con texto muy largo | Se debe manejar correctamente sin romper la interfaz ni corromper el registro. |

### 6.2 Borde de validación de formatos

| ID | Escenario | Resultado esperado |
|---|---|---|
| B-04 | Correo con mayúsculas, puntos y guiones | Se acepta si respeta el formato exigido. |
| B-05 | Correo sin dominio | Se rechaza con validación de formato. |
| B-06 | Sitio web sin protocolo (`www.ejemplo.com`) | Puede ser aceptado o rechazado según la regla del sistema; debe mostrar validación clara si es inválido. |
| B-07 | Teléfono con letras | Se rechaza o sanitiza según la regla del sistema. |
| B-08 | Teléfono con caracteres especiales y espacios | Debe almacenarse de forma consistente si el sistema lo permite. |

### 6.3 Borde de navegación y UX

| ID | Escenario | Resultado esperado |
|---|---|---|
| B-09 | Usuario intenta abrir la creación desde el módulo sin autenticarse | Se redirige al login o se bloquea la acción. |
| B-10 | Usuario cambia de idioma mientras trabaja en el formulario | La interfaz mantiene consistencia en el idioma activo. |
| B-11 | Usuario recarga la página en la vista de creación | El sistema mantiene el comportamiento esperado; no debe guardar datos no confirmados. |
| B-12 | Usuario intenta acceder directo a la URL de creación sin permisos | Se bloquea o redirige según política de seguridad. |

### 6.4 Borde de integridad de datos

| ID | Escenario | Resultado esperado |
|---|---|---|
| B-13 | Nombre duplicado | El sistema acepta el duplicado si la lógica no lo restringe; si está restringido, presenta mensaje de duplicidad. |
| B-14 | Registro con dirección de facturación y dirección de envío iguales | Se acepta sin errores si es válido para el flujo. |
| B-15 | Registro con campos opcionales vacíos | Se guarda correctamente si el requisito mínimo es solo Nombre. |
| B-16 | Registro con descripción vacía | Se acepta si el campo es opcional. |

## 7. Casos de regresión sugeridos

- Verificar que el acceso al módulo Cuentas sigue funcionando después de cambiar de idioma.
- Confirmar que el formulario se abre desde la navegación lateral y no solo por URL directa.
- Asegurar que el comportamiento de guardar y cancelar no genera registros vacíos.
- Probar que al guardar una cuenta se puede visualizar en el listado de Cuentas inmediatamente.
- Validar que el mensaje de guardado o error se muestra en español, según la configuración del idioma.

## 8. Criterios de aprobación

La funcionalidad de creación de cuentas será considerada correcta si:

- Se puede acceder al módulo Cuentas desde la sesión correcta.
- Se abre el formulario de creación sin errores.
- Se valida correctamente el campo Nombre obligatorio.
- Se guardan correctamente los datos válidos.
- Se muestran mensajes de error claros para entradas inválidas.
- El flujo mantiene consistencia en idioma y navegación.
- Los escenarios de borde no rompen la interfaz ni generan datos inconsistentes.

## 9. Resumen ejecutivo

El flujo de creación de cuentas en EspoCRM debe permitir a un usuario autenticado generar un nuevo registro de cliente en forma segura, clara y consistente. La prueba clave es validar que el formulario se abra correctamente, el campo Nombre sea obligatorio, el guardado funcione con datos válidos, y que los errores y casos límite se manejen de forma controlada sin romper la experiencia del usuario.
