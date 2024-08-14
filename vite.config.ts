import { defineConfig } from 'vite';

export default defineConfig({
  base: '/ts-hw-05.1/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        page1: 'src/html/task-01.html',
        page2: 'src/html/task-02.html',
        page3: 'src/html/task-03.html',
        page4: 'src/html/task-04.html',
        page5: 'src/html/task-05.html',
        page6: 'src/html/task-06.html',
        page7: 'src/html/task-07.html',
        page8: 'src/html/task-08.html',
        page9: 'src/html/task-09.html',
        page10: 'src/html/task-10.html',
      },
    },
  },
});
