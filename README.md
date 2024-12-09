
# Projet MSPR1 formation DWWM Epsi

# Développement d'une application web ou web mobile partie Front End.


Projet réalisé avec le Framework Javascript React (v18.2).
Via le bundler Vite



## Sécurité et Authentification

#### Procédure de register 

#### Login 



### Routes protégées 

Le site comprend deux routes protégées qui nécéssitent un token JWT Valide :
- Page profil utilisateur 
- Page contenu exclusif

### Routes publiques 

Toutes les autres routes du sites sont publiques et ne nécessitent pas de token JWT valide pour y accéder.


## Page d'accueil

La page d'accueil comprend :
- Une partie live permettant d'identifier rapidement les concerts en cours ;
- La programmation complète qui peut être filtrée par jour, scène, horaire et style musicale ;
- Les dernières actualités du festival avec lien vers l'actualité complète ;
- Des images liens renvoyant vers la carte interractives et les informations FAQ.

## Page actualités

La page reprend toute les actualités du festival.

## Page Informations-FAQ

Cette page contient les informations générales et FAQ liées festival ainsi qu'un lien image vers la carte interractive.

## Page carte interactive

Cette page contient une carte leaflet sur laquelle apparait les marqueurs des points importants du festival.


## Page partenaires

Cette page va lister tous les partenaires du festival. 

Ces partenaires sont crées via le backend.

Le FrontEnd va récupérer via API :
- Le liste des catégories des partenaires pour les intégrer dans le select qui va permettre de trier les partenaires 
- Les informations de tous les partenaires ou pour la catégorie selectionnée uniquement.

## Back End

Ce projet frontend va consommer l'api située https://backend.nationsound2024-festival.fr





