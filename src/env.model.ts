export interface Env {
  DB_HOST: string;
  DB_PORT: number;
  DB_USERNAME: string;
  DB_PASSWORD: string;
  DB_NAME: string;
  JWT_SECRET: string;
}
/* Define la estructura de la variable de entorno,
para que si no la sigue, saque un error */
