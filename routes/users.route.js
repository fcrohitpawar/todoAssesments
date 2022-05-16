const usersController = require("../controllers/users.controller");

var express = require("express");

const { route } = require("express/lib/application");

var router = new express.Router();

const { checkToken } = require("../auth/token_validation"); 

const { Route } = require("express");

router.post("/register", usersController.register);
/**
 * @swagger
 * /users/register:
 *   post:
 *      description: Used to register user
 *      tags:
 *          - Users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - userName
 *                 - password
 *                 - role
 *              properties:
 *                  userName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: user@gmail.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Asse$sment
 *                  fname:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 60
 *                      example: Rohit
 *                  lname:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 60
 *                      example: Pawar
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

router.post("/login", usersController.login);
/**
 * @swagger
 * /users/login:
 *   post:
 *      description: Used to login user
 *      tags:
 *          - Users
 *      parameters:
 *          - in: body
 *            name: User
 *            description: User data
 *            schema:
 *              type: object
 *              required:
 *                 - userName
 *                 - password
 *              properties:
 *                  userName:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 100
 *                      example: user@gmail.com
 *                  password:
 *                      type: string
 *                      minLength: 1
 *                      maxLength: 45
 *                      example: Asse$sment
 *      responses:
 *          '200':
 *              description: Resource added successfully
 *          '500':
 *              description: Internal server error
 *          '400':
 *              description: Bad request
 */

 router.get("/getTodoList", checkToken, usersController.getTodoList);
 /**
  * @swagger
  * /users/getTodoList:
  *   get:
  *      description: Used to get Todo list
  *      tags:
  *          - Todo
  *      parameters:
  *          - in: header
  *            name: User
  *            description: Todo
  *            schema:
  *              type: object
  *              required:
  *              properties:
  *      responses:
  *          '200':
  *              description: Resource added successfully
  *          '500':
  *              description: Internal server error
  *          '400':
  *              description: Bad request
  */

  router.post("/createTodo", checkToken, usersController.createTodo);
  /**
   * @swagger
   * /users/createTodo:
   *   post:
   *      description: Used to create todo
   *      tags:
   *          - Todo
   *      parameters:
   *          - in: body
   *            name: User
   *            description: create todo 
   *            schema:
   *              type: object
   *              required:
   *                 - userId
   *                 - toDoTitle
   *                 - description
   *              properties:
   *                  userId:
   *                      type: string
   *                      minLength: 1
   *                      maxLength: 45
   *                      example: 1
   *                  toDoTitle:
   *                      type: string
   *                      minLength: 1
   *                      maxLength: 45
   *                      example: to do title
   *                  description:
   *                      type: string
   *                      minLength: 1
   *                      maxLength: 45
   *                      example: to do description
   *      responses:
   *          '200':
   *              description: Resource added successfully
   *          '500':
   *              description: Internal server error
   *          '400':
   *              description: Bad request
   */

   router.put("/updateTodo", checkToken, usersController.updateTodo);
   /**
    * @swagger
    * /users/updateTodo:
    *   put:
    *      description: Used to update todo
    *      tags:
    *          - Todo
    *      parameters:
    *          - in: body
    *            name: Todo
    *            description: Todo data
    *            schema:
    *              type: object
    *              required:
    *                 - TodoId
    *                 - toDoTitle
    *                 - description
    *              properties:
    *                  TodoId:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: 1
    *                  userId:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: 1
    *                  toDoTitle:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: update title
    *                  description:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: Update description
    *      responses:
    *          '200':
    *              description: Resource updated successfully
    *          '500':
    *              description: Internal server error
    *          '400':
    *              description: Bad request
    */
 
    router.put("/markTodoDone", checkToken, usersController.markTodoDone);
    /**
     * @swagger
     * /users/markTodoDone:
     *   put:
     *      description: todo task complete or not
     *      tags:
     *          - Todo
     *      parameters:
     *          - in: body
     *            name: todo
     *            description: todo request as a complete
     *            schema:
     *              type: object
     *              required:
     *                 - TodoId
     *                 - isComplete
     *              properties:
     *                  TodoId:
     *                      type: string
     *                      minLength: 1
     *                      maxLength: 45
     *                      example: 1
     *                  isComplete:
     *                      type: string
     *                      minLength: 1
     *                      maxLength: 45
     *                      example: 1
     *      responses:
     *          '200':
     *              description: Resource update successfully
     *          '500':
     *              description: Internal server error
     *          '400':
     *              description: Bad request
     */
 
    
   router.post("/deleteTodo", checkToken, usersController.deleteTodo);
   /**
    * @swagger
    * /users/deleteTodo:
    *   post:
    *      description: Delete todo
    *      tags:
    *          - Todo
    *      parameters:
    *          - in: body
    *            name: todo
    *            description: todo delete 
    *            schema:
    *              type: object
    *              required:
    *                 - toDoId
    *              properties:
    *                  toDoId:
    *                      type: string
    *                      minLength: 1
    *                      maxLength: 45
    *                      example: 1
    *      responses:
    *          '200':
    *              description: Resource added successfully
    *          '500':
    *              description: Internal server error
    *          '400':
    *              description: Bad request
    */
 
module.exports = router;

