-- Create ENUM type for task status
CREATE TYPE task_status AS ENUM ('TODO', 'IN PROGRESS', 'COMPLETED');

-- Create 'tasks' table, where user_id can be NULL
CREATE TABLE IF NOT EXISTS tasks (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  deadline DATE NOT NULL,
  status task_status DEFAULT 'TODO',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data, where user_id is not specified
INSERT INTO tasks (title, description, deadline, status)
VALUES
('Sample Task 1', 'Description for task 1', '2025-12-31 23:59:59', 'TODO'),
('Sample Task 2', 'Description for task 2', '2025-02-04 23:59:59', 'COMPLETED'),
('Sample Task 3', 'Description for task 3', '2025-04-03 23:59:59', 'IN PROGRESS'),
('Sample Task 4', 'Description for task 4', '2025-11-30 23:59:59', 'TODO'),
('Sample Task 5', 'Description for task 5', '2025-08-31 23:59:59', 'TODO'),
('Sample Task 6', 'Description for task 6', '2025-01-31 23:59:59', 'COMPLETED');
