FROM openjdk:17-jdk-alpine

# Expose le port de l'application Spring Boot
EXPOSE 8087
# Ajoute le livrable Spring Boot dans l'image
ADD target/Gestion-Reservation-0.0.1-SNAPSHOT.jar Gestion-Reservation-0.0.1-SNAPSHOT.jar

# Commande d'exécution de l'application Spring Boot
ENTRYPOINT ["java", "-jar", "/Gestion-Reservation-0.0.1-SNAPSHOT.jar"]