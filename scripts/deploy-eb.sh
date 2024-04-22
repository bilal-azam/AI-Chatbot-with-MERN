#!/bin/bash
# scripts/deploy-eb.sh

# Deploy to Elastic Beanstalk
aws elasticbeanstalk create-application-version --application-name my-app --version-label `date +%Y%m%d%H%M%S` --source-bundle S3Bucket=my-app-bucket,S3Key=my-app.zip
aws elasticbeanstalk update-environment --environment-name my-app-env --version-label `date +%Y%m%d%H%M%S`