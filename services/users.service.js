const db = require("../config/db.config");

/**
 * create users   
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.register = (data, callback) => {
  db.query(
    `INSERT INTO users ( userName, password, fname, lname) VALUES (?,?,?,?)`,
    [data.userName, data.password, data.fname, data.lname],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        return callback(error);
      }
      return callback(null, `register successfully`);
    }
  );
};

/**
 * login user   
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.login = (data, callback) => {
  db.query(
    `SELECT id,userName,password FROM users WHERE userName = ? AND password = ?`,
    [data.userName, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.length > 0) {
        return callback(null, results);
      } else {
        return callback("Invalid credentials");
      }
    }
  );
};

/**
 * get toDo list   
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.getTodoList = (data, callback) => {
  db.query(
    `SELECT * FROM toDo WHERE active = 1`,
    [],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

/**
 * create toDo task   
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.createTodo = (data, callback) => {
  db.query(
    `INSERT INTO toDo ( userId, toDoTitle, description) VALUES (?,?,?)`,
    [data.userId, data.toDoTitle, data.description, data.createdOn],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        return callback(error);
      }
      return callback(null, `Todo is created successfully`);
    }
  );
};

/**
 * update toDo task   
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.updateTodo = (data, callback) => {
  db.query(
    `Update  toDo SET toDoTitle = ?, description = ? WHERE id = ?`,
    [data.userId,data.toDoTitle,data.description,data.TodoId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, `updated successfully`);
    }
  );
};


/**
 * Mark as toDo task complete  
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.markTodoDone = (data, callback) => {
  db.query(
    `Update toDo SET isComplete = ? WHERE id = ?`,
    [data.isComplete,data.TodoId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, `updated successfully`);
    }
  );
};


/**
 * todo delete   
 * @author fcrohitpawar@gmail.com 
 * @date 15-05-2022
 */

exports.deleteTodo = (data, callback) => {
  db.query(
    `DELETE FROM toDo where id = ?`,
    [data.productId],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        return callback(error);
      }
      return callback(null, `product created`);
    }
  );
};