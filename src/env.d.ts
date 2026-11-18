interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  /**
   * Built-in environment variable.
   * @see Docs https://github.com/chihab/ngx-env#ng_app_env.
   */
  readonly NG_APP_ENV: string;
  /** Contentful space id. */
  readonly NG_APP_SPACE?: string;
  /** Contentful environment, 'master' when unset. */
  readonly NG_APP_ENVIRONMENT?: string;
  /** Contentful content delivery API token. */
  readonly NG_APP_ACCESS_TOKEN?: string;
}
