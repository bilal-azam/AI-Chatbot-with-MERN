#!/bin/bash
# scripts/coverage-report.sh

npm run test -- --coverage
echo "Coverage report generated in coverage/ directory"