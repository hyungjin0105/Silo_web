// main-page.jsx — Popin 메인 페이지 (모바일 + 데스크탑)
// 헤로는 사진 X. 색면 + 거대 한글 타이포 + 영문 모노 캡션.

// ── Shared atoms ─────────────────────────────────────────────────────────────
const Wordmark = ({ color = 'var(--color-ink)', size = 20 }) => (
  <span style={{ fontWeight: 700, fontSize: size, letterSpacing: '-0.03em', color }}>
    Popin<span style={{ color: 'var(--color-accent)' }}>.</span>
  </span>
);

const TownStripe = ({ centered }) => (
  <div style={{
    background: 'var(--color-ink)',
    color: '#fff',
    padding: '20px var(--s-5)',
    display: 'flex', alignItems: 'baseline', gap: 'var(--s-5)',
    overflowX: 'auto', whiteSpace: 'nowrap',
    justifyContent: centered ? 'center' : 'flex-start',
  }}>
    <span className="t-mono-sm" style={{ color: 'var(--color-gray-300)' }}>NOW OPEN ·</span>
    <span className="t-body-sm" style={{ color: 'var(--color-gray-300)' }}>지금 매장이 열리는 동네 —</span>
    {['망원','성수','연남','광안리','강릉 원도심','일산 라페스타'].map((t, i) => (
      <span key={t} className="t-body" style={{ fontWeight: 700, color: '#fff' }}>
        {t}{i < 5 && <span style={{ color: 'var(--color-gray-500)', margin: '0 6px', fontWeight: 400 }}>·</span>}
      </span>
    ))}
  </div>
);

const Footer = ({ wide }) => (
  <footer style={{
    background: 'var(--color-paper)',
    padding: wide ? 'var(--s-12) var(--s-12)' : 'var(--s-8) var(--s-5)',
    borderTop: '1px solid var(--color-gray-100)',
  }}>
    <div style={{ maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-4)', marginBottom: 'var(--s-6)' }}>
        <Wordmark size={wide ? 24 : 20} />
        <span className="t-mono-xs" style={{ color: 'var(--color-gray-500)' }}>POPUP SPACE · SHORT TERM</span>
      </div>
      <div style={{
        display: 'flex', flexWrap: 'wrap', gap: wide ? 'var(--s-8)' : 'var(--s-5)',
      }}>
        {['표준계약서','FAQ','이용약관','개인정보','사업자정보'].map(t => (
          <a key={t} className="t-body-sm" style={{ color: 'var(--color-gray-500)', textDecoration: 'none', cursor: 'pointer' }}>{t}</a>
        ))}
      </div>
      <div className="t-mono-xs" style={{ color: 'var(--color-gray-300)', marginTop: 'var(--s-6)' }}>
        © 2026 POPIN · MATCHING ONLY · 결제·계약은 외부에서 진행됩니다
      </div>
    </div>
  </footer>
);

// ── Town card (magazine, color-block, no photo) ──────────────────────────────
const TownCard = ({ no, koName, enName, count, price, tag, bg, fg, accent }) => (
  <article style={{
    background: bg, color: fg,
    borderRadius: 'var(--r-lg)',
    padding: 'var(--s-6)',
    display: 'flex', flexDirection: 'column',
    minHeight: 280, position: 'relative', overflow: 'hidden',
    border: bg === 'var(--color-paper-pure)' ? '1px solid var(--color-gray-100)' : 'none',
  }}>
    {/* Top: mono caption + NO. */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <div className="t-mono-xs" style={{ opacity: 0.7 }}>{enName}</div>
      <div className="t-mono-sm" style={{ fontWeight: 700, opacity: 0.85 }}>NO.{no}</div>
    </div>
    {/* Huge Korean name — left bottom anchored */}
    <div style={{ marginTop: 'auto', paddingTop: 'var(--s-6)' }}>
      <h3 style={{
        margin: 0, fontSize: 36, lineHeight: 1.05, fontWeight: 700,
        letterSpacing: '-0.025em',
      }}>{koName}</h3>
      <div className="t-body-sm" style={{ marginTop: 'var(--s-3)', opacity: 0.85 }}>
        매물 {count}개 <span style={{ opacity: 0.5 }}>·</span> 평균 1주 {price}
      </div>
      <div className="t-caption" style={{ marginTop: 'var(--s-2)', opacity: 0.7 }}>
        {tag}
      </div>
    </div>
    {/* Accent dot */}
    {accent && (
      <span style={{
        position: 'absolute', bottom: 'var(--s-5)', right: 'var(--s-5)',
        width: 10, height: 10, borderRadius: '50%', background: accent,
      }}/>
    )}
  </article>
);

// Three palettes per spec — 4th for desktop grid
const TOWNS = [
  { no: '01', koName: '성수', enName: 'SEONGSU · POPUP TOWN', count: 12, price: '220만', tag: '카페 · 갤러리 골목',
    bg: 'var(--color-accent)', fg: '#fff', accent: '#fff' },
  { no: '02', koName: '연남', enName: 'YEONNAM · POPUP TOWN', count: 7, price: '180만', tag: '편집숍 · 작업실',
    bg: 'var(--color-paper)', fg: 'var(--color-ink)', accent: 'var(--color-accent)' },
  { no: '03', koName: '부암', enName: 'BUAM · POPUP TOWN', count: 3, price: '120만', tag: '한적 · 골목',
    bg: 'var(--color-ink)', fg: '#fff', accent: 'var(--color-accent)' },
  { no: '04', koName: '망원', enName: 'MANGWON · POPUP TOWN', count: 5, price: '150만', tag: '가성비 · 로컬',
    bg: 'var(--color-paper-pure)', fg: 'var(--color-ink)', accent: 'var(--color-gray-500)' },
];

// ── Space card (recently added) ──────────────────────────────────────────────
const SpaceCard = ({ title, price, verified, ratio = '4 / 3', photoLabel }) => (
  <article className="card" style={{ overflow: 'hidden' }}>
    <div style={{
      width: '100%', aspectRatio: ratio,
      background: 'var(--color-gray-100)',
      position: 'relative',
      display: 'flex', alignItems: 'flex-end',
      padding: 'var(--s-4)',
    }}>
      <span className="t-mono-xs" style={{
        color: 'var(--color-gray-500)',
        background: 'rgba(255,255,255,0.75)',
        padding: '4px 8px', borderRadius: 'var(--r-sm)',
      }}>{photoLabel}</span>
      <span className="chip" style={{
        position: 'absolute', top: 'var(--s-4)', left: 'var(--s-4)',
        background: verified ? 'var(--color-accent-soft)' : 'rgba(255,255,255,0.92)',
        color: verified ? 'var(--color-accent-deep)' : 'var(--color-gray-500)',
        border: verified ? 'none' : '1px solid var(--color-gray-100)',
      }}>{verified ? '✓ 사진검증' : '미검증'}</span>
    </div>
    <div style={{ padding: 'var(--s-4) var(--s-5) var(--s-5)' }}>
      <div className="t-body" style={{ fontWeight: 700 }}>{title}</div>
      <div style={{ marginTop: 'var(--s-2)', display: 'flex', alignItems: 'baseline', gap: 'var(--s-2)', flexWrap: 'wrap' }}>
        <span className="t-h3">1주 {price}</span>
        <span className="chip chip-accent">협의 가능</span>
      </div>
    </div>
  </article>
);

const SPACES = [
  { title: '성수동 12평 1층 통유리 코너', price: '250만', verified: true,  photoLabel: '외관' },
  { title: '망원동 8평 1층 골목 가게',    price: '150만', verified: false, photoLabel: '외관' },
  { title: '부암동 한옥 리모델링 10평',  price: '180만', verified: true,  photoLabel: '외관' },
];

// ── Section header (한·영 모노 캡션) ─────────────────────────────────────────
const SectionHeader = ({ ko, en, action, large }) => (
  <div style={{
    display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
    padding: large ? '0 0 var(--s-8)' : '0 var(--s-5) var(--s-5)',
  }}>
    <div>
      <div className="t-mono-sm" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--s-2)' }}>{en}</div>
      <h2 style={{
        margin: 0, fontWeight: 700,
        fontSize: large ? 40 : 26, lineHeight: 1.15,
        letterSpacing: '-0.02em',
      }}>{ko}</h2>
    </div>
    {action && <a className="t-body-sm" style={{ color: 'var(--color-ink)', fontWeight: 500, textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer', whiteSpace: 'nowrap' }}>{action}</a>}
  </div>
);

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE — 390
// ─────────────────────────────────────────────────────────────────────────────
function MainMobile() {
  return (
    <div className="popin" style={{ width: 390, background: 'var(--color-paper)' }}>
      {/* Header */}
      <header style={{
        height: 'var(--header-h)', padding: '0 var(--s-5)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--color-paper)',
        borderBottom: '1px solid var(--color-gray-100)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)' }}>
          {/* hamburger */}
          <button className="tap" style={{ background: 'none', border: 'none', marginLeft: -10, cursor: 'pointer' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
              <line x1="4" y1="7"  x2="20" y2="7"/><line x1="4" y1="17" x2="20" y2="17"/>
            </svg>
          </button>
          <Wordmark />
        </div>
        <button style={{
          padding: '8px 14px', background: 'var(--color-ink)', color: '#fff',
          border: 'none', borderRadius: 'var(--r-md)', fontSize: 13, fontWeight: 700,
          fontFamily: 'inherit', cursor: 'pointer',
        }}>회원가입</button>
      </header>

      {/* Hero — paper bg, big type, one orange corner block w/ "01/" */}
      <section style={{
        position: 'relative',
        background: 'var(--color-paper)',
        padding: 'var(--s-8) var(--s-5) var(--s-10)',
        minHeight: 780,
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Top mono caption */}
        <div className="t-mono-sm" style={{ color: 'var(--color-gray-500)' }}>
          POPUP SPACE · SHORT TERM
        </div>

        {/* Huge Korean copy — anchored mid-bottom-left */}
        <h1 style={{
          margin: 'var(--s-10) 0 0', fontWeight: 900,
          fontSize: 56, lineHeight: 0.98, letterSpacing: '-0.035em',
          color: 'var(--color-ink)',
        }}>
          당신의<br/>아이디어가<br/>머물 자리<span style={{ color: 'var(--color-accent)' }}>.</span>
        </h1>

        {/* Secondary copy */}
        <p className="t-body" style={{
          margin: 'var(--s-8) 0 0',
          color: 'var(--color-gray-700)', maxWidth: 320,
        }}>
          비어 있는 동네 1층 상가와, 잠깐 머물고 싶은 브랜드를 잇는 정보 매칭 플랫폼.
          결제와 계약은 외부에서, 우리는 만남까지만.
        </p>

        {/* CTAs */}
        <div style={{ marginTop: 'auto', paddingTop: 'var(--s-8)', display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
          <button style={{
            height: 56, background: 'var(--color-accent)', color: '#fff',
            border: 'none', borderRadius: 'var(--r-md)',
            fontSize: 17, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--s-2)',
          }}>공간 찾기 <span aria-hidden>→</span></button>
          <button style={{
            height: 56, background: 'transparent', color: 'var(--color-ink)',
            border: '1px solid var(--color-ink)', borderRadius: 'var(--r-md)',
            fontSize: 17, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
          }}>내 공간 등록하기</button>
        </div>

        {/* Bottom-right index block — orange square w/ "01/" */}
        <div style={{
          position: 'absolute', top: 'var(--s-8)', right: 0,
          width: 96, height: 96,
          background: 'var(--color-accent)', color: '#fff',
          display: 'flex', flexDirection: 'column',
          padding: 'var(--s-3)', justifyContent: 'space-between',
        }}>
          <div className="t-mono-xs">IDEA</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 32, fontWeight: 500, lineHeight: 1 }}>
            01<span style={{ opacity: 0.7 }}>/</span>
          </div>
        </div>
      </section>

      {/* Section: 팝업타운 */}
      <section style={{ background: 'var(--color-paper)', padding: 'var(--s-12) 0 var(--s-10)' }}>
        <SectionHeader ko="팝업타운 둘러보기" en="EXPLORE TOWNS · NO.01—04" action="전체 →" />
        <div style={{
          display: 'flex', gap: 'var(--s-4)',
          overflowX: 'auto', padding: '0 var(--s-5) var(--s-3)',
          scrollSnapType: 'x mandatory',
        }}>
          {TOWNS.slice(0,3).map(t => (
            <div key={t.no} style={{ flex: '0 0 260px', scrollSnapAlign: 'start' }}>
              <TownCard {...t} />
            </div>
          ))}
        </div>
      </section>

      {/* Section: 최근 등록 */}
      <section style={{ background: 'var(--color-paper-pure)', padding: 'var(--s-12) 0 var(--s-10)' }}>
        <SectionHeader ko="최근 등록" en="RECENTLY ADDED · 3" action="전체 →" />
        <div style={{ padding: '0 var(--s-5)', display: 'flex', flexDirection: 'column', gap: 'var(--s-5)' }}>
          {SPACES.map((s, i) => <SpaceCard key={i} {...s} />)}
        </div>
      </section>

      {/* Bottom town line */}
      <TownStripe />

      <Footer />
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// DESKTOP — 1280, container 1200
// ─────────────────────────────────────────────────────────────────────────────
function MainDesktop() {
  const C = { maxWidth: 1200, margin: '0 auto', padding: '0 var(--s-12)' };
  return (
    <div className="popin" style={{ width: 1280, background: 'var(--color-paper)' }}>
      {/* Header */}
      <header style={{
        height: 'var(--header-h-desktop, 72px)',
        background: 'var(--color-paper)',
        borderBottom: '1px solid var(--color-gray-100)',
      }}>
        <div style={{ ...C, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-3)' }}>
            <Wordmark size={22} />
            <span className="t-mono-xs" style={{ color: 'var(--color-gray-500)' }}>POPUP SPACE</span>
          </div>
          <nav style={{ display: 'flex', gap: 'var(--s-8)' }}>
            {['공간 찾기','팝업타운','내 공간 등록','이야기','이용 안내'].map(m => (
              <a key={m} className="t-body-sm" style={{ color: 'var(--color-ink)', fontWeight: 500, cursor: 'pointer', textDecoration: 'none' }}>{m}</a>
            ))}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-5)' }}>
            <div className="t-mono-xs" style={{ color: 'var(--color-gray-500)', letterSpacing: '0.08em' }}>
              <b style={{ color: 'var(--color-ink)' }}>KO</b> <span style={{ color: 'var(--color-gray-300)', margin: '0 4px' }}>/</span> EN
            </div>
            <a className="t-body-sm" style={{ color: 'var(--color-ink)', cursor: 'pointer' }}>로그인</a>
            <button style={{
              padding: '10px 18px', background: 'var(--color-ink)', color: '#fff',
              border: 'none', borderRadius: 'var(--r-pill)',
              fontSize: 14, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
            }}>회원가입</button>
          </div>
        </div>
      </header>

      {/* Hero — split: left 60% paper, right 40% accent */}
      <section style={{
        height: 720, display: 'grid', gridTemplateColumns: '60fr 40fr',
        position: 'relative',
      }}>
        {/* Left — paper, anchored bottom-left */}
        <div style={{
          background: 'var(--color-paper)',
          padding: 'var(--s-12) var(--s-12) var(--s-16)',
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          paddingLeft: 'max(var(--s-12), calc(50vw - 600px + 48px))',
        }}>
          <div className="t-mono-sm" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--s-6)' }}>
            POPUP SPACE · SHORT TERM
          </div>
          <h1 style={{
            margin: 0, fontWeight: 900,
            fontSize: 96, lineHeight: 0.95, letterSpacing: '-0.035em',
            color: 'var(--color-ink)',
          }}>
            당신의 아이디어가<br/>머물 자리<span style={{ color: 'var(--color-accent)' }}>.</span>
          </h1>
          <p className="t-body-lg" style={{
            margin: 'var(--s-8) 0 0',
            color: 'var(--color-gray-700)', maxWidth: 540,
            fontSize: 18, lineHeight: 1.55, fontWeight: 400,
          }}>
            비어 있는 동네 1층 상가와, 잠깐 머물고 싶은 브랜드를 잇는 정보 매칭 플랫폼.
            결제와 계약은 외부에서, 우리는 만남까지만.
          </p>
          <div style={{ marginTop: 'var(--s-10)', display: 'flex', gap: 'var(--s-3)' }}>
            <button style={{
              padding: '18px 28px', background: 'var(--color-accent)', color: '#fff',
              border: 'none', borderRadius: 'var(--r-md)',
              fontSize: 17, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 'var(--s-2)',
            }}>공간 찾기 <span>→</span></button>
            <button style={{
              padding: '18px 28px', background: 'transparent', color: 'var(--color-ink)',
              border: '1px solid var(--color-ink)', borderRadius: 'var(--r-md)',
              fontSize: 17, fontWeight: 700, fontFamily: 'inherit', cursor: 'pointer',
            }}>내 공간 등록하기</button>
          </div>
        </div>

        {/* Right — accent slab */}
        <div style={{
          background: 'var(--color-accent)', color: '#fff',
          position: 'relative', overflow: 'hidden',
          padding: 'var(--s-10) var(--s-12)',
          display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="t-mono-sm" style={{ opacity: 0.8 }}>EDITION · NO. 01</div>
            <div className="t-mono-sm" style={{ opacity: 0.8 }}>2026 / 11</div>
          </div>
          {/* Big mono index */}
          <div style={{
            fontFamily: 'var(--font-mono)', fontSize: 220, lineHeight: 0.85,
            fontWeight: 500, letterSpacing: '-0.04em',
            textAlign: 'right', alignSelf: 'flex-end',
          }}>
            01<span style={{ opacity: 0.55 }}>/</span>
          </div>
          {/* Mini text marks */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <div className="t-mono-xs" style={{ opacity: 0.7, marginBottom: 4 }}>POPIN EDITORIAL</div>
              <div className="t-h3" style={{ color: '#fff' }}>동네 1층, 잠깐의 자리.</div>
            </div>
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              background: '#fff',
            }}/>
          </div>
        </div>
      </section>

      {/* Section: 팝업타운 */}
      <section style={{ background: 'var(--color-paper)', padding: 'var(--s-16) 0' }}>
        <div style={C}>
          <SectionHeader ko="팝업타운 둘러보기" en="EXPLORE TOWNS · NO.01—04" action="전체 보기 →" large />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--s-6)',
          }}>
            {TOWNS.map(t => <TownCard key={t.no} {...t} />)}
          </div>
        </div>
      </section>

      {/* Section: 최근 등록 */}
      <section style={{ background: 'var(--color-paper-pure)', padding: 'var(--s-16) 0' }}>
        <div style={C}>
          <SectionHeader ko="최근 등록" en="RECENTLY ADDED · 3" action="전체 보기 →" large />
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--s-6)',
          }}>
            {SPACES.map((s, i) => <SpaceCard key={i} {...s} />)}
          </div>
        </div>
      </section>

      {/* Town stripe */}
      <TownStripe centered />

      <Footer wide />
    </div>
  );
}

Object.assign(window, { MainMobile, MainDesktop });
