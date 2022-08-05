-- Drops the projects_db if it exists currently --
DROP DATABASE IF EXISTS projects_db;
-- Creates the projects_db database --
CREATE DATABASE projects_db;
-- use projects_db database --
USE projects_db;

-- Creates the table "projects" within projects_db --
CREATE TABLE projects (
    -- Creates a numeric column called "id" --
  -- id INT NOT NULL
    -- Makes a string column called "name" which cannot contain null --
  project_name VARCHAR(100) NOT NULL,
  -- project_description TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  -- date_updated DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
  PRIMARY KEY (id)
);


-- Creates the table "users" within projects_db --
CREATE TABLE users (
      -- Creates a numeric column called "id" --
  -- id INT
      -- Makes a string column called "name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  loggedIn BOOLEAN NOT NULL,
  platinum_member BOOLEAN NOT NULL
  FOREIGN KEY (project_id)
  REFERENCES projects(id)
  ON DELETE SET NULL
);



