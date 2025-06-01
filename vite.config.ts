import { defineConfig } from 'vite';
import ViteRails from 'vite-plugin-rails';
import Vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

const plugins = [ViteRails(), Vue(), tailwindcss()];

export default defineConfig({
  root: 'app/frontend',
  plugins: plugins,
  resolve: {
    alias: {
      dashboard: path.resolve('./app/frontend/javascript/dashboard'),
      gcomponents: path.resolve('./app/frontend/javascript/components'),
      layouts: path.resolve('./app/frontend/javascript/layouts')
    }
  }
})
