
# Projet MSPR1 formation DWWM Epsi

# Développement d'une application web ou web mobile partie Front End.

## Environnement de développement 

## Environnement de production

## Sécurité et Authentification

#### Procédure de register 

#### Login 



### Routes protégées 

Le site comprend deux routes protégées qui nécéssitent un token JWT Valide :
- Page profil utilisateur 
- Page contenu exclusif

### Routes publiques 

Toutes les autres routes du sites sont publiques et ne nécessitent pas de token JWT valide pour y accéder.


## Back End

## Page d'accueil

## Page partenaires

Cette page va lister tous les partenaires du festival. 

Ces partenaires sont crées via le backend.

Le FrontEnd va récupérer via API :
- Le liste des catégories des partenaires pour les intégrer dans le select qui va permettre de trier les partenaires 
- Les informations de tous les partenaires ou pour la catégorie selectionnée uniquement.







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
