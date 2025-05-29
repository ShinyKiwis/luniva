import { defineConfig } from 'vite';
import ViteRails from 'vite-plugin-rails';
import Vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const plugins = [ViteRails(), Vue(), tailwindcss()];

export default defineConfig({
  root: 'app/frontend',
  plugins: plugins
})
