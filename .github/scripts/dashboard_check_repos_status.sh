#!/bin/sh

# This script check all repositories until an update has been found.
# return 0 if at least one update was made, 1 if no.

token=$1

./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-reader-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-card-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-card-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-crypto-legacysam-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-crypto-symmetric-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-crypto-asymmetric-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-storagecard-java-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-reader-cpp-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-card-cpp-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-card-cpp-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-crypto-legacysam-cpp-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-crypto-symmetric-cpp-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-calypso-crypto-asymmetric-cpp-api
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-website
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-actions
if [ $? -eq 0 ]; then
  exit 0
fi
./.github/scripts/dashboard_check_repos_status_curl.sh $token keypop-api-docs
if [ $? -eq 0 ]; then
  exit 0
fi

exit 1