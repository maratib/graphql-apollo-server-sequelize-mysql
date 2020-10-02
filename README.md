# GraphQL, Apollo-Server, Sequelize and MySQL CRUD Starter

This is Apollo Server Sequelize and MySQL starter project 
### Installation
```bash

yarn 

yarn dev

sequelize db:migrate
```
Queries and mutations
```javascript
//To Create user
mutation {
  createUser(name: "Bob", 
  email: "bob@mail.com", 
  password:"1234") {
    id
    name
    email
    password
  }
}

//To Create Recipe
mutation {
   createRecipe(
    userId: 1
    title: "Sample 1"
    ingredients: "Salt, Pepper"
    direction: "Add salt, Add pepper"
  ) {
    id
    title
    ingredients
    direction
    user {
      id
      name
      email
    }
  }
}

//To get a User with the list of recipes
{
  user(id: 1) {
    recipes {
      id
      title
      ingredients
      direction
      
    }
    
  }
}

//To get all Recipes
{
  allRecipes {
    id
    title
    ingredients
    direction
    user {
      id
      name
      email
      password
    }
    
  }
}

```