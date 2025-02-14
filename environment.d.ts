import Next from 'next';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly BASE_URL_API: string;
    }
  }
}
