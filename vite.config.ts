
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import process from 'node:process';

export default defineConfig(({ mode }) => {
  // Carrega as variáveis do arquivo .env presente na raiz do projeto
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    define: {
      // Injeta a API_KEY no código. O código fonte usa apenas process.env.API_KEY.
      // Prioriza os nomes sugeridos pelo usuário para maior segurança e padronização.
      'process.env.API_KEY': JSON.stringify(
        env.GOOGLE_API_KEY || 
        env.GEMINI_API_KEY || 
        env.API_KEY || 
        env.VITE_API_KEY || 
        ''
      )
    },
    build: {
      outDir: 'dist',
      sourcemap: false
    },
    server: {
      host: true,
      port: 5173
    }
  };
});
