# 골드넥스 커머스 솔루션 — 공식 사이트

GOLDENAX 그룹의 커머스 운영 솔루션 라인업 공식 사이트입니다.  
**Astro + Tailwind CSS** 기반 정적 사이트로, GitHub Pages에 자동 배포됩니다.

```
입점부터 매출까지, 이커머스의 모든 문제, 한 곳에서.
```

🌐 **Live**: https://ds2nerd.github.io/

---

## 🚀 빠른 시작

### 1. 의존성 설치

```bash
npm install
```

### 2. 로컬 개발 서버

```bash
npm run dev
```

→ http://localhost:4321 에서 미리보기

### 3. 빌드

```bash
npm run build
```

→ `dist/` 폴더에 정적 파일 생성

### 4. 빌드 미리보기

```bash
npm run preview
```

---

## 📂 페이지 구조 (총 25페이지)

### 기본 페이지 (9)

| URL | 페이지 | 역할 |
|------|------|------|
| `/` | HOME | 후킹 + 진단 진입 + 신뢰 지표 |
| `/solution/` | SOLUTION | 6대 모듈 × 10매체 × 4옵션 풀스택 |
| `/who/` | WHO IT'S FOR | **4유형 인터랙티브 진단 위젯** |
| `/pricing/` | PRICING | 4옵션 비교 + 의사결정 가이드 |
| `/media/` | MEDIA | 10종 매체 라인업 + KPI |
| `/cases/` | CASES | 사례 리스트 (카테고리 필터) |
| `/process/` | PROCESS | 5단계 운영 프로세스 |
| `/about/` | ABOUT | 회사 소개 |
| `/contact/` | CONTACT | **상담 신청 폼 (Web3Forms) + FAQ 10개** |

### 사례 상세 (5)

| URL | 브랜드 | 카테고리 |
|------|------|------|
| `/cases/bongpo/` | 🍱 봉포머구리집 | F&B |
| `/cases/mrmilk/` | 🥛 미스터밀크 | F&B |
| `/cases/cerabloom/` | 💊 세라블룸 | 건강기능식품 |
| `/cases/richfarm/` | 🌿 마켓리치팜 | 건강기능식품 |
| `/cases/huonsn/` | 🏥 휴온스엔 | 헬스케어 |

### 매체 상세 (10)

**🔴 CONVERSION (6)** — 전환·구매 직결

| URL | 매체 |
|------|------|
| `/media/naver-clip/` | 🎬 네이버 클립 |
| `/media/blog-seeding/` | 📝 블로그 시딩 |
| `/media/momcafe-seeding/` | 👥 맘카페 시딩 |
| `/media/insta-reels/` | 📸 인스타 릴스 10/20 PKG |
| `/media/influencer/` | 🌟 인플루언서 체험단 |
| `/media/live-commerce/` | 🎥 라이브커머스 |

**🔵 ASSET (2)** — 자산 누적

| URL | 매체 |
|------|------|
| `/media/landing-page/` | 🌐 브랜드 랜딩페이지 |
| `/media/namuwiki/` | 📚 나무위키 세팅 |

**🟣 AWARENESS (2)** — 대중 인지

| URL | 매체 |
|------|------|
| `/media/poomang/` | 🎮 푸망 프리미엄 심리테스트 PKG |
| `/media/movie-ads/` | 🎞️ 영화따라가기 광고 (롯데시네마) |

### 약관·정책 (2)

| URL | 페이지 |
|------|------|
| `/privacy/` | 개인정보처리방침 |
| `/terms/` | 이용약관 |

---

## 🌐 GitHub Pages 배포

### 1. GitHub Actions 자동 배포

`main` 브랜치에 푸시되면 `.github/workflows/deploy.yml`이 자동 실행되어 빌드 후 GitHub Pages에 배포합니다. **Node.js 20** 기반.

### 2. `astro.config.mjs` 설정

배포 환경에 맞춰 `site`, `base` 값을 수정합니다:

```javascript
// 케이스 A: <USERNAME>.github.io/<REPO> 로 배포 시
site: 'https://<USERNAME>.github.io',
base: '/<REPO>',

// 케이스 B: 커스텀 도메인 사용 시
site: 'https://<도메인>',
base: '/',

// 케이스 C: <USERNAME>.github.io (메인 저장소) ← 현재 설정
site: 'https://ds2nerd.github.io',
base: '/',
```

### 3. 커스텀 도메인 (선택)

`public/CNAME` 파일 생성 후 도메인 입력:

```
goldenax.co.kr
```

도메인 DNS 설정에서 다음 A 레코드 추가:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

---

## 🎨 디자인 시스템

### 컬러

| 변수 | HEX | 용도 |
|------|------|------|
| `red` | `#E53935` | 메인 강조 (Primary) |
| `red-dark` | `#C62828` | 강조 hover |
| `red-light` | `#FFEBEE` | 배경 박스 |
| `conversion` | `#E53935` | 매체 분류 (전환) |
| `asset` | `#1E88E5` | 매체 분류 (자산) |
| `awareness` | `#8E24AA` | 매체 분류 (인지) |
| `typeA / B / C / D` | 빨강 / 파랑 / 회색 / 보라 | 4유형 색상 |

### 폰트

- **한글**: Noto Sans KR (400 / 500 / 700 / 900) — Google Fonts CDN
- **영문/숫자**: Noto Sans (강조 자간 +0.08em via `.tracking-wide-en`)

### 공통 클래스 (`src/styles/global.css`)

- 카드: `card-hover`, `card-glow`, `card-line-top`
- 버튼: `btn-primary`, `btn-secondary`, `pulse-red`
- 링크: `link-slide`, `arrow-icon`
- 섹션: `section-eyebrow`, `divider-red`, `container-page`
- 애니메이션: `fade-up`, `fade-up-delay-1/2/3`, `slide-down-1~4`
- 아이콘: `icon-circle-red`, `icon-circle-blue`, `icon-circle-purple`

---

## ⚙️ 기술 스택

| 영역 | 사용 기술 |
|------|------|
| 빌드 | **Astro 5.18.1** (정적 사이트 생성기) |
| 스타일 | Tailwind CSS 3.4.17 |
| 폰트 | Noto Sans KR + Noto Sans (Google Fonts) |
| 인터랙티브 | 진단 위젯 (Vanilla JS), 사례 필터, FAQ 아코디언 (HTML `<details>`) |
| SEO | Open Graph + Twitter Card + Schema.org Organization |
| 폼 연동 | **Web3Forms** (Access Key 적용 완료) |
| 배포 | GitHub Actions (Node 20) + GitHub Pages |

---

## 📂 디렉토리 구조

```
src/
├── layouts/
│   └── BaseLayout.astro          ← SEO 메타 + Schema.org + Header/Footer 래핑
├── components/
│   ├── Header.astro              ← 네비 + 모바일 메뉴
│   ├── Footer.astro              ← 사업자 정보 + 사이트맵
│   ├── PageHero.astro            ← 페이지 상단 히어로 (eyebrow + title + sub)
│   └── CtaBlock.astro            ← 하단 CTA 블록 (재사용)
├── styles/
│   └── global.css                ← Tailwind base + 공통 컴포넌트 클래스
└── pages/
    ├── index.astro               ← 메인 (HERO + 8섹션)
    ├── solution/, who/, pricing/, process/
    ├── about/, contact/, privacy/, terms/
    ├── cases/
    │   ├── index.astro           ← 사례 리스트 + 카테고리 필터
    │   └── bongpo/, mrmilk/, cerabloom/, richfarm/, huonsn/
    └── media/
        ├── index.astro           ← 매체 리스트 + 3분류
        ├── naver-clip/, blog-seeding/, momcafe-seeding/, insta-reels/, influencer/, live-commerce/
        ├── landing-page/, namuwiki/
        └── poomang/, movie-ads/

public/
├── favicon.svg
├── goldenax-logo.png
├── og-image.png                  ← Open Graph 이미지 (1200×630)
├── sitemap.xml                   ← 검색 크롤러용
└── robots.txt                    ← 크롤러 정책
```

---

## ⚠ Import 경로 규칙 (중요!)

폴더 깊이에 따라 점(`.`) 개수가 달라집니다:

| 파일 위치 | 올바른 경로 |
|------|------|
| `src/pages/{name}.astro` | `../layouts/BaseLayout.astro` (점 1번) |
| `src/pages/{folder}/index.astro` | `../../layouts/BaseLayout.astro` (점 2번) |
| `src/pages/{folder}/{sub}/index.astro` | `../../../layouts/BaseLayout.astro` (점 3번) |

⚠ 이 규칙을 어기면 빌드 시 `Could not resolve "../../layouts/BaseLayout.astro"` 오류 발생.

---

## 📝 콘텐츠 수정 가이드

### 페이지별 카피 수정

각 페이지는 `src/pages/<페이지명>/index.astro` 파일 상단의 `---` (frontmatter) 영역에 데이터가 모여 있습니다.  
예: 사례 5개 수정 → `src/pages/cases/index.astro`의 `const cases = [...]` 배열 편집.

### 새로운 사례 추가

`src/pages/cases/index.astro` 의 `const cases` 배열에 객체 1개 추가 + `src/pages/cases/{slug}/index.astro` 신규 생성:

```javascript
{
  slug: "brand-name",
  brand: "브랜드명",
  category: "F&B" | "건강기능식품" | "헬스케어",
  emoji: "🍱",
  tagline: "한 줄 요약",
  period: "12개월 운영",
  modules: ["적용 모듈"],
  summary: "사례 요약 텍스트",
  results: [
    { label: "결과 항목", value: "수치" }
  ],
}
```

### 폼 연동

`/contact/` 페이지의 폼은 **Web3Forms**가 이미 연동되어 있습니다 (Access Key 발급 완료).
- 접수 메일 수신처는 Web3Forms 대시보드에서 변경
- 다른 서비스로 변경 시 `<form action="...">` 의 URL과 hidden input의 access_key 교체

---

## 📞 Contact

- **회사**: 골드넥스 커머스 솔루션 (GOLDENAX 그룹)
- **사업자**: 211-88-46910 / 대표: 김성모
- **주소**: 서울 성동구 상원길 62, 6층
- **이메일**: nb@goldenax.co.kr (전화 응대 없음)

---

© 2026 GOLDENAX Co., Ltd. All rights reserved.
