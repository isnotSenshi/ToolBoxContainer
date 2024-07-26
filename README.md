# TOOLBOX FRONT + API / DOCKER + NODE v14

### TEST
API: Jest </br>
No se utilizo Mocha + chai > (Por lo que vi es un framework bastante sencillo, pero no estoy familiarizado por eso no lo utilice).</br>

FRONT: Se intento utilizar Jest/ y testling-library/react pero hubo muchos problemas con paquetes para la version v14 de node </br>
De todas formas estoy familiarizado con Test unitarios para front pero con versiones mas actuales de Node.

### FRONT
Puerto 3000

### BACK
Puerto 3001

Specific file 
------------------------------------------------
location: /files/downloadFiles/(filename.csv)
http://localhost:3001/files/downloadFiles/test2.csv

All files
------------------------------------------------
location: /files/getFiles
http://localhost:3001/files/getFiles


# LEVANTAR PROYECTO CON DOCKER
docker compose up

# LEVANTAR PROYECTOS POR SEPARADO 
LEER DESCRIPCIONES EN CADA DIRECTORIO

### ELIMINAR CACHE
docker builder prune 

### BORRAR TODO
docker system df </br>
docker rmi -f $(docker images -aq) </br>
docker system prune </br>

### Mathias Lovera
