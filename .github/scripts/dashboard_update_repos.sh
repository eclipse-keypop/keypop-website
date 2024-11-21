#!/bin/sh

token=$1

echo "Create dashboard data directory..."
mkdir dashboard/

echo "{ \"datetime\":\"`date --utc --iso-8601=seconds`\"}" > dashboard/datetime.json

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
../.github/scripts/dashboard_update_repo.sh $token keypop-reader-cpp-api main true false
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-card-cpp-api main true false
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-card-cpp-api main true false
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-crypto-legacysam-cpp-api main true false
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-crypto-symmetric-cpp-api main true false
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-calypso-crypto-asymmetric-cpp-api main true false
echo "," >> dashboard/repository_list.json
../.github/scripts/dashboard_update_repo.sh $token keypop-website main false false
echo "" >> dashboard/repository_list.json
echo "]" >> dashboard/repository_list.json