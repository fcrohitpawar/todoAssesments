# assessment
Nodejs rest API

Databases: users,toDo

Step 1 : Database Setup mysql 

	CREATE DATABASE assessment;

	CREATE TABLE `assessment`.`users` ( 
	 `id` INT NOT NULL AUTO_INCREMENT ,
	 `userName` VARCHAR(60) NOT NULL UNIQUE, 
	 `password` VARCHAR(60) NOT NULL ,
	 `fname` VARCHAR(60) NOT NULL,
	 `lname` VARCHAR(60) NOT NULL,
	  PRIMARY KEY (`id`)
	) ENGINE = InnoDB;

	CREATE TABLE `assessment`.`toDo` (
	 `id` INT NOT NULL AUTO_INCREMENT ,
	 `userId` INT NOT NULL ,
	 `toDoTitle` VARCHAR(50) NOT NULL,
	 `description` VARCHAR(100) NOT NULL,
	 `imageThumbnail` VARCHAR(50),
	 `createdOn` datetime DEFAULT CURRENT_TIMESTAMP,
	 `isComplete` tinyint(1) DEFAULT 0,
	 `active` tinyint(1) DEFAULT 1,
	 PRIMARY KEY (`id`),
	 CONSTRAINT fk_user FOREIGN KEY (userId) REFERENCES users(ID) ON DELETE CASCADE
	) ENGINE = InnoDB;	

Step 2 : update below db connection details 
        /config/db.config.js
	
	    port:3306,
	    host:"",
	    user:"",
	    password:"",
	    database:"assignment"


Step 3 : Run on cmd : npm install

Step 4 : Run on cmd : npm start

Step 5 : check on below url (Here i have added swagger ui for rest api call)
	
       http://localhost:8080/api-docs/

Step 6 : create one user 
Step 7 : login user once login it will return token in login API response get that token and click on Authorize button put token as a value and click on Authorize button and then you can access all api 

Note : Ex. Bearer <token>





 
