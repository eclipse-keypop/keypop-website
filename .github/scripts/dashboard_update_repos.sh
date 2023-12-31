#!/bin/sh

token=$1

echo "Create dashboard data directory..."
mkdir dashboard/

echo "{ \"datetime\":\"`date --utc --iso-8601=seconds`\"}" > dashboard/datetime.json

keypop-reader-java-api
keypop-card-java-api
keypop-calypso-card-java-api
keypop-calypso-crypto-legacysam-java-api
keypop-calypso-crypto-symmetric-java-api
keypop-calypso-crypto-asymmetric-java-api

echo "[" >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-reader-java-api main true true
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-card-java-api main true true
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-card-java-api main true true
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-crypto-legacysam-java-api main true true
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-crypto-symmetric-java-api main true true
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-crypto-asymmetric-java-api main true true
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-website main false false
echo "" >> dashboard/repository_list.json
echo "]" >> dashboard/repository_list.json