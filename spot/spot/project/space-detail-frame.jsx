// space-detail-frame.jsx
// Mobile space detail (390px). Renders one of three states: "normal" | "saved" | "unverified"

const { useState } = React;

// ── Atomic icons (lucide-react style, stroke 1.75) ────────────────────────────
const Ico = {
  Heart: ({ filled, color }) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={filled ? color : 'none'} stroke={filled ? color : 'currentColor'} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  ),
  Share: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
    </svg>
  ),
  Chevron: ({ open }) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .18s' }}>
      <polyline points="6 9 12 15 18 9"/>
    </svg>
  ),
  ArrowRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  Check: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Download: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Flag: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>
    </svg>
  ),
  Info: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
};

// ── Photo placeholder ────────────────────────────────────────────────────────
const Placeholder = ({ label, ratio = '4 / 3', subtle }) => (
  <div style={{
    width: '100%', aspectRatio: ratio,
    background: 'var(--color-gray-100)',
    display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start',
    padding: 'var(--s-4)',
    position: 'relative', overflow: 'hidden',
  }}>
    {/* Subtle diagonal hatch */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'repeating-linear-gradient(135deg, transparent 0 14px, rgba(10,10,10,0.025) 14px 15px)',
    }}/>
    <div className="t-mono-xs" style={{
      color: 'var(--color-gray-500)', position: 'relative',
      background: 'rgba(255,255,255,0.7)', padding: '4px 8px', borderRadius: 'var(--r-sm)',
    }}>{label}</div>
  </div>
);

// ── Header ───────────────────────────────────────────────────────────────────
const Header = ({ saved }) => (
  <header style={{
    height: 'var(--header-h)', padding: '0 var(--s-4) 0 var(--s-5)',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    background: 'var(--color-paper-pure)',
    borderBottom: '1px solid var(--color-gray-100)',
    position: 'sticky', top: 0, zIndex: 5,
  }}>
    <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-2)' }}>
      <span style={{ fontWeight: 700, fontSize: 20, letterSpacing: '-0.03em' }}>Popin<span style={{ color: 'var(--color-accent)' }}>.</span></span>
      <span className="t-mono-xs" style={{ color: 'var(--color-gray-500)' }}>POPUP&nbsp;SPACE</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginRight: -8 }}>
      <button className="tap" style={{ background: 'none', border: 'none', color: saved ? 'var(--color-accent)' : 'var(--color-ink)', cursor: 'pointer' }}>
        <Ico.Heart filled={saved} color="var(--color-accent)" />
      </button>
      <button className="tap" style={{ background: 'none', border: 'none', color: 'var(--color-ink)', cursor: 'pointer' }}>
        <Ico.Share />
      </button>
    </div>
  </header>
);

// ── Photo carousel ───────────────────────────────────────────────────────────
const Carousel = ({ photos, idx, badge, dimmed }) => (
  <div style={{ position: 'relative', background: 'var(--color-gray-100)' }}>
    <Placeholder label={photos[idx - 1].label} />
    {/* Dim overlay for unverified */}
    {dimmed && (
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255,255,255,0.0)',
      }}/>
    )}
    {/* Verification badge — top-left */}
    <div style={{ position: 'absolute', top: 'var(--s-4)', left: 'var(--s-4)' }}>
      {badge}
    </div>
    {/* Index — bottom-right */}
    <div style={{ position: 'absolute', bottom: 'var(--s-4)', right: 'var(--s-4)' }}>
      <span className="chip chip-mono chip-ink">{idx} / {photos.length}</span>
    </div>
    {/* Dot indicators */}
    <div style={{
      position: 'absolute', bottom: 'var(--s-4)', left: '50%', transform: 'translateX(-50%)',
      display: 'flex', gap: 6,
    }}>
      {photos.map((_, i) => (
        <span key={i} style={{
          width: 6, height: 6, borderRadius: '50%',
          background: i + 1 === idx ? '#fff' : 'rgba(255,255,255,0.55)',
        }}/>
      ))}
    </div>
  </div>
);

// ── Verification badges ──────────────────────────────────────────────────────
const PhotoVerifiedBadge = () => (
  <span className="chip chip-accent" style={{ paddingLeft: 8 }}>
    <Ico.Check /> 사진검증
  </span>
);
const UnverifiedBadge = () => (
  <span className="chip" style={{ background: 'rgba(255,255,255,0.92)', color: 'var(--color-gray-500)', border: '1px solid var(--color-gray-100)' }}>
    미검증
  </span>
);

// ── Accordion section ────────────────────────────────────────────────────────
const Section = ({ koTitle, enCaption, open, onToggle, children }) => (
  <section>
    <button onClick={onToggle} style={{
      width: '100%', padding: 'var(--s-5) var(--s-5)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: 'transparent', border: 'none', cursor: 'pointer',
      textAlign: 'left',
    }}>
      <div>
        <div className="t-h3" style={{ color: 'var(--color-ink)' }}>{koTitle}</div>
        {enCaption && <div className="t-mono-xs" style={{ color: 'var(--color-gray-500)', marginTop: 2 }}>{enCaption}</div>}
      </div>
      <span style={{ color: 'var(--color-gray-500)' }}><Ico.Chevron open={open} /></span>
    </button>
    {open && (
      <div style={{ padding: '0 var(--s-5) var(--s-6)' }}>
        {children}
      </div>
    )}
    <div className="divider" />
  </section>
);

// ── Mini calendar ────────────────────────────────────────────────────────────
const MiniCal = ({ month, year, firstDow, daysInMonth, highlight, available, label }) => {
  // firstDow: 0=Sun..6=Sat, day position of day 1
  const cells = [];
  for (let i = 0; i < firstDow; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  const dows = ['일','월','화','수','목','금','토'];

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 'var(--s-3)' }}>
        <div className="t-caption" style={{ color: 'var(--color-ink)', fontWeight: 700 }}>{year}.{String(month).padStart(2,'0')}</div>
        <div className="t-mono-xs" style={{ color: 'var(--color-gray-500)' }}>{label}</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
        {dows.map((d, i) => (
          <div key={d} className="t-mono-xs" style={{
            textAlign: 'center', padding: '4px 0',
            color: i === 0 ? 'var(--color-accent-deep)' : 'var(--color-gray-500)',
          }}>{d}</div>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <div key={'e'+i} />;
          const isHi = highlight && d >= highlight[0] && d <= highlight[1];
          const isAvail = available;
          return (
            <div key={d} style={{
              aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 500,
              background: isHi ? 'rgba(199,144,26,0.18)' : (isAvail ? 'var(--color-accent-soft)' : 'transparent'),
              color: isHi ? '#7a5a10' : (isAvail ? 'var(--color-accent-deep)' : 'var(--color-ink)'),
              borderRadius: 'var(--r-sm)',
            }}>{d}</div>
          );
        })}
      </div>
    </div>
  );
};

// ── Spec rows ────────────────────────────────────────────────────────────────
const SpecRow = ({ k, v }) => (
  <div style={{
    display: 'grid', gridTemplateColumns: '88px 1fr',
    padding: '10px 0',
    borderBottom: '1px solid var(--color-gray-100)',
  }}>
    <div className="t-body-sm" style={{ color: 'var(--color-gray-500)' }}>{k}</div>
    <div className="t-body-sm" style={{ color: 'var(--color-ink)' }}>{v}</div>
  </div>
);

// ── Main frame ───────────────────────────────────────────────────────────────
function SpaceDetailFrame({ state = 'normal' }) {
  const isUnverified = state === 'unverified';
  const isSaved = state === 'saved';

  // Default open sections (per spec: first two open on entry)
  const [open, setOpen] = useState({
    avail: true,
    info: true,
    location: false,
    biz: false,
    host: false,
  });
  const toggle = (k) => setOpen({ ...open, [k]: !open[k] });

  // Content
  const verified = {
    no: '1042',
    townSlug: 'SEONGSU',
    title: '성수동 12평 1층 통유리 코너',
    address: '성동구 성수동2가 · 1층 12평',
    full: '서울 성동구 성수동2가 268-12 1층',
    coord: '37.5444, 127.0563',
    area: '39.7㎡ (12평)',
    photos: [
      { label: '외관' }, { label: '내부 전경' }, { label: '내부 다른 각도' },
      { label: '화장실 / 주방' }, { label: '자유' },
    ],
    town: '성수동 팝업타운',
  };
  const unverified = {
    no: '1088',
    townSlug: 'MANGWON',
    title: '망원동 8평 1층 골목 가게',
    address: '마포구 망원동 · 1층 8평',
    full: '서울 마포구 망원동 414-7 1층',
    coord: '37.5552, 126.9043',
    area: '26.4㎡ (8평)',
    photos: [
      { label: '외관' }, { label: '내부 전경' }, { label: '내부 다른 각도' }, { label: '자유' },
    ],
    town: '망원동 팝업타운',
  };
  const c = isUnverified ? unverified : verified;
  const badge = isUnverified ? <UnverifiedBadge /> : <PhotoVerifiedBadge />;

  return (
    <div className="popin" style={{
      width: 390, position: 'relative',
      background: 'var(--color-paper-pure)',
      display: 'flex', flexDirection: 'column',
    }}>
      <Header saved={isSaved} />

      {/* Unverified notice strip */}
      {isUnverified && (
        <div style={{
          padding: '12px var(--s-5)',
          background: 'var(--color-gray-50)',
          borderBottom: '1px solid var(--color-gray-100)',
          display: 'flex', gap: 'var(--s-3)', alignItems: 'flex-start',
        }}>
          <span style={{ color: 'var(--color-gray-500)', marginTop: 2 }}><Ico.Info /></span>
          <div>
            <div className="t-body-sm" style={{ color: 'var(--color-ink)', fontWeight: 700 }}>이 공간은 검증 대기 중입니다</div>
            <div className="t-body-sm" style={{ color: 'var(--color-gray-500)' }}>며칠 내 검증이 완료돼요.</div>
          </div>
        </div>
      )}

      {/* Carousel */}
      <Carousel photos={c.photos} idx={1} badge={badge} />

      {/* Title block */}
      <div style={{ padding: 'var(--s-6) var(--s-5) var(--s-4)' }}>
        <div className="t-mono-sm" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--s-3)' }}>
          SPACE NO. {c.no} <span style={{ opacity: 0.5 }}>·</span> {c.townSlug}
        </div>
        <h1 className="t-h1" style={{ margin: 0 }}>{c.title}</h1>
        <div className="t-body-sm" style={{ color: 'var(--color-gray-500)', marginTop: 'var(--s-3)' }}>
          {c.address}
        </div>
      </div>

      {/* Price */}
      <div style={{ padding: '0 var(--s-5) var(--s-6)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--s-3)', flexWrap: 'wrap' }}>
          <span className="t-price">1주 250만</span>
          <span className="chip chip-accent">협의 가능</span>
        </div>
        <div className="t-body-sm" style={{ color: 'var(--color-gray-500)', marginTop: 'var(--s-2)' }}>
          1일 50만 <span style={{ color: 'var(--color-gray-300)' }}>·</span> 1개월 800만 <span style={{ color: 'var(--color-gray-300)' }}>·</span> 보증금 20만
        </div>
      </div>

      <div className="divider" />

      {/* Section: 가용 기간 */}
      <Section koTitle="가용 기간" enCaption="AVAILABILITY · NOV 1 — DEC 31"
        open={open.avail} onToggle={() => toggle('avail')}>
        <MiniCal year={2026} month={11} firstDow={0} daysInMonth={30}
          available={true}
          highlight={[9, 15]}
          label="2026.11" />
        <div style={{ display: 'flex', gap: 'var(--s-4)', marginTop: 'var(--s-4)' }}>
          <Legend swatch="var(--color-accent-soft)" label="가능" />
          <Legend swatch="rgba(199,144,26,0.18)" label="협의 중" />
        </div>
        <div className="t-body-sm" style={{ color: 'var(--color-gray-500)', marginTop: 'var(--s-3)' }}>
          최소 3일부터 대여 가능
        </div>
      </Section>

      {/* Section: 공간 정보 */}
      <Section koTitle="공간 정보" enCaption="SPECS"
        open={open.info} onToggle={() => toggle('info')}>
        <div style={{ borderTop: '1px solid var(--color-gray-100)' }}>
          <SpecRow k="면적" v={c.area + ' · 1층'} />
          <SpecRow k="전기" v="단상 220V (계량기 별도)" />
          <SpecRow k="화장실" v="전용 ○" />
          <SpecRow k="수도" v="○" />
          <SpecRow k="냉난방" v="개별 에어컨 벽걸이 1" />
          <SpecRow k="주차" v="✕ (도보 5분 공영주차장)" />
          <SpecRow k="출입" v="셔터 + 키 · 24시간" />
        </div>
      </Section>

      {/* Section: 위치 (closed) */}
      <Section koTitle="위치" enCaption="LOCATION"
        open={open.location} onToggle={() => toggle('location')}>
        <div style={{
          width: '100%', aspectRatio: '16 / 10',
          background: 'var(--color-gray-100)',
          borderRadius: 'var(--r-md)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(0deg, transparent 0 28px, rgba(10,10,10,0.04) 28px 29px), repeating-linear-gradient(90deg, transparent 0 28px, rgba(10,10,10,0.04) 28px 29px)',
          }}/>
          {/* center pin */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -100%)',
          }}>
            <div style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--color-accent)', border: '3px solid #fff', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }}/>
          </div>
          <div className="t-mono-xs" style={{
            position: 'absolute', top: 'var(--s-3)', left: 'var(--s-3)',
            background: 'rgba(255,255,255,0.85)', padding: '4px 8px', borderRadius: 'var(--r-sm)',
            color: 'var(--color-gray-500)',
          }}>NAVER MAP</div>
        </div>
        <div style={{ marginTop: 'var(--s-4)' }}>
          <div className="t-body-sm" style={{ color: 'var(--color-ink)' }}>{c.full}</div>
          <div className="t-mono-sm" style={{ color: 'var(--color-gray-500)', marginTop: 4 }}>{c.coord}</div>
        </div>
        <div style={{ marginTop: 'var(--s-4)', display: 'flex', flexDirection: 'column', gap: 'var(--s-2)' }}>
          <div className="t-body-sm">🚇 성수역 2호선 <span style={{ color: 'var(--color-gray-500)' }}>도보 3분 (240m)</span></div>
          <div className="t-body-sm">🚇 뚝섬역 2호선 <span style={{ color: 'var(--color-gray-500)' }}>도보 8분 (620m)</span></div>
        </div>
      </Section>

      {/* Section: 허용/금지 업종 (closed) */}
      <Section koTitle="허용·금지 업종" enCaption="USE TYPES"
        open={open.biz} onToggle={() => toggle('biz')}>
        <div className="t-caption" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--s-2)' }}>허용</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-2)', marginBottom: 'var(--s-4)' }}>
          {['카페형','매장형','전시형','촬영'].map(t => <span key={t} className="chip chip-gray">{t}</span>)}
        </div>
        <div className="t-caption" style={{ color: 'var(--color-gray-500)', marginBottom: 'var(--s-2)' }}>금지</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--s-2)' }}>
          {['음주류 판매','음식 조리(연기)','종교 행사'].map(t => (
            <span key={t} className="chip" style={{ background: 'var(--color-gray-50)', color: 'var(--color-gray-500)', textDecoration: 'line-through' }}>{t}</span>
          ))}
        </div>
      </Section>

      {/* Section: 임대인 소개 (closed) */}
      <Section koTitle="임대인 소개" enCaption="HOST"
        open={open.host} onToggle={() => toggle('host')}>
        <div style={{ display: 'flex', gap: 'var(--s-4)', alignItems: 'center' }}>
          <div style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'var(--color-ink)', color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, fontWeight: 700,
          }}>박</div>
          <div>
            <div className="t-body" style={{ fontWeight: 700 }}>박○○ 사장님</div>
            <div className="t-body-sm" style={{ color: 'var(--color-gray-500)' }}>등록 공간 1개 · 평균 응답 4시간 22분</div>
          </div>
        </div>
        <div className="t-body-sm" style={{
          marginTop: 'var(--s-4)', color: 'var(--color-gray-700)',
          padding: 'var(--s-4)', background: 'var(--color-gray-50)',
          borderRadius: 'var(--r-md)',
        }}>
          “성수역에서 도보 3분, 카페거리 안쪽 골목. 통유리 코너 자리라 외부 노출이 좋아요.
          짧게는 3일부터, 길게는 한 달까지 협의 가능합니다.”
        </div>
      </Section>

      {/* Town reference strip — only for verified */}
      {!isUnverified && (
        <button style={{
          width: '100%', padding: 'var(--s-5)',
          background: 'var(--color-paper-pure)',
          border: 'none', borderBottom: '1px solid var(--color-gray-100)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', textAlign: 'left',
        }}>
          <div>
            <div className="t-mono-xs" style={{ color: 'var(--color-gray-500)', marginBottom: 2 }}>POPUP TOWN NO. 01</div>
            <div className="t-body" style={{ fontWeight: 500 }}>이 공간은 <span style={{ color: 'var(--color-accent)', fontWeight: 700 }}>성수동 팝업타운</span>에 속해요</div>
          </div>
          <Ico.ArrowRight />
        </button>
      )}

      {/* Footer small links */}
      <div style={{
        padding: 'var(--s-5)',
        display: 'flex', gap: 'var(--s-4)',
        color: 'var(--color-gray-500)',
      }}>
        <button style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' }}>
          <Ico.Download /><span className="t-body-sm">표준 계약서</span>
        </button>
        <button style={{ background: 'none', border: 'none', padding: 0, color: 'inherit', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' }}>
          <Ico.Flag /><span className="t-body-sm">신고하기</span>
        </button>
      </div>

      {/* Spacer above sticky CTA */}
      <div style={{ height: 'calc(var(--sticky-cta-h) + 16px)' }} />

      {/* Sticky bottom CTA */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height: 'var(--sticky-cta-h)',
        padding: '12px var(--s-5) calc(var(--s-5) + 4px)',
        background: 'var(--color-paper-pure)',
        borderTop: '1px solid var(--color-gray-100)',
      }}>
        <button className="cta">문의하기</button>
      </div>
    </div>
  );
}

const Legend = ({ swatch, label }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
    <span style={{ width: 12, height: 12, borderRadius: 3, background: swatch }} />
    <span className="t-mono-xs" style={{ color: 'var(--color-gray-500)' }}>{label}</span>
  </div>
);

Object.assign(window, { SpaceDetailFrame });
