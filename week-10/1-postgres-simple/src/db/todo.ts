import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        // Use parameterized query to prevent SQL injection
        const insertQuery = "INSERT INTO todos (user_id, title, description) VALUES ($1, $2, $3) RETURNING *";
        const values = [userId, title, description];
        const res = await client.query(insertQuery, values);
        return res.rows[0]; // Return the user data
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
      }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const query = 'UPDATE todos SET done = ($1) WHERE id = ($2) RETURNING *';
        const values = [true,todoId];
        const result = await client.query(query, values);
        
        if (result.rows.length > 0) {
          console.log('todos found:', result.rows[0]); // Output user data
          return result.rows[0]; // Return the user data
        } else {
          console.log('No user found with the given email.');
          return null; // Return null if no user was found
        }
      } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
      } finally {
      }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        const query = 'SELECT * FROM todos WHERE user_id = $1';
        const values = [userId];
        const result = await client.query(query, values);
        
        if (result.rows.length > 0) {
          console.log('todos found:', result.rows[0]); // Output user data
            return result.rows;
        } else {
          console.log('No user found with the given email.');
          return null; // Return null if no user was found
        }
      } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
      } finally {
      }
}