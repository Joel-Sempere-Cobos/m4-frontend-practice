# Práctica del módulo de Desarrollo Frontend con JavaScript

En esta práctica debemos crear el frontend de una web tipo Wallapop, con anuncios de compra/venta, registro y login de usuarios, creación, edición y borrado de anuncios (propios)...

No se pueden usar librerías ni frameworks de javascript.

Aquí puedes descargar el [enunciado de la práctica](https://github.com/Joel-Sempere-Cobos/m4-frontend-practice/blob/master/Enunciado-practica-desarrollo-frontend-js.pdf).

## Diferencias con respecto a lo visto en clase

-   Validación:
    La validación de la longitud del password vista en clase fallaba: aunque sí que notificaba cuando la contraseña no llegaba al mínimo, el usuario sí se creaba. Lo he corregido añadiendo la longitud mínima en el regex.
    También he hecho que las condiciones sean AND y no OR como estaban.

*   Ver detalle:
    Para ver el detalle de cada anuncio, en lugar de hacer un `<a>`, he hecho que toda el area del `<article>` sea clicable y ajustado el puntero del ratón para que lo señale cuando pase por encima.

-   Navegación:
    He añadido una mínima navegación para facilitar desplazarse por las páginas sin tener que teclear URLs

*   CSS:
    He añadido algo de CSS
