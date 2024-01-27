// scripts/dbMigrate.js
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const MONGO_URI = 'mongodb://localhost:27017/your_db';
const MIGRATIONS_DIR = path.join(__dirname, '../migrations');

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        fs.readdir(MIGRATIONS_DIR, (err, files) => {
            if (err) throw err;

            files.forEach(file => {
                const migration = require(path.join(MIGRATIONS_DIR, file));
                migration.up().catch(err => console.error('Migration failed:', err));
            });
        });
    })
    .catch(err => console.error('Failed to connect to MongoDB:', err));