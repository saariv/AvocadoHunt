# AvocadoHunt

This Repository has a Avocado Hunt - Phaser 3 game. 

See Dockerfile and documentation (Finnish) 

How to run the game using docker: 

To build a Docker image from the Dockerfile, run the following command from inside this directory:
docker build -t avocadohunt https://github.com/saariv/AvocadoHunt.git

To run the image in a Docker container, use the following command:
docker run -itd --name avocadohunt --publish 8080:80 avocadohunt

