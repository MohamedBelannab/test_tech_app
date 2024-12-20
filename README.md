# une application web (fullstack)

> the project was created by package vite

Ce projet est une application web construite avec React (version 18), utilisant Vite pour le développement rapide et Express.js comme serveur backend. L'application utilise plusieurs bibliothèques et outils pour enrichir l'expérience utilisateur et faciliter l'interaction avec le backend.

---
# Frontend

Le frontend de l'application est construit avec plusieurs bibliothèques et outils modernes. Voici les composants principaux de notre architecture 

## Composants Principaux

- **[React (version 18)](https://reactjs.org/)** : Une bibliothèque JavaScript pour construire des interfaces utilisateur.
  - Utilisé pour gérer la logique de l'interface et rendre les composants de manière réactive.
  
- **[Vite](https://vitejs.dev/)** : Un bundler moderne pour les applications web, utilisé pour la configuration rapide et le développement.
  - Permet un démarrage rapide du projet et des temps de compilation très courts.

- **[@heroicons/react](https://heroicons.com/)** : Des icônes vectorielles conçues pour s'intégrer parfaitement avec React.
  - Offre des icônes SVG prêtes à l'emploi qui peuvent être facilement intégrées dans l'interface utilisateur.

- **[@material-tailwind/react](https://github.com/creativetimofficial/material-tailwind)** : Une bibliothèque de composants UI basée sur Tailwind CSS et Material Design.
  - Fournit des composants réutilisables et bien conçus pour construire des interfaces utilisateur élégantes.

- **[framer-motion](https://www.framer.com/motion/)** : Une bibliothèque pour les animations modernes et fluides dans React.
  - Permet de créer des animations interactives et fluides pour améliorer l'expérience utilisateur.

- **[@reduxjs/toolkit](https://redux-toolkit.js.org/)** : Outils pour gérer l'état de l'application avec Redux.
  - Simplifie l'utilisation de Redux pour la gestion d'état et permet de réduire la complexité du code.

- **[react-redux](https://react-redux.js.org/)** : La bibliothèque officielle pour connecter Redux avec React.
  - Facilite la gestion de l'état global de l'application avec une intégration transparente entre React et Redux.

- **[react-router](https://reactrouter.com/)** : Utilisé pour gérer la navigation entre les pages de l'application.
  - Permet de définir des routes pour la navigation dynamique et la gestion de l'URL dans l'application React.
 ---   
# Backend

Le backend de l'application est construit avec Node.js et Express.js, et utilise plusieurs bibliothèques pour faciliter le traitement des requêtes et la gestion des ressources. Voici les composants principaux :

## Composants Principaux

- **[Express.js](https://expressjs.com/)** : Un framework pour Node.js, utilisé pour la gestion des routes et des requêtes HTTP.
  - Permet de construire rapidement des applications web et des API RESTful.

- **[axios](https://axios-http.com/)** : Une bibliothèque pour effectuer des requêtes HTTP du côté client.
  - Facilite la gestion des appels API et la récupération des données du serveur dans le frontend.

- **[cors](https://www.npmjs.com/package/cors)** : Middleware pour gérer les problèmes de politique de même origine lors des requêtes entre le client et le serveur.
  - Permet de résoudre les problèmes de sécurité liés aux requêtes provenant de domaines différents (Cross-Origin Resource Sharing).

# Instructions d'installation

## Prérequis
> Avant de commencer, assurez-vous d'avoir installé [Node.js](https://nodejs.org/) sur votre machine.
## Étapes pour démarrer le projet

1. **Clonez le dépôt** :
   Ouvrez votre terminal et exécutez les commandes suivantes pour cloner le dépôt et naviguer dans le dossier du projet :
   ```bash
   git clone https://github.com/MohamedBelannab/test_tech_app.git
   ```
   ```bash
   cd test_technique
   ```
 2. **Installer les dépendances** :
    Exécutez les commandes suivantes pour installer les dépendances côté frontend et backend. :
     ```bash
     npm install
     ```
 3. **Démarrer l'application** :
    Dans le dossier , lancez l'application . :
     ```bash
     npm run dev
     ```
  4. **Accéder à l'application** :
     - **Le frontend sera accessible à** : http://localhost:5173.
     - **Le backend sera accessible à** : http://localhost:5000.
# Instructions pour visualiser les designs

Les designs de l'application sont basés sur des composants construits avec **Tailwind CSS** et **Material Design**, grâce à la bibliothèque [@material-tailwind/react](https://github.com/creativetimofficial/material-tailwind). Vous pouvez explorer les différentes pages et composants de l'application dans le répertoire `test_technique/src`, où se trouvent les composants React.

Les icônes sont intégrées avec [@heroicons/react](https://heroicons.com/), qui fournit une large collection d'icônes adaptées à l'interface utilisateur.

---

# Fonctionnement de l'application

L'application est composée de deux parties principales :

## Frontend (React)
- **React Router** : Utilisé pour gérer la navigation entre les pages de l'application.
- **Redux** : Utilisé pour la gestion de l'état de l'application. Le projet utilise [Redux Toolkit](https://redux-toolkit.js.org/) pour simplifier la gestion des actions et des reducers.

## Backend (Express.js)
- Fournit des **API RESTful** pour la gestion des données.
- Le backend est configuré pour accepter des requêtes depuis le frontend avec la prise en charge de **CORS** pour permettre les échanges entre domaines.

---
# Observations sur le processus de développement

- **Vite** a été utilisé pour le développement, ce qui permet des temps de démarrage rapides et un rafraîchissement instantané des modules.
- **Framer Motion** a été intégré pour des animations modernes et interactives dans l'interface utilisateur.
- Le projet suit les bonnes pratiques de gestion d'état avec **Redux Toolkit**, qui simplifie la gestion des actions et des reducers.
- Le backend utilise **Express.js** avec CORS activé pour autoriser les requêtes du frontend exécuté dans un environnement différent.

---

# Déploiement

Pour déployer l'application, vous pouvez configurer un environnement de production pour le **frontend** et le **backend** sur **Netlify**. Le backend utilise **Express.js** et est déployé comme une fonction serverless ou via un serveur Express sur Netlify. Le frontend est déployé directement sur Netlify en utilisant React.

