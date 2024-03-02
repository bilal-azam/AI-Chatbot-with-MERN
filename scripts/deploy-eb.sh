#!/bin/bash
# scripts/deploy-eb.sh

aws elasticbeanstalk create-application-version     --application-name my-app     --version-label v1.0.0     --source-bundle S3Bucket=my-bucket,S3Key=my-app-v1.0.0.zip

aws elasticbeanstalk update-environment     --application-name my-app     --environment-name my-app-env     --version-label v1.0.0