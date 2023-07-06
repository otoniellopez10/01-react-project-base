/// <reference types="vite/client" />
declare module 'deck.gl';

interface ImportMetaEnv {
  readonly VITE_HOST_API: string;
  // más variables de entorno...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
