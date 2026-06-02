// ============================================================
// db/index.js
// This file sets up the connection to the PostgreSQL database.
// ============================================================
//
// ✏️  TASK (COMMENT): 
//     explaining what that line or block of code does.
//     Your comments should be in your own words.
//     You will NOT change any of the actual code — only add comments.
//
// ============================================================

// SECTION 1 — Import the necessary modules (the node-postgres driver, file system, and path utilities) and load environment variables from the .env file.
const { Pool } = require("pg");
const fs = require("fs");
const path = require("path");
require("dotenv").config();

// SECTION 2 — Create a new connection pool using the `pg` package. It uses the connection string from your environment variables and configures it to allow secure (SSL) connections without certificate verification.
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

// SECTION 3 — it constructs the absolute file path to the "schema.sql" file and read its contents as a UTF-8 encoded string.
const schemaPath = path.join(__dirname, "schema.sql");
const schema = fs.readFileSync(schemaPath, "utf8");

// SECTION 4 — execute an asynchronous function that attempts to run the SQL statements from your schema file using the database pool. It logs a success message if the tables are successfully created or an error if it fails.
(async () => {
  try {
    await pool.query(schema);
    console.log("✅ Tables ensured from schema.sql");
  } catch (err) {
    console.error("❌ Failed to run schema.sql:", err);
  }
})();

// SECTION 5 — Export the database pool instance so that it can be imported and used by other parts of your application to execute database queries.
module.exports = pool;
module.exports = pool;
