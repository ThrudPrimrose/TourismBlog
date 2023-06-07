const _contentfulConfig = {
  space: process.env["NG_APP_SPACE"],
  environment: process.env["NG_APP_ENVIRONMENT"], // defaults to 'master' if not set
  accessToken: process.env["NG_APP_ACCESS_TOKEN"]
}

export const environment = {
  production: false,
  contentfulConfig: _contentfulConfig,
};
