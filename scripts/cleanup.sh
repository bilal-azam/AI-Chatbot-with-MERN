#!/bin/bash
# scripts/cleanup.sh

# Remove old Docker images
docker image prune -a -f

# Remove old ECS tasks
aws ecs list-tasks --cluster my-app-cluster | xargs aws ecs delete-task