const _contentfulConfig = {
  space: process.env["SPACE"],
  environment: process.env["ENVIRONMENT"], // defaults to 'master' if not set
  accessToken: process.env["ACCESS_TOKEN"]
}

export const environment = {
  production: true,
  contentfulConfig: _contentfulConfig,
};
