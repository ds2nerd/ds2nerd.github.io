# 골드넥스 커머스 솔루션 — 공식 사이트

GOLDENAX 그룹의 커머스 운영 솔루션 라인업 공식 사이트입니다.  
**Astro + Tailwind CSS** 기반 정적 사이트로, GitHub Pages에 자동 배포됩니다.

```
입점부터 매출까지, 이커머스의 모든 문제, 한 곳에서.
```

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

## 📂 페이지 구조 (10페이지)

| URL | 페이지 | 역할 |
|------|------|------|
| `/` | HOME | 후킹 + 진단 진입 + 신뢰 지표 |
| `/solution/` | SOLUTION | 6대 모듈 × 10매체 × 4옵션 풀스택 |
| `/who/` | WHO IT'S FOR | **4유형 인터랙티브 진단 위젯** |
| `/pricing/` | PRICING | 4옵션 비교 + 의사결정 가이드 |
| `/media/` | MEDIA | 10종 매체 라인업 + KPI |
| `/cases/` | CASES | 사례 리스트 |
| `/process/` | PROCESS | 5단계 운영 프로세스 |
| `/about/` | ABOUT | 회사 소개 |
| `/blog/` | BLOG | 인사이트 (발행 예정) |
| `/contact/` | CONTACT | **상담 신청 폼 + FAQ 10개** |

---

## 🌐 GitHub Pages 배포

### 1. 저장소 생성 후 푸시

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<USERNAME>/<REPO>.git
git push -u origin main
```

### 2. GitHub Pages 활성화

저장소 → **Settings → Pages**:
- Source: **GitHub Actions** 선택

`.github/workflows/deploy.yml` 워크플로우가 자동 실행되어 배포합니다.

### 3. `astro.config.mjs` 설정 수정 (중요)

배포 환경에 맞춰 `site`, `base` 값을 수정합니다:

```javascript
// 케이스 A: <USERNAME>.github.io/<REPO> 로 배포 시
site: 'https://<USERNAME>.github.io',
base: '/<REPO>',

// 케이스 B: 커스텀 도메인 (예: goldenax.co.kr) 사용 시
site: 'https://goldenax.co.kr',
base: '/',

// 케이스 C: <USERNAME>.github.io (메인 저장소) 사용 시
site: 'https://<USERNAME>.github.io',
base: '/',
```

### 4. 커스텀 도메인 (선택)

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

- **한글**: Noto Sans KR (400 / 700 / 900) — Google Fonts CDN 임포트
- **영문/숫자**: Noto Sans (강조 자간 +0.08em)

---

## ⚙️ 기술 스택

| 영역 | 사용 기술 |
|------|------|
| 빌드 | Astro 6.3.5 (정적 사이트 생성기) |
| 스타일 | Tailwind CSS 3.4 |
| 폰트 | Noto Sans KR + Noto Sans (Google Fonts) |
| 인터랙티브 | 진단 위젯 (Vanilla JS), FAQ 아코디언 (HTML `<details>`) |
| SEO | Schema.org Organization 자동 삽입 |
| 배포 | GitHub Actions + GitHub Pages |

---

## 📝 콘텐츠 수정 가이드

### 페이지별 카피 수정

각 페이지는 `src/pages/<페이지명>/index.astro` 파일 상단의 `---` 영역에 데이터가 모여 있습니다.  
예: 사례 5개 수정 → `src/pages/cases/index.astro` 의 `const cases = [...]` 배열 편집.

### 새로운 사례 추가

`src/pages/cases/index.astro` 에 객체 1개 추가:

```javascript
{
  slug: "brand-name",
  brand: "브랜드명",
  category: "카테고리",
  tagline: "한 줄 요약",
  modules: ["적용 모듈"],
  summary: "사례 요약 텍스트",
  result: "결과 수치",
}
```

### 폼 연동

`/contact/` 페이지의 폼은 데모입니다.  
실서비스 운영 시 [Formspree](https://formspree.io) · [Web3Forms](https://web3forms.com) · [Netlify Forms](https://www.netlify.com/products/forms/) 중 선택해 연동하세요.

`<form>` 태그에 `action` 속성만 추가하면 됩니다:

```html
<form action="https://formspree.io/f/<your-id>" method="POST">
```

---

## 📞 Contact

- 회사 : 골드넥스 커머스 솔루션 (GOLDENAX 그룹)
- 이메일 : XXX@goldenax.co.kr

---

© 2026 GOLDENAX Co., Ltd. All rights reserved.
