-- Create an ENUM type for the task status.
-- This limits the possible values to 'TODO', 'IN PROGRESS', and 'COMPLETED'.
CREATE TYPE task_status AS ENUM ('TODO', 'IN PROGRESS', 'COMPLETED');

-- Create the 'tasks' table.
-- This table will store the task information, including task details and its status.

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  deadline DATE NOT NULL,
  status task_status DEFAULT 'TODO',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  
);
