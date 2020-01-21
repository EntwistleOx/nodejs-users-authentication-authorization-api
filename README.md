# NodeJS API REST with users authentication and authorization

API Rest with authentication and autorization, using NodeJS and Express, Passport and Passport Local Strategy, MySQL and Sequelice ORM.

I was inspired by the caffeinated/shinobi role-based permissions package for Laravel. 

- Every user can have zero or more roles.
- Every role can have zero or more permissions.
- Every role can have one of two special flags: all-access and no-access

## Running

Download or clone the repo, open project's folder and via terminal go to the root of the project and run `|$ npm install` to download the dependencies needed. 

Creaste a database called `api-users`

Then run the migration command:

```
$| npm run migrate:all
```

And this to run seeds:

```
$| npm run seed:all
```  
    
To undo migration and seeds:

```
$| npm run migrate:undo
$| npm run seed:undo
``` 

After that type `$| npm start` to start Express server in localhost:3001.
