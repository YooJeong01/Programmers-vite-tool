import { defineConfig } from 'vite';
import { resolve } from "node:path"; 
// node에 path안에 경로 관리하는 함수 resolve 가져오기
// import { path } form "node";로 가져오면
// resolve를 사용할때
// path.resolve 이렇게 써야함
// 귀찮으니까 경로 한 번에 주기~

// __dirname : 전체경로
// resolve 함수는 파라미터 두개의 경로를 합쳐줌

const env = process.env.NODE_ENV;


export default defineConfig({
  build:{
    outDir:'docs'
  },
  server:{
    host: 'localhost',
    port: 3000,
    cors: true
  },
  css:{
    devSourcemap:true,
    modules:{
      generateScopedName: env === 'development' ? "[hash:base64:2]" : "css-[local]-[hash:base64:6]"
    }
  },
  resolve : {
    alias:{ '@' : resolve(__dirname,'src') }
  }
})