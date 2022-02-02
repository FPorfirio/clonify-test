Ejercicio tecnico para Clonify

Stack usado: Typescript, NextJS, ChakraUi, TailwindCss, Redux Toolkit

Estructura: Todos los componentes o utilidades se importan y re-exportan desde un archivo index con el nombre de la carpeta predecesora: Ej: Common > components > components.tsx
Los modelos de la database, los middlewares y todas las utilidades asociadas al api, se encuentran en la carpeta server.

Frontend:  La aplicacion es generada en build time por NextJS y rehidratada por RTK-query. El cache y los servicios son manejados por RTK-query. Algunos componentes son puramente ChakraUI y otros custom hechos con TailwindCss 

Backend: La Api tambien es servida por NextJs usando next-connect para tener una interface similiar a ExpressJs.

*Como correr el proyecto*
1) Crear un archivo .env.local en la raiz del proyecto y definir la variable MONGODB_URI con el valor que sera enviado por mail
2) Ejecutar npm run dev en la linea de comandos, estando ubicado en la raiz del proyecto 

*Credenciales*
user: clonify
password: clonifypass




