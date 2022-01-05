# CREATION D'un SERVER EN LOCAL

- creer un dossier
- creer index.js
- terminal taper npm init -y (initialise une gestion de npm. concretement cela cree un fichier package.json. Sans cette initialisation, npm install ne fonctionnerait pas. similaire à git init quand on veut gerer du git)
  le -y automatise plein de reponses
- npm install express
- copier coller le code de base sur https://github.com/expressjs/express/blob/master/Readme.md (ou voir sur leur page npm)
- lancer l’appli avec node index.js
- on a maintenant lancé un serveur, qu’on peut appeler depuis notre navigateur avec
  localhost/3000 (ou le numero du port que vous avez ecrit)

  # GIT / GIHUB

- terminal : initialiser un git avec
  git init
- creation d’un fichier .gitignore pour eviter d’envoyer les node modules
- git add / git commit / creer un repo github / brancher le local avec le remote avec la commande “remote add origin reposurgithub”

# VARIABLE D'ENVIRONNEMENT

- npm install dotenv (on installe le package qui permet de recuperer des variables d'environnement)
- creer le fichier .env et ecrire PORT=3000 (ou ce que vous voulez). Heroku mettra son propre port

# HEROKU

- creer la correspondance de npm start dans le fichier package.json :
  "scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start":"node index.js"
  },
  taper "npm start" correspond donc a taper "node index.js" c'est a dire lancer node sur index.js
- new / create new app
- name / region / create app
- Deployment method => connecter a github
- clicker sur le bouton enable automatic deploy
