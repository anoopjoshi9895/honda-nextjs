/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");
const path = require("path");
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      "alg-honda-staging-s3.s3.eu-central-1.amazonaws.com",
      "alghanim-cheverolet-dev-s3.s3.eu-west-2.amazonaws.com",
    ],
  },
  i18n,
};
