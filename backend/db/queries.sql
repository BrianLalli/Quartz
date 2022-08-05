SELECT *
FROM project_names;

SELECT department, COUNT(id) AS number_courses
FROM course_names
GROUP BY department;

SELECT department, SUM(total_enrolled) AS sum_enrolled
FROM course_names
GROUP BY department;


SELECT projects.project_name AS project, reviews.review
FROM reviews
LEFT JOIN projects
ON reviews.project_id = projects.id
ORDER BY projects.project_name;