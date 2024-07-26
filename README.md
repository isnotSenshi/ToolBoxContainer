## LEVANTAR IMAGEN EN DOCKER
docker compose up

## ELIMINAR CACHE
docker builder prune 

API PORT 3001
FRONT PORT 3000


## COMANDOS UTILES
docker system df 
docker rmi -f $(docker images -aq)
docker system prune