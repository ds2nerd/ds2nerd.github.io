import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// 사용자 GitHub Pages 배포 시 site, base 값을 본인 저장소에 맞춰 수정
// 예: site: 'https://username.github.io', base: '/goldenax-commerce'
// 커스텀 도메인 사용 시: site: 'https://goldenax.co.kr', base: '/'
export default defineConfig({
  site: "https://goldenax.github.io",
  base: "/",
  output: "static",
  integrations: [tailwind()],
  build: {
    format: "directory",
  },
});
