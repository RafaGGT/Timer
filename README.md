## Timer/Temporizador de 1 minuto en javascript
Solo es un temporizador de 1 minuto creado con javascript, css y html.

# Descripción de las funciones
1) visibility: Esta función gestiona la visibilidad de los botones mediante un operador ternario que modifica el estilo display entre "inline-block" o "none".

2) startTimer: Inicia la cuenta regresiva con las siguientes sentencias:

     a) Un if que verifica si el timer tiene un valor (inicialmente es null) o si está en pausa. Esto evita múltiples intervalos, permitiendo pausar o reanudar tantas veces como sea necesario.
   
     b) setInterval(): Dentro de este, se convierte el valor 60 a minutos dividiéndolo y redondeándolo, y a segundos con el residuo. También contiene un if que utiliza clearInterval cuando llega a 0.
  
4) pauseTimer: Contiene un clearInterval para pausar el temporizador.

5) resetTimer: Contiene un clearInterval y reinicia el display que contiene el minuto.

6) resumeTimer: Invoca la función startTimer() para reanudar la cuenta regresiva.
