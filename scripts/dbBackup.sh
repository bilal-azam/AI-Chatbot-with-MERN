#!/bin/bash
# scripts/dbBackup.sh

TIMESTAMP=$(date +"%F")
BACKUP_DIR="backups"
MONGO_URI="mongodb://localhost:27017/your_db"

mkdir -p $BACKUP_DIR
mongodump --uri=$MONGO_URI --out=$BACKUP_DIR/backup_$TIMESTAMP