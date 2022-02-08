Ejercicio tecnico para Clonify

Stack usado: Typescript, NextJS, ChakraUi, TailwindCss, Redux Toolkit

Estructura: Todos los componentes o utilidades se importan y re-exportan desde un archivo index con el nombre de la carpeta predecesora. Ej: Common > components > components.tsx
Los modelos de la database, los middlewares y todas las utilidades asociadas al api, se encuentran en la carpeta server.

La configuracion central de los servicios se encuentra en la carpeta services. Cada rodaja o endpoint de los servicios es manejada por una funcion en la carpeta especifica a ese servicio. ej: /api/authorization se encuentra en la carpeta features -> Auth 

Frontend:  La aplicacion es generada en build time por NextJS y rehidratada por RTK-query. El cache y los servicios son manejados por RTK-query. Algunos componentes son puramente ChakraUI y otros custom hechos con TailwindCss.
Dentro de la carpeta App se encuentran todos los estados y configuraciones globales de la aplicacion, por ejemplo los providers del chakra o el redux store.

Backend: La Api es servida por NextJs usando next-connect para tener una interface similiar a ExpressJs.

*Como correr el proyecto*
1) Crear un archivo .env.local en la raiz del proyecto y definir la variable MONGODB_URI con el valor que sera enviado por mail
2) Ejecutar npm run dev en la linea de comandos, estando ubicado en la raiz del proyecto 

*Credenciales*
user: clonify
password: clonifypass




