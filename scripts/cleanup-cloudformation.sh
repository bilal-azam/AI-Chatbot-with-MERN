#!/bin/bash
# scripts/cleanup-cloudformation.sh

# Delete old CloudFormation stacks
aws cloudformation delete-stack --stack-name my-old-stack