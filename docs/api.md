# Documentation de l'API

### BaseUrl : `http://aqueous-meadow-07678.herokuapp.com/api`

| Numero | Endpoint | Méthode HTTP | Donnée(s) à transmettre | Description |
|--|--|--|--|--|
| 1 | `/properties` | GET | **params** : page, limit | Récupération la liste de tous les biens |
| 2 | `/properties/vip` | GET | **params** : limit | Récupération de tous les biens sponsorisés |
| 3 | `/property/[slug]` | GET | - | Récupération de chaque bien par son slug |
| 4 | `/properties/related/[id]` | GET | - | Récupération de tous les biens d'une même catégorie via l'id |
| 5 | `/property/list/search` | POST | **body** : `{ filters: { title, categories }}` | Implémentation de la fonction de recherche |
| 6 | `/login` | POST | **body** : `{ username, password }` | Authentification de l'utilisateur |
| 7 | `/user/[id]` | GET | - | Récupération du profil de l'utilisateur |
