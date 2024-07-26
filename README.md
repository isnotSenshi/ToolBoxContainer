### TOOLBOX FRONT + API / DOCKER + NODE v14

## LEVANTAR IMAGEN EN DOCKER
docker compose up

## TEST
API: jest
</br>
FRONT: Se intento utilizar jest pero hubo muchos problemas con paquetes para la version v14 de node

## FRONT
Puerto 3000

## BACK
Puerto 3001

Specific file 
------------------------------------------------
location: /files/downloadFiles/(filename.csv)
http://localhost:3001/files/downloadFiles/test2.csv

All files
------------------------------------------------
location: /files/getFiles
http://localhost:3001/files/getFiles


## ELIMINAR CACHE
docker builder prune 

# BORRAR TODO
docker system df 
docker rmi -f $(docker images -aq)
docker system prune

# Mathias Lovera
