# 🗓️ Custom Daily Planner

## 프로젝트 개요

Custom Daily Planner는 원하는 기능(일간, 주간, 월간, 투두, 습관, 메모)을 자유롭게 선택하고 배치하여 나만의 플래너를 구성할 수 있는 모듈형 웹 애플리케이션입니다.

## Index

1. [시작하기](#1-시작하기)
2. [개발 환경](#2-개발-환경)
3. [기술 스택](#3-기술-스택)
4. [협업 방법](#4-협업-방법)
5. [브랜치 전략](#5-브랜치-전략)
6. [커밋 컨벤션](#6-커밋-컨벤션)
7. [디렉토리 구조](#7-디렉토리-구조)
8. [화면 Preview](#8-화면-preview)

---

## 1. 시작하기

### Clone & Install

```bash
git clone https://github.com/your-org/custom-daily-planner.git
cd custom-daily-planner

# Node.js 버전 맞추기 (nvm 사용 시)
nvm use

# 패키지 설치
pnpm install
```

### Run

```bash
pnpm dev
```

→ 브라우저에서 `http://localhost:3000` 확인

### Scripts

```bash
pnpm dev     # 개발 서버 실행
pnpm build   # 프로덕션 빌드
pnpm lint    # 린트 검사
pnpm test    # 테스트 실행
```

---

## 2. 개발 환경

<a><img src="https://img.shields.io/badge/Node.js-20.x-339933?style=flat-square&logo=node.js&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/pnpm-8.x-F69220?style=flat-square&logo=pnpm&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white"/></a>

---

## 3. 기술 스택

<a><img src="https://img.shields.io/badge/Next.js-13+-000000?style=flat-square&logo=next.js&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/lucide--react-0A0A0A?style=flat-square&logo=react&logoColor=white"/></a> <br/> <a><img src="https://img.shields.io/badge/Zustand-4433FF?style=flat-square&logo=react&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/TanStack%20Query-FF4154?style=flat-square&logo=reactquery&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat-square&logo=prettier&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/Husky-000000?style=flat-square&logo=git&logoColor=white"/></a> <br/> <a><img src="https://img.shields.io/badge/Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/Playwright-2EAD33?style=flat-square&logo=playwright&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/next--seo-000000?style=flat-square&logo=googlechrome&logoColor=white"/></a> <a><img src="https://img.shields.io/badge/next--sitemap-000000?style=flat-square&logo=sitemap&logoColor=white"/></a>

---

## 4. 협업 방법

### 1. Branching Strategy

기능 개발이 완료되면 해당 Feature 브랜치를 원격 저장소에 푸쉬하고,
PR(Pull Request)을 통해 `main` 브랜치로 병합합니다.
모든 검증(CI 통과, 코드 리뷰, 테스트)이 완료된 이후 `main`에 머지되면 자동으로 배포가 진행됩니다.

## 2. 협업 과정

0. Jira에 작업 목록 작성
   - 해야 할 업무를 Jira 이슈로 등록합니다.
   - 각 이슈에는 명확한 제목, 설명, 우선순위, 담당자를 포함합니다.

0-1. 브랜치 생성 (Jira 연동)

- Jira 이슈에서 ‘브랜치 생성(Create branch)’ 기능을 사용하여 깃허브에 브랜치를 만듭니다.
- 브랜치명은 자동으로 Jira Key가 포함된 형태로 생성됩니다.
  예: Feature/CDP-123-add-login-page

1. Feature 브랜치 생성 및 개발
   - 로컬 환경에서 main 브랜치를 기준으로 Jira에서 생성한 브랜치명 그대로 새 브랜치를 만듭니다.
     ```
     git checkout main
     git pull origin main
     git checkout -b Feature/[Jirakey][브랜치명]
     ```
   * 기능 개발이 끝났다면 반드시 커밋을 완료합니다. (아래 [커밋 컨벤션](#6-커밋-컨벤션)을 꼭 확인해 주세요!)

2. **푸쉬 & PR 생성 (기능 개발 점검용)**
   - 기능 개발이 끝난 Feature 브랜치를 원격 저장소에 푸쉬합니다.

   ```bash
   git push origin Feature/[JiraKey][브랜치명]
   ```

   - Github에서 PR을 생성하고 아래 템플릿을 채워주세요.

```markdown
## 🔍 변경 사항

<!-- 이 PR에서 무엇이 변경되었는지 간략하게 설명해주세요 -->

---

## 📸 스크린샷

<!-- UI 변경사항이 있다면 스크린샷을 첨부해주세요 -->

---

## 🚧 관련 이슈

<!-- 관련 이슈 번호가 있다면 적어주세요 (예: #123 또는 JIRA 키) -->
```

3. **기능 점검**
   - 템플릿에 작성한 내용을 바탕으로 로컬 환경에서 **기능 테스트**를 진행합니다.
   - **기능 테스트**가 끝난 후 아래 템플릿을 이어서 작성합니다.

```markdown
## 🛠️ 최종 배포 점검 리스트

- [ ] 주요 기능 동작 확인
- [ ] 빌드/배포 환경 점검
- [ ] 문서/설정 검토

---

## ✅ 최종 배포 점검 결과

<!-- 점검 결과 및 특이사항을 적어주세요 -->
```

4. **Squash Merge**
   - PR 리뷰 및 CI 통과 후, 본인이 직접 **Squash Merge** 합니다.
   - 머지된 Feature 브랜치는 자동으로 삭제됩니다.

5. **배포 후 로컬 최신화 & 브랜치 정리**
   - `main` 머지(배포)가 완료되면 로컬 환경을 최신화합니다.

   ```bash
   git checkout main
   git pull origin main
   ```

   - 이후 새로운 작업을 위해 브랜치를 분기합니다.
   - 더 이상 필요 없는 기존 Feature 브랜치는 삭제합니다.

   ```bash
   git branch -d Feature/[브랜치명]
   ```

---

## 5. 브랜치 전략

- **main**: 프로덕션 배포용 브랜치
- **develop**: 통합 개발 브랜치

> ⚠️ **모든 브랜치는 반드시 해당 Jira 이슈 키(`CDP-###`)를 포함해야 합니다.**
> Jira와 GitHub가 연동되어 있으므로, 브랜치명이나 PR 제목에 이슈 키가 포함되어 있으면 자동으로 해당 이슈에 링크됩니다.

### 🧩 브랜치 작업 종류

| 타입          | 형식                               | 설명                          |
| ------------- | ---------------------------------- | ----------------------------- |
| **Feature/**  | `Feature/[이슈키]-[기능요약]`      | 새로운 기능 개발              |
| **Fix/**      | `Fix/[이슈키]-[버그요약]`          | 버그 수정                     |
| **Chore/**    | `Chore/[이슈키]-[작업요약]`        | 빌드, 설정, 기타 작업         |
| **Docs/**     | `Docs/[이슈키]-[문서요약]`         | 문서 수정                     |
| **Test/**     | `Test/[이슈키]-[테스트요약]`       | 테스트 코드 추가/수정         |
| **Refactor/** | `Refactor/[이슈키]-[리팩토링요약]` | 기능 변화 없는 코드 구조 개선 |

---

### ✏️ 네이밍 규칙

- **Jira Key** (`CDP-153`) → 반드시 포함 (대문자 유지)
- **작업 종류(Type)** → 맨 앞 글자만 대문자로 (`Feature`, `Fix`, `Chore`, `Docs`, `Test`, `Refactor`)
- **요약(slug)** → 소문자 + 하이픈(`-`)으로 작성 (`modal-publishing`, `auth-redirect`)
- **요약은 영어로만 작성**

예)

```bash
Feature/CDP-153-modal-publishing
Fix/CDP-153-login-redirect
Chore/CDP-153-update-dependencies
Docs/CDP-153-readme-update
Test/CDP-153-auth-service
Refactor/CDP-153-dashboard-layout
```

---

## 6. 커밋 컨벤션

```
<jira-key> <type>(scope): <subject>
```

- **jira-key**: 해당 작업 이슈 키 (예: CDP-1)
- **type** (모두 소문자):
  - feat ✨: 새로운 기능 추가
  - fix 🐛: 버그 수정
  - refactor 🔨: 코드 리팩토링 (기능 변화 없음)
  - style 🎨: 코드 포맷팅, 세미콜론 등 스타일 변경
  - chore ⚙️: 빌드/설정/패키지 등 기타 작업
  - docs 📝: 문서 수정
  - test 🧪: 테스트 코드 추가/수정

- **scope**: 선택 사항, 변경된 영역 명시
- **subject**: 간단한 변경 설명 (한글/영문 모두 가능)

예시:

```bash
CDP-1 feat✨ (dashboard): add draggable layout
CDP-2 fix🐛 (auth): resolve logout issue
```

---

## 7. 디렉토리 구조

```bash
├── .github/workflows   # CI/CD
├── public              # 정적 리소스
├── src
│   ├── app             # Next.js App Router
│   ├── components      # 공통 컴포넌트
│   ├── features        # 모듈별 기능 단위
│   ├── hooks           # 커스텀 훅
│   ├── lib             # util / api client
│   ├── styles
│   └── types
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── .nvmrc
├── next.config.js
├── package.json
├── pnpm-lock.yaml
└── README.md
```

---

## 8. 화면 Preview

> 주요 페이지 캡처나 GIF를 삽입하여 사용자가 UI 흐름을 쉽게 파악할 수 있도록 합니다.

---
