import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig(async ()=>{
  const UnoCss = await import('unocss/vite').then(i => i.default)
  return {
    plugins: [
      uni(),
      // https://github.com/unocss/unocss
      UnoCss(),
    ],
    server: {
      proxy: {
        '/wqjz-api': {
          target: 'http://ng.zhjfd.com',   // 后端 API 地址
          changeOrigin: true,                // 改变请求源，避免 CORS 问题
          secure: false,                     // 如果是https接口，需要配置为false
          rewrite: (path) => path.replace(/^\/wqjz-api/, ''),  // 重写路径，去掉/api前缀
        },
      },
    },
  }
})