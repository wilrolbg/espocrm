# PO: Criterios de aceptación para el flujo de creación de una cuenta

## 1. Alcance del flujo

Este documento define los criterios de aceptación del flujo realizado en EspoCRM desde el inicio de sesión hasta la apertura del formulario de creación de una cuenta.

Flujo validado:

1. Ingresar a la URL https://demo.us.espocrm.com/
2. Seleccionar el usuario Administrator
3. Seleccionar el idioma Spanish (Spain)
4. Hacer clic en Login
5. Ir al módulo Cuentas
6. Hacer clic en + Crear cuenta
7. Validar que el formulario de creación se abra correctamente

## 2. Historia de usuario

Como usuario autenticado del sistema
Quiero poder crear una cuenta desde el módulo Cuentas
Para registrar una nueva entidad comercial con sus datos principales y continuar el flujo de gestión de clientes.

## 3. Precondiciones

- El usuario tiene acceso al entorno demo de EspoCRM.
- El usuario está autenticado con el perfil Administrator.
- El idioma del sistema puede configurarse en Spanish (Spain).
- El módulo Cuentas está disponible en la navegación principal.

## 4. Criterios de aceptación

### AC-01: Acceso a la pantalla de login
- El sistema muestra la pantalla de inicio de sesión con los campos de usuario y lenguaje.
- El campo Username presenta la opción Administrator disponible para seleccionarse.
- El campo Language permite seleccionar Spanish (Spain).
- El botón Login se visualiza y es accionable.

### AC-02: Inicio de sesión con idioma español
- Al seleccionar Administrator y Spanish (Spain), el sistema mantiene la sesión con el usuario indicado.
- La URL de navegación se actualiza con el locale correspondiente al idioma seleccionado.
- El sistema carga la interfaz principal en español para la sesión activa.

### AC-03: Navegación al módulo Cuentas
- Una vez autenticado, la navegación lateral muestra la opción Cuentas.
- Al hacer clic en Cuentas, el sistema navega al listado del módulo correspondiente.
- La pantalla de Cuentas carga sin errores y muestra el contexto del módulo.

### AC-04: Acceso al formulario de creación
- El listado de Cuentas muestra el botón + Crear cuenta.
- Al hacer clic sobre + Crear cuenta, el sistema navega a la vista de creación.
- La URL cambia al flujo de creación del módulo Account.
- La pantalla de creación se presenta con el título Crear Cuenta o equivalente en español.

### AC-05: Visualización del formulario
- El formulario de creación se carga con los campos principales visibles para el usuario.
- Se muestra el campo Nombre como campo principal y obligatorio.
- Los campos Sitio web, Correo, Teléfono, Dirección de facturación, Dirección de envío, Tipo, Industria, Descripción, Usuario asignado y Equipos se visualizan dentro del formulario.
- El formulario se encuentra listo para la captura de información sin bloqueos ni errores visibles.

### AC-06: Validación del campo obligatorio Nombre
- Si el usuario intenta guardar la cuenta sin completar Nombre, el sistema debe impedir el guardado.
- Debe mostrarse una validación de campo obligatorio.
- El usuario debe poder corregir la información sin perder el resto del formulario.

### AC-07: Captura de datos básicos
- El usuario puede completar Nombre con texto válido.
- El usuario puede ingresar Sitio web, correo electrónico, teléfono y datos de dirección.
- El sistema acepta información en los campos de texto, selectores y áreas de texto definidos por el formulario.
- La interfaz permite completar los datos sin bloquear la edición de otros campos.

### AC-08: Guardado exitoso de la cuenta
- Cuando el usuario completa al menos el campo Nombre y ejecuta la acción de guardar, la cuenta se genera correctamente.
- El sistema confirma la creación de la cuenta mediante un mensaje de éxito o la navegación a la vista de detalle/resultados.
- La nueva cuenta queda disponible en el módulo Cuentas.

### AC-09: Manejo de errores y casos negativos
- Si el usuario intenta guardar con datos inválidos, el sistema debe señalar los errores de forma clara.
- Los errores deben indicar qué campo requiere corrección.
- El usuario debe poder corregir los datos y volver a intentarlo.

### AC-10: Cancelación o salida del formulario
- El usuario puede cancelar o salir del formulario si decide no crear la cuenta.
- La cancelación debe devolver al usuario al listado de Cuentas sin guardar cambios no confirmados.

### AC-11: Experiencia de idioma y consistencia
- La interfaz del formulario de creación debe mantenerse en español siguiendo la configuración del idioma seleccionado.
- Los textos de botones, etiquetas y mensajes deben corresponder al idioma activo.
- La experiencia debe ser consistente con el resto de la navegación del sistema.

## 5. Criterios de aceptación para QA

### Validación manual recomendada
- Ingresar a la URL del demo.
- Seleccionar Administrator.
- Elegir Spanish (Spain).
- Iniciar sesión.
- Confirmar que el menú de navegación muestra Cuentas.
- Acceder a Cuentas y validar que aparece + Crear cuenta.
- Abrir el formulario y confirmar que se visualiza el conjunto de campos esperados.
- Completar Nombre y validar que el sistema acepta la información.
-Guardar la cuenta y comprobar que queda registrada correctamente.

### Criterios de resultado exitoso
- El flujo completo se ejecuta sin errores funcionales.
- El usuario puede crear una cuenta desde el módulo Cuentas.
- El sistema guarda la información relevante y la muestra en el flujo posterior.
- La navegación y los mensajes de la interfaz permanecen coherentes con el idioma español.

## 6. Resultado esperado del negocio

La organización puede registrar nuevas cuentas de clientes o entidades comerciales desde EspoCRM con un flujo intuitivo y consistente, manteniendo internacionalización y claridad en la captura de datos.
