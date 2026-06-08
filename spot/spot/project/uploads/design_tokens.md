# Popin — 디자인 토큰

> **버전** v0.1 · **작성일** 2026-05-19
> moodboard.md 기반. 이 문서가 모든 화면의 색·크기·간격 단일 소스.
> **원칙** — 토큰이 부족해 보여도 만들지 않는다. 제약이 일관성을 만든다.

---

## 0. 토큰 이름 규칙

`{카테고리}-{이름}-{변형}` — 예: `color-accent-strong`, `text-display-lg`, `space-6`.
Tailwind 사용 시 `theme.extend`로 동일 이름 매핑.

---

## 1. 컬러

### 1.1 팔레트

| 토큰 | HEX | 용도 |
|---|---|---|
| `color-ink` | `#0A0A0A` | 주 텍스트, 헤더 워드마크 |
| `color-paper` | `#F4EFE6` | 메인 배경 (크림). 매거진 톤 핵심 |
| `color-paper-pure` | `#FFFFFF` | 카드·시트 위 배경, 공간 상세·임대인 영역 |
| `color-accent` | `#FF5A1F` | 메인 액센트 (오렌지). CTA·브랜드·강조 |
| `color-accent-deep` | `#D8410F` | 액센트 hover/press |
| `color-accent-soft` | `#FFE7DC` | 액센트 배경(태그·배지의 옅은 면) |
| `color-gray-50` | `#F7F5F1` | paper보다 옅은 회색·구분 면 |
| `color-gray-100` | `#E8E4DD` | 구분선·테두리·divider |
| `color-gray-300` | `#BDB7AD` | placeholder, disabled 표면 |
| `color-gray-500` | `#7A736A` | secondary 텍스트 |
| `color-gray-700` | `#3F3A33` | 강한 본문 (ink 대체) |
| `color-success` | `#1F8A4C` | 성공·검증 완료 |
| `color-warning` | `#C7901A` | 주의·24h+ ⚠️ |
| `color-error` | `#C7392C` | 오류·신고 |
| `color-info` | `#2F5BBF` | 정보·링크 보조 (절제) |

### 1.2 사용 규칙

- **메인 배경은 `color-paper` (크림).** 흰색 일변도를 피해 매거진 톤 확보. 단, 공간 상세 같은 사진 중심 화면은 `color-paper-pure` (흰)로 사진을 더 돋보이게.
- **`color-accent` 사용량 가드 — 한 화면 면적의 ≤ 8%.** 면적이 더 크면 부담. 예외는 헤로 색면 분할 시.
- **시스템 색 (success·warning·error)는 채도 절제.** 톤이 매거진이라 형광·비비드 채도는 안 어울림.
- **그라데이션 금지.** 솔리드 색면만.

### 1.3 다크 모드

이번 라운드 제외. 추후 필요 시 ink↔paper 반전 + accent는 동일 유지로 시작.

---

## 2. 타이포그래피

### 2.1 폰트 패밀리

| 토큰 | 폰트 | 용도 |
|---|---|---|
| `font-sans` | Pretendard | 본문·UI 전반 |
| `font-display` | Pretendard (Black 950) | 헤로·섹션 헤더 큰 타이포 |
| `font-mono` | JetBrains Mono | 영문 모노 캡션, 인덱스 라벨 ("NO. 01") |

Pretendard는 Variable 폰트라 한 파일로 9가지 weight 커버. JetBrains Mono는 Regular·Medium만 임포트.

### 2.2 사이즈 스케일

모바일·데스크탑 같은 토큰, 데스크탑에서 한·두 단계 위로.

| 토큰 | px | line-height | weight | 용도 |
|---|---|---|---|---|
| `text-display-2xl` | 80 | 0.95 | 900 | 데스크탑 헤로 카피 |
| `text-display-xl` | 56 | 1.0 | 900 | 모바일 헤로 카피, 데스크탑 타운명 |
| `text-display-lg` | 40 | 1.05 | 800 | 모바일 타운명, 데스크탑 섹션 헤더 |
| `text-h1` | 28 | 1.2 | 700 | 페이지 제목 |
| `text-h2` | 22 | 1.3 | 700 | 섹션 헤더 |
| `text-h3` | 19 | 1.35 | 600 | 카드 제목 |
| `text-body-lg` | 18 | 1.55 | 400 | 본문 (강조) |
| `text-body` | 17 | 1.55 | 400 | 기본 본문 |
| `text-body-sm` | 15 | 1.5 | 400 | 보조 본문 |
| `text-caption` | 13 | 1.4 | 500 | 캡션·라벨 |
| `text-mono-sm` | 12 | 1.3 | 500 | 영문 모노 ("NO. 01", "POPUP TOWN") |
| `text-mono-xs` | 11 | 1.3 | 500 | 작은 모노 (인덱스) |

### 2.3 사용 규칙

- **본문 최소 17px** (PRD §6 임대인 페르소나 고려). `text-body-sm 15px`는 보조에만, 본문 메인 X.
- **헤로는 `text-display-2xl` 또는 `text-display-xl`만**. 그 이하 크기로 헤로 카피 쓰지 않음.
- **모노 폰트는 영문·숫자에만**. 한글에 모노 적용 금지.
- **letter-spacing** — display는 `-0.02em` (한글이 약간 좁게), 본문은 0, 모노는 `0.05em` (대문자 가독성).
- **자간** — 한글 헤로에 자간 -2% 권장. CSS `letter-spacing: -0.02em`.

### 2.4 한·영 캡션 패턴 (moodboard §7 #5)

```
[큰 한글 타이포]                 ← font-display, text-display-2xl
SEONGSU · POPUP TOWN NO. 01     ← font-mono, text-mono-sm, color-gray-500
```

위치 — 한글 타이포 아래 또는 위에 작게. 둘 사이 간격 `space-3` (12px).

---

## 3. 간격 (Spacing)

4px 그리드 기반. Tailwind 기본과 호환.

| 토큰 | px | 용도 |
|---|---|---|
| `space-0` | 0 | — |
| `space-1` | 4 | 가장 작은 간격 |
| `space-2` | 8 | 칩 내부, 인접 아이콘·텍스트 |
| `space-3` | 12 | 한·영 캡션 사이 |
| `space-4` | 16 | 기본 간격 단위, 카드 내부 padding |
| `space-5` | 20 | — |
| `space-6` | 24 | 카드 padding, 섹션 내부 |
| `space-8` | 32 | 컴포넌트 간 |
| `space-10` | 40 | 작은 섹션 간 |
| `space-12` | 48 | 섹션 간 |
| `space-16` | 64 | 큰 섹션 간 (모바일) |
| `space-24` | 96 | 큰 섹션 간 (데스크탑) |
| `space-32` | 128 | 헤로 상하 여백 (데스크탑) |

### 3.1 사용 규칙

- **사용하는 토큰만 사용.** 임의 값 (예: padding: 18px) 금지.
- **모바일은 좌우 padding `space-4`(16) 또는 `space-5`(20)** — 더 좁으면 답답, 더 넓으면 콘텐츠 좁아짐.
- **데스크탑 최대 폭** — `1200px`. 페이지 전체 wrap. 단 헤로·헤더는 풀폭 가능.
- **수직 리듬** — 한 섹션 내부는 `space-8` 이하, 섹션 사이는 `space-16` 이상.

---

## 4. 라운드 (Radius)

| 토큰 | px | 용도 |
|---|---|---|
| `radius-none` | 0 | 헤로 색면, 큰 이미지(매거진 톤은 라운드 없음 선호) |
| `radius-sm` | 4 | 인풋·작은 칩 |
| `radius-md` | 8 | 버튼·작은 카드 |
| `radius-lg` | 16 | 카드 (공간·타운) |
| `radius-xl` | 24 | 큰 카드 (Nexora 톤), 시트, 모달 |
| `radius-pill` | 9999 | 칩·태그·필터 칩 |

### 4.1 사용 규칙

- **메인 카드는 `radius-lg` (16) 한 종으로 통일.** 혼재 금지.
- **헤로 색면은 `radius-none`** — 풀폭 색면이 둥글면 매거진 톤 깨짐.
- **버튼은 `radius-md` (8) 또는 `radius-pill`** 둘 중 하나로 통일. 섞지 않음.
- 액센트 배지·검증 배지는 `radius-pill`.

---

## 5. 그림자 (Elevation)

매거진 톤이라 그림자 절제. 둥둥 떠 있는 SaaS 룩 회피.

| 토큰 | 값 | 용도 |
|---|---|---|
| `shadow-none` | none | 기본 (대부분의 컴포넌트) |
| `shadow-sm` | `0 1px 2px rgba(10,10,10,0.06)` | 카드 호버, 인풋 포커스 |
| `shadow-md` | `0 8px 24px rgba(10,10,10,0.08)` | 모달·시트 |
| `shadow-lg` | `0 16px 48px rgba(10,10,10,0.12)` | 풀스크린 시트, 알림 토스트 |
| `shadow-sticky-cta` | `0 -8px 24px rgba(10,10,10,0.06)` | 모바일 하단 고정 CTA 위 그림자 |

### 5.1 사용 규칙

- **카드 기본은 그림자 없음.** 호버에만 `shadow-sm`. 직방·당근 톤.
- **컬러 위 그림자는 더 옅게** (오렌지 색면 위 흰 카드 등).

---

## 6. 모션 (Motion)

framer-motion 또는 CSS transition. **장식적 큰 모션 금지** (memory/design_direction.md 원칙 유지).

### 6.1 Duration

| 토큰 | ms | 용도 |
|---|---|---|
| `motion-fast` | 120 | 호버·포커스·작은 상태 변화 |
| `motion-base` | 240 | 기본 트랜지션, 카드·시트 |
| `motion-slow` | 480 | 헤로 진입, 페이지 트랜지션 |
| `motion-cinematic` | 800 | 헤로 색면 슬라이드, 큰 텍스트 진입 |

### 6.2 Easing

| 토큰 | cubic-bezier | 용도 |
|---|---|---|
| `ease-standard` | `0.2, 0, 0, 1` | 기본 (대부분) |
| `ease-out-soft` | `0.16, 1, 0.3, 1` | 텍스트 진입, 페이드 인 |
| `ease-in-sharp` | `0.4, 0, 1, 1` | 사라짐 (모달 닫힘 등) |

### 6.3 패턴 라이브러리

**헤로 진입 (페이지 첫 로드)**
1. 색면이 좌→우 슬라이드 (`motion-cinematic`, `ease-out-soft`)
2. 0.2초 딜레이 후 한글 타이포 페이드 인 + 미세 위로 (`motion-slow`)
3. 0.4초 딜레이 후 영문 모노 캡션 페이드 인 (`motion-base`)
→ 총 1.2초. 한 번만 실행, 새로고침 시에만 재생.

**카드 호버**
- 카드 살짝 위로 (`translateY(-2px)`) + `shadow-sm` 적용, `motion-fast`.

**필터 시트 슬라이드 업 (모바일)**
- 시트가 바닥에서 슬라이드 업 + 배경 dim, `motion-base`, `ease-standard`.

**버튼 press**
- `scale(0.98)` `motion-fast`. 클릭 피드백.

**페이지 트랜지션**
- 라우트 변경 시 새 페이지가 페이드 인 + 미세 위로 (8px). 큰 슬라이드 X.

### 6.4 안티-가드

- 스크롤 트리거 거대 애니메이션 ✕
- 무한 반복 회전 ✕
- 패럴랙스 ✕
- 호버 시 색 점멸·통통 ✕
- 페이지 진입 시 모든 요소가 다른 방향에서 튀어나오는 stagger ✕

---

## 7. 레이아웃 토큰

| 토큰 | 값 | 용도 |
|---|---|---|
| `breakpoint-sm` | 640 | 큰 모바일 |
| `breakpoint-md` | 768 | 태블릿 |
| `breakpoint-lg` | 1024 | 데스크탑 진입 |
| `breakpoint-xl` | 1280 | 와이드 데스크탑 |
| `container-max` | 1200 | 콘텐츠 최대 폭 |
| `header-height-mobile` | 56 | 모바일 헤더 높이 |
| `header-height-desktop` | 72 | 데스크탑 헤더 높이 |
| `bottomnav-height` | 64 | 모바일 하단 탭 |
| `sticky-cta-height` | 80 | 공간 상세 하단 고정 CTA |

### 7.1 그리드

- **데스크탑** — 12컬럼, gutter `space-6` (24px)
- **모바일** — 4컬럼, gutter `space-4` (16px)
- **비대칭 카드 (Nexora 톤)** — `col-span-7 / col-span-5`, `col-span-8 / col-span-4` 패턴

---

## 8. 컴포넌트 토큰 (반복되는 묶음)

자주 쓰는 토큰 묶음을 컴포넌트 단위로 미리 잡아둠.

### 8.1 Button

| Variant | 배경 | 텍스트 | 라운드 | padding | 호버 |
|---|---|---|---|---|---|
| **primary** | `color-accent` | 흰 | `radius-md` | `space-4 space-6` (16/24) | `color-accent-deep` |
| **secondary** | `color-ink` | 흰 | `radius-md` | 동일 | `color-gray-700` |
| **ghost** | 투명 | `color-ink` | `radius-md` | 동일 | `color-gray-50` |
| **outline** | 투명 | `color-ink` | `radius-md` | 동일 + 테두리 1px `color-gray-100` | `color-gray-50` |

크기 변형 — `sm`: padding `space-2 space-4`, `lg`: padding `space-5 space-8`.

### 8.2 Card (공간·타운 카드)

- 배경 `color-paper-pure`
- 라운드 `radius-lg` (16)
- 그림자 기본 없음, 호버 `shadow-sm`
- 내부 padding `space-4` (모바일) / `space-5` (데스크탑)

### 8.3 Chip / Tag

- 배경 `color-gray-50`, 텍스트 `color-gray-700`
- 라운드 `radius-pill`
- padding `space-2 space-4` (8/16)
- 액센트 칩 (검증 배지·"협의 가능") — 배경 `color-accent-soft`, 텍스트 `color-accent-deep`

### 8.4 Input

- 배경 `color-paper-pure`
- 테두리 1px `color-gray-100`, 포커스 `color-ink`
- 라운드 `radius-md`
- padding `space-4` (16/16)
- placeholder `color-gray-300`

### 8.5 Hero Slab (색면 헤로)

매거진 톤 핵심.

```
height: 100vh (mobile) / 88vh (desktop)
background: color-paper or color-accent or color-ink
padding: container-max 내부 + space-12 ~ space-24 수직
contents:
  - 영문 모노 캡션 위 (text-mono-sm)
  - 거대 한글 타이포 가운데 또는 좌하단 (text-display-2xl)
  - 보조 카피 (text-body-lg, color-gray-700 or rgba on accent)
  - CTA 풀폭 (모바일) / 한 줄 (데스크탑)
```

### 8.6 검증 배지

| 상태 | 배경 | 텍스트 | 아이콘 |
|---|---|---|---|
| 미검증 | `color-gray-100` | `color-gray-500` | — |
| 사진검증 | `color-accent-soft` | `color-accent-deep` | ✓ |
| 방문검증 | `color-accent` | `color-paper-pure` | ✓✓ |

라운드 `radius-pill`, 크기 `text-mono-xs`.

---

## 9. 아이콘

- **라이브러리** — `lucide-react` 한 종으로 통일 (오픈소스, 일관된 톤).
- **크기** — 16 / 20 / 24 세 단계.
- **stroke width** — 1.75 통일 (기본 2는 두꺼움, 1.5는 가늘어 약함).
- **컬러** — `color-ink` 기본, 강조 시 `color-accent`.

---

## 10. 토큰 적용 우선순위

화면 작업 시 토큰을 잡는 순서:

1. **배경 색** (paper / paper-pure / accent)
2. **타이포 스케일** 한 화면 안에 3~5단계
3. **간격 수직 리듬** space-16 / space-24 기준 섹션 분할
4. **그리드** 모바일·데스크탑 분기
5. **카드·버튼·칩** 컴포넌트 토큰 적용
6. **모션** 진입 + 호버
7. **상태별 분기** (빈 상태·로딩·에러 — microcopy.md와 함께)

이 순서를 지키면 처음부터 토큰이 흔들리지 않음.

---

## 11. 안티-가드 (이렇게 만들면 AI틱)

- 회색을 6단계 이상 사용 ✕ → 5단계로 충분
- 라운드를 3종 이상 혼재 ✕ → 카드는 한 종
- 그라데이션 / 글래스 / 네온 글로우 ✕
- 호버에 너무 많은 변화 ✕ (크기·색·그림자·회전 동시 X)
- 모든 텍스트 가운데 정렬 ✕
- 컬러 팔레트에 없는 즉흥적인 색 사용 ✕
- 16의 배수가 아닌 padding (예: 18, 22) ✕
- 폰트 weight 3종 이상 혼재 ✕

---

## 12. 다음 단계

1. 이 토큰으로 **공간 상세 화면 1개** 먼저 시안 (모든 토큰이 다 쓰이는 화면)
2. 시안 보고 토큰 갱신·미세 조정
3. `microcopy.md` 작성 — 빈 상태·에러·CTA·알림 톤표
4. 타운 페이지 시안 (매거진 톤 검증)
5. 헤로 모션 그래픽 시안 (Nexora 톤 검증)

토큰 미세 조정이 잦은 게 정상. 첫 화면을 토큰 검증 도구로 쓴다.
