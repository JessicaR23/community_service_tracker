// ============================================================
// models/serviceModel.js
// This file contains the functions that read and write
// community service records to the database.
// ============================================================
//
// ✏️  TASK (COMMENT): Each function below has a comment placeholder.
//     Replace each placeholder with a real comment that explains:
//       1. What the function does
//       2. What parameters it takes (if any)
//       3. What it returns
//
// ============================================================

const db = require('../db');

// COMMENT FOR getAllRecords: // Retrieves all community service records from the database, ordered by activity date from newest to oldest.
// Returns an array of record objects.
const getAllRecords = async () => {
  const res = await db.query(
    'SELECT * FROM service_records ORDER BY activity_date DESC'
  );
  return res.rows;
};

// COMMENT FOR addRecord: // Adds a new community service record to the database.
// Takes student_name (string), student_id (string/int), activity_date (date), hours (float), and recipient (string) as parameters.
// Returns the newly created record object.
const addRecord = async (student_name, student_id, activity_date, hours, recipient) => {
  const res = await db.query(
    `INSERT INTO service_records
       (student_name, student_id, activity_date, hours, recipient)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [student_name, student_id, activity_date, hours, recipient]
  );
  return res.rows[0];
};

// COMMENT FOR getHoursByStudent: // Calculates the total community service hours aggregated by each student.
// Takes no parameters.
// Returns an array of objects containing student_name, student_id, and total_hours, sorted alphabetically by student name.
const getHoursByStudent = async () => {
  const res = await db.query(
    `SELECT student_name, student_id, SUM(hours) AS total_hours
     FROM service_records
     GROUP BY student_name, student_id
     ORDER BY student_name ASC`
  );
  return res.rows;
};

module.exports = { getAllRecords, addRecord, getHoursByStudent };
