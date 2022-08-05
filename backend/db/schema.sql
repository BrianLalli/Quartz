DROP DATABASE IF EXISTS projects_db;
CREATE DATABASE projects_db;

USE projects_db;

CREATE TABLE projects (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  project_name VARCHAR(100) NOT NULL
);

CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    -- project_id INT,
    review TEXT NOT NULL,
    FOREIGN KEY (project_id)
    REFERENCES projects(id)
    ON DELETE SET NULL
);