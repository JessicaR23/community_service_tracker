-- ============================================================
-- schema.sql
-- This file defines the database table for community service records.
-- It runs automatically when the server starts.
-- ============================================================

CREATE TABLE IF NOT EXISTS service_records (
  id          SERIAL PRIMARY KEY,
  student_name TEXT NOT NULL,
  student_id   TEXT NOT NULL,
  activity_date DATE NOT NULL,


 
CREATE TABLE IF NOT EXISTS service_records (
    id SERIAL PRIMARY KEY,
    student_name TEXT NOT NULL,
    student_id TEXT NOT NULL,
    activity_date DATE NOT NULL,
    hours NUMERIC(5,2) NOT NULL, -- ✏️ Added missing column
    recipient TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);  


hours NUMERIC(5,2) NOT NULL,
  recipient    TEXT NOT NULL,
  created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
