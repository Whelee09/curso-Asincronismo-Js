# curso-Asincronismo-Js

## Que es el asincronismo??
las tareas pueden ser realizdas mas tarde, lo que hace posible que una respuesta sea procesada en diferido

## concurrencia de eventos
utiliza el event-loop

## bloqueante
una tarea no devuelve el control hasta que se ha completado

## no bloqueante
una tarea se devuelve inmediantamente con independencia de resultados(puedes devolver datos o error)

## como manejar la asincronia en js
 
### callbacks
una funcion que es pasada como argumento de otra funcion y que sera invocada segun sea necesario

[Definicion y ejemplo en MDN](https://developer.mozilla.org/es/docs/Glossary/Callback_function)

### promesas
funcion no bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca

### async / await 
permite estructurar una funcion asincrona sin bloqueo de una manera similar a una funcion sincrona ordinaria

## Resumen:
js es: asincrono y no bloqueante, con un bucle de eventos(concurrencia) implementado en un unico hilo para sus intefaces I/O


# Que es el event loop

Una muy buena explicacion(en ingles). [Link a explicacion en YT](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

A continuacion el recurso que utiliza en su charla:
[link al recurso ](http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D``)


#### como ejecutarlo desde la terminal?

node [ruta del arhivo]

##### una vez agregado al script en 'script' de esta manera:

"callback": "node src/callback/challenge.js"

y luego correr el comando :  npm run NombreDelTest(callback)


### documentacion del xhttp

https://developer.mozilla.org/es/docs/Web/API/XMLHttpRequest

https://www.w3schools.com/xml/ajax_xmlhttprequest_response.asp


## promesaaas

definicion de mdn:   https://developer.mozilla.org/es/docs/Glossary/Promise

como usarla: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

una promesa tiene 3 estados:

+ pendiente
+ cumplido
+ rechazado

/////para trabajr con fetch dentro de node instalmos nodefetch

npm i node-fetch


### docuemntacion de la app que estamos consumiendo

https://fakeapi.platzi.com/en/about/introduction/


## aporte de un compa;ero sobre 'cors'
¿Qué es un origen cruzado?++ . Un origen tiene dominio/protocolo/puerto, un origen cruzado denominado “++Cross Origin++” es la palabra que se utiliza para denominar el tipo de peticiones que se realizan a un dominio diferente del dominio de origen desde donde se realiza la petición. Así que si se coloca cors, indica que se permiten ciertas solicitudes predeterminadas de origen cruzado como GET y POST para salvaguardar y evitar manipulaciones maliciosas.

 [En el enlace detallan más sobre el concepto de Cors](https://javascript.info/fetch-crossorigin)

 [documentacion mdn acerac de cors](https://developer.mozilla.org/en-US/docs/Glossary/CORS)

 si tienes dudas, [visita el curso basico de fundamentos de API-REST](linkamicurso)