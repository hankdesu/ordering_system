interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly DATABASE_HOST: string;
      readonly DATABASE_PORT: number;
      readonly DATABASE_USER: string;
      readonly DATABASE_PASSWORD: string;
      readonly DATABASE_DATABASE: string;
      readonly NODE_ENV: 'development' | 'production' | 'test';
    }
  }
}

export {};
