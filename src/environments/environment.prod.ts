const _contentfulConfig = {
  space: process.env["SPACE"],
  environment: process.env["ENVIRONMENT"],
  accessToken: process.env["ACCESS_TOKEN"]
}

export const environment = {
  production: false,
  contentfulConfig: _contentfulConfig,
};
