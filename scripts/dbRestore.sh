#!/bin/bash
# scripts/dbRestore.sh

RESTORE_DIR="backups"
MONGO_URI="mongodb://localhost:27017/your_db"
LATEST_BACKUP=$(ls -dt $RESTORE_DIR/backup_* | head -1)

mongorestore --uri=$MONGO_URI $LATEST_BACKUP