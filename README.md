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

### promesas
funcion no bloqueante y asincrona la cual puede retornar un valor ahora, en el futuro o nunca

### async / await 
permite estructurar una funcion asincrona sin bloqueo de una manera similar a una funcion sincrona ordinaria

## Resumen:
js es: asincrono y no bloqueante, con un bucle de eventos(concurrencia) implementado en un unico hilo para sus intefaces I/O
