#!/bin/bash

DB_NAME="todo"
DB_USER="postgres"
DB_HOST="db"  # Specifies the database container host

# Schema initialization check
echo "Running schema initialization script..."
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f /docker-entrypoint-initdb.d/schema.sql

# Check if the database exists
echo "Checking if database '$DB_NAME' exists..."
psql -h $DB_HOST -U $DB_USER -tc "SELECT 1 FROM pg_database WHERE datname = '$DB_NAME'" | grep -q 1
if [ $? -eq 0 ]; then
    echo "Database '$DB_NAME' exists."
else
    echo "Database '$DB_NAME' does not exist. Creating database..."
    psql -h $DB_HOST -U $DB_USER -c "CREATE DATABASE $DB_NAME"
    echo "Database created successfully."
fi

# Check if the 'tasks' table exists
echo "Checking if the 'tasks' table exists..."
psql -h $DB_HOST -U $DB_USER -d $DB_NAME -tc "SELECT 1 FROM information_schema.tables WHERE table_name = 'tasks'" | grep -q 1
if [ $? -eq 0 ]; then
    echo "Table 'tasks' already exists."
else
    echo "Table 'tasks' does not exist. Creating table..."
    # Running schema.sql to create the table
    psql -h $DB_HOST -U $DB_USER -d $DB_NAME -f /docker-entrypoint-initdb.d/schema.sql
    echo "Table 'tasks' created successfully."
fi
