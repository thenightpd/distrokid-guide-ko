const official = {
  intro: "https://support.distrokid.com/hc/ko/categories/360001223113-%EA%B8%B0%EB%B3%B8-%EC%82%AC%ED%95%AD",
  upload: "https://support.distrokid.com/hc/ko/categories/360001857214-%25EC%2597%2585%25EB%25A1%259C%25EB%2593%259C",
  pricing: "https://distrokid.com/pricing/",
  earnings: "https://support.distrokid.com/hc/ko/categories/360001857274-%EC%88%98%EC%9D%B5%EA%B8%88-%EC%A7%80%EA%B8%89%EB%B0%9B%EA%B8%B0",
  payout: "https://support.distrokid.com/hc/ko/articles/39076091905555-%EC%88%98%EC%9D%B5%EA%B8%88-%EC%B6%9C%EA%B8%88%ED%95%98%EA%B8%B0",
  ownership: "https://support.distrokid.com/hc/ko/articles/360013535234-%EC%9D%8C%EC%95%85%EC%97%90-%EB%8C%80%ED%95%9C-%EC%86%8C%EC%9C%A0%EA%B6%8C",
  edit: "https://support.distrokid.com/hc/ko/articles/360013649333-%EC%97%85%EB%A1%9C%EB%93%9C%ED%95%9C-%EB%B0%9C%EB%A7%A4%EC%9E%91%EC%9D%84-%EB%B3%80%EA%B2%BD%ED%95%A0-%EC%88%98-%EC%9E%88%EB%82%98%EC%9A%94",
  cancel: "https://support.distrokid.com/hc/ko/articles/360013535494-%EC%97%B0%ED%9A%8C%EB%B9%84%EB%A5%BC-%EB%82%A9%EB%B6%80%ED%95%98%EC%A7%80-%EC%95%8A%EC%9C%BC%EB%A9%B4-%EC%96%B4%EB%96%BB%EA%B2%8C-%EB%90%98%EB%82%98%EC%9A%94",
  delete: "https://support.distrokid.com/hc/ko/articles/360013649193-%EC%8A%A4%ED%8A%B8%EB%A6%AC%EB%B0%8D-%EC%84%9C%EB%B9%84%EC%8A%A4%EC%97%90%EC%84%9C-%EB%B0%9C%EB%A7%A4%EC%9E%91-%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0",
  ai: "https://support.distrokid.com/hc/ko/articles/50784709021971-AI-%ED%81%AC%EB%A0%88%EB%94%A7-%EC%9E%91%EC%84%B1-%EB%B0%A9%EB%B2%95",
  pro: "https://support.distrokid.com/hc/ko/articles/360013534514-DistroKid%EB%8A%94-BMI-ASCAP-%EB%98%90%EB%8A%94-%EB%8B%A4%EB%A5%B8-PRO-%EA%B3%B5%EC%97%B0%EA%B6%8C-%EA%B4%80%EB%A6%AC%EB%8B%A8%EC%B2%B4-%EC%97%90-%EB%93%B1%EB%A1%9D%ED%95%98%EB%82%98%EC%9A%94-%EC%95%84%ED%8B%B0%EC%8A%A4%ED%8A%B8%EB%A1%9C%EC%84%9C-%EC%A0%9C%EA%B0%80-%ED%95%B4%EC%95%BC-%ED%95%98%EB%82%98%EC%9A%94",
};

const nav = [
  ["summary", "한눈에 보기"],
  ["distribution", "음원 유통이 뭐예요?"],
  ["compare", "다른 유통사와 비교"],
  ["prepare", "등록 전 준비물"],
  ["upload", "실제 등록 순서"],
  ["mistakes", "자주 하는 실수"],
  ["after", "발매 후 할 일"],
  ["money", "수익과 정산"],
  ["rights", "저작권과 권리"],
  ["manage", "수정·삭제·이동"],
  ["checklist", "최종 체크리스트"],
  ["faq", "자주 묻는 질문"],
];

const distributors = [
  {
    name: "DistroKid",
    model: "연간 구독",
    fit: "싱글을 자주 내는 1인 아티스트",
    note: "무제한 업로드와 간단한 화면이 강점. 예약 발매는 Musician Plus 이상에서 가능해요.",
    url: "https://distrokid.com/pricing/",
  },
  {
    name: "TuneCore",
    model: "연간 구독 또는 발매별 결제",
    fit: "요금 방식을 비교해서 고르고 싶은 사람",
    note: "무제한 플랜과 발매별 결제가 모두 있어요.",
    url: "https://www.tunecore.com/pricing",
  },
  {
    name: "CD Baby",
    model: "발매할 때 한 번 결제",
    fit: "발매 횟수가 적고 연회비가 싫은 사람",
    note: "싱글·앨범마다 비용을 내고, 디지털 수익 일부를 수수료로 가져가는 구조예요.",
    url: "https://cdbaby.com/music-distribution/",
  },
  {
    name: "Ditto Music",
    model: "연간 구독",
    fit: "여러 곡을 꾸준히 내는 아티스트",
    note: "아티스트 수에 따라 플랜이 달라지고 무제한 발매를 내세워요.",
    url: "https://dittomusic.com/en/pricing",
  },
  {
    name: "Amuse",
    model: "연간 구독",
    fit: "모바일 관리와 빠른 발매를 선호하는 사람",
    note: "플랜별 아티스트 수와 지원 속도가 달라요. 구독 종료 뒤 정책도 비교해 보세요.",
    url: "https://www.amuse.io/en/pricing",
  },
];

const faqs = [
  ["사업자가 없어도 발매할 수 있나요?", "네. 개인 아티스트도 가입하고 발매할 수 있어요. 다만 정산을 받으려면 본인 확인, 지급 방법, 세금 정보를 정확히 입력해야 합니다."],
  ["한글 아티스트명도 괜찮나요?", "가능해요. 가장 중요한 건 일관성입니다. 이미 같은 이름의 아티스트가 있는지 먼저 검색하고, 다음 발매에서도 띄어쓰기와 대소문자까지 똑같이 쓰세요."],
  ["유튜브에 먼저 올린 곡도 등록할 수 있나요?", "본인이 권리를 가진 곡이라면 보통 가능합니다. DistroKid를 통한 YouTube Music 배포와 내 채널에 영상을 올리는 일은 서로 다른 작업이에요."],
  ["무료 비트로 만든 곡도 발매할 수 있나요?", "‘무료’가 상업 이용과 음원 유통까지 허용한다는 뜻인지 라이선스를 확인해야 해요. Content ID 등록 가능 여부와 수익화 조건도 함께 보세요."],
  ["AI로 만든 음악도 등록할 수 있나요?", "업로드 화면에서 AI 사용 범위를 표시할 수 있어요. 그래도 타인의 목소리·이름·저작물을 무단으로 흉내 내거나 사용하면 안 됩니다. 사용한 생성 도구의 상업 이용 약관도 확인하세요."],
  ["발매 후 제목이나 커버를 바꿀 수 있나요?", "일부 정보는 수정 요청이 가능하지만 모든 플랫폼 반영까지 시간이 걸릴 수 있어요. 오디오 교체는 요금제 제한이 있으니 제출 전에 최종본을 확인하는 편이 안전합니다."],
  ["구독을 끊으면 음원이 남아 있나요?", "일반적으로 연간 구독이 끝나면 발매작이 내려갈 수 있어요. 발매작별 유료 옵션인 Leave a Legacy를 추가한 경우는 예외가 될 수 있습니다."],
  ["수익은 언제 보이나요?", "플랫폼 보고가 늦게 들어오기 때문에 바로 보이지 않아요. 보통 발매 후 약 3개월부터 주요 서비스 수익이 보이기 시작하지만 서비스마다 차이가 있습니다."],
];

function SourceLink({ href, children = "공식 안내 보기" }: { href: string; children?: React.ReactNode }) {
  return <a className="source-link" href={href} target="_blank" rel="noreferrer">{children}<span aria-hidden="true">↗</span></a>;
}

function Step({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="step">
      <span className="step-number">{number}</span>
      <div><h3>{title}</h3><div className="step-copy">{children}</div></div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="hero">
        <nav className="topbar" aria-label="상단 메뉴">
          <a className="brand" href="#top" aria-label="처음으로">RELEASE NOTE</a>
          <span className="guide-badge">비공식 초보자 가이드</span>
        </nav>
        <div className="hero-grid" id="top">
          <div>
            <p className="eyebrow">내 노래를 세상에 꺼내는 첫걸음</p>
            <h1>디스트로키드로<br /><em>음원 발매하기</em></h1>
            <p className="hero-copy">처음 보면 입력칸도 많고 영어도 많아서 어렵게 느껴져요. 하지만 준비물만 챙기면 실제 등록은 생각보다 단순합니다. 이 페이지를 위에서부터 차근차근 따라오세요.</p>
            <div className="hero-actions">
              <a className="button primary" href="#summary">10분 요약부터 보기</a>
              <a className="button secondary" href="#upload">등록 순서 바로 보기</a>
            </div>
          </div>
          <div className="record-card" aria-label="가이드 핵심 문구">
            <div className="record-disc"><span>PLAY</span></div>
            <div className="record-meta"><span>01</span><strong>준비하고</strong></div>
            <div className="record-meta"><span>02</span><strong>등록하고</strong></div>
            <div className="record-meta"><span>03</span><strong>알리기</strong></div>
          </div>
        </div>
      </header>

      <div className="page-shell">
        <aside className="side-nav" aria-label="목차">
          <p>목차</p>
          <ol>{nav.map(([id, label], index) => <li key={id}><a href={`#${id}`}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a></li>)}</ol>
        </aside>

        <article className="content">
          <section className="section summary-section" id="summary">
            <div className="section-heading"><span className="chapter">먼저 이것부터</span><h2>한눈에 보는 핵심 요약</h2></div>
            <div className="summary-grid">
              <div className="summary-card lime"><span className="summary-label">무엇을 하는 곳?</span><strong>음원 유통사</strong><p>내 음원과 정보를 Spotify, Apple Music, YouTube Music 같은 서비스로 보내고 수익을 모아줘요.</p></div>
              <div className="summary-card"><span className="summary-label">기본 비용</span><strong>연 $24.99부터</strong><p>2026년 8월 미국 표시 가격 기준이에요. 결제 통화와 세금에 따라 달라질 수 있어요.</p></div>
              <div className="summary-card"><span className="summary-label">필수 준비물</span><strong>음원 + 커버 + 정보</strong><p>WAV 또는 FLAC, 정사각형 JPG, 아티스트명과 곡 정보를 준비하면 됩니다.</p></div>
              <div className="summary-card coral"><span className="summary-label">추천 일정</span><strong>4주 전에 업로드</strong><p>모든 플랫폼을 같은 날 열고 홍보할 계획이라면 넉넉하게 잡는 편이 좋아요.</p></div>
            </div>
            <div className="quick-answer">
              <span>딱 한 문장으로</span>
              <p><strong>DistroKid는 음원을 만드는 곳이 아니라, 완성된 음원을 여러 음악 서비스에 대신 등록해 주는 곳이에요.</strong></p>
            </div>
            <div className="choice-box">
              <div><span className="mini-title">처음 한 곡을 예약 발매한다면</span><h3>Musician Plus가 편해요.</h3></div>
              <p>가장 저렴한 Musician 플랜은 곡이 준비되는 대로 발매되는 방식이에요. 원하는 날짜를 정해서 발매하고 싶다면 Musician Plus 이상이 필요합니다. 가격과 포함 기능은 결제 직전 공식 페이지에서 한 번 더 확인하세요.</p>
              <SourceLink href={official.pricing}>최신 요금제 확인하기</SourceLink>
            </div>
            <p className="updated">마지막 내용 확인일 2026년 8월 14일. 요금과 정책은 바뀔 수 있습니다.</p>
          </section>

          <section className="section" id="distribution">
            <div className="section-heading"><span className="chapter">01</span><h2>음원 유통이 뭐예요?</h2><p>음원을 완성했다고 해서 Spotify나 Apple Music에 파일을 직접 올릴 수 있는 건 아니에요. 그 사이를 연결해 주는 곳이 음원 유통사입니다.</p></div>
            <div className="flow" aria-label="음원 유통 과정">
              <div><span>1</span><strong>나</strong><small>음원·커버·정보 준비</small></div><b aria-hidden="true">→</b>
              <div><span>2</span><strong>유통사</strong><small>검수·전달·수익 취합</small></div><b aria-hidden="true">→</b>
              <div><span>3</span><strong>음원 플랫폼</strong><small>공개·재생·정산 보고</small></div><b aria-hidden="true">→</b>
              <div><span>4</span><strong>리스너</strong><small>검색하고 듣고 공유</small></div>
            </div>
            <div className="two-col">
              <div className="info-card"><h3>유통하면 좋은 점</h3><ul className="check-list"><li>한 번의 등록으로 여러 플랫폼에 음원을 보낼 수 있어요.</li><li>재생과 판매로 생긴 수익을 한곳에서 확인할 수 있어요.</li><li>ISRC와 UPC 같은 발매 식별 코드가 만들어져요.</li><li>아티스트 페이지와 발매 링크를 만들 수 있어요.</li><li>Instagram·TikTok의 음악 검색에도 노출될 수 있어요.</li></ul></div>
              <div className="info-card warning"><h3>유통사가 하지 않는 일</h3><ul><li>노래를 자동으로 홍보해 주지는 않아요.</li><li>저작권 협회 등록을 대신해 주지 않아요.</li><li>무단 샘플이나 비트의 권리를 해결해 주지 않아요.</li><li>재생 수나 수익을 보장하지 않아요.</li></ul></div>
            </div>
            <p className="plain-note">DistroKid에 올려도 음원의 소유권은 아티스트에게 남습니다. 다만 ‘유통’과 ‘저작권 등록·관리’는 별개의 일이에요.</p>
            <SourceLink href={official.intro} /> <SourceLink href={official.ownership}>음원 소유권 안내</SourceLink>
          </section>

          <section className="section" id="compare">
            <div className="section-heading"><span className="chapter">02</span><h2>비슷한 유통사는 어디가 있나요?</h2><p>어디가 무조건 최고라기보다, 몇 곡을 얼마나 자주 낼지에 따라 답이 달라져요.</p></div>
            <div className="comparison" role="list">
              {distributors.map((item) => (
                <a className="compare-row" href={item.url} target="_blank" rel="noreferrer" key={item.name} role="listitem">
                  <strong>{item.name}</strong><span className="model">{item.model}</span><span><b>{item.fit}</b>{item.note}</span><i aria-hidden="true">↗</i>
                </a>
              ))}
            </div>
            <div className="decision-strip"><strong>빠르게 고르는 법</strong><p><b>자주 발매한다면</b> 연간 무제한형을 먼저 보고, <b>1년에 한두 번만 발매한다면</b> 발매별 결제형도 비교해 보세요. 한국 청취자가 중요하다면 멜론·지니·FLO·벅스·VIBE가 실제 업로드 화면의 전송 대상에 있는지도 꼭 확인하세요.</p></div>
          </section>

          <section className="section" id="prepare">
            <div className="section-heading"><span className="chapter">03</span><h2>등록 전에 이것부터 준비하세요.</h2><p>업로드 화면을 열기 전에 아래 내용을 메모장 하나에 정리해 두면 훨씬 빨리 끝납니다.</p></div>
            <div className="prep-grid">
              <div className="prep-card"><span>WAV</span><h3>최종 음원 파일</h3><p>믹싱과 마스터링까지 끝난 진짜 최종본을 준비하세요. WAV 또는 FLAC을 추천해요. 일반적인 WAV는 16bit, 44.1kHz예요.</p></div>
              <div className="prep-card"><span>JPG</span><h3>커버 이미지</h3><p>정사각형 JPG, RGB 색상으로 준비하세요. 최소 1000×1000이고, 3000×3000을 권장해요.</p></div>
              <div className="prep-card"><span>ABC</span><h3>발매 정보</h3><p>아티스트명, 곡명, 앨범명, 장르, 언어, 발매일을 띄어쓰기까지 확정하세요.</p></div>
              <div className="prep-card"><span>©</span><h3>참여자와 권리</h3><p>작사·작곡자 실명, 피처링, 프로듀서, 수익 지분과 샘플·비트 사용 허가를 확인하세요.</p></div>
            </div>
            <div className="callout"><span aria-hidden="true">!</span><div><h3>커버에 넣으면 안 되는 것부터 확인하세요.</h3><p>흐린 이미지, 웹사이트 주소, SNS 아이디, 가격, 스트리밍 서비스 로고, 발매 정보와 맞지 않는 글자는 거절 원인이 될 수 있어요. 저작권이 없는 사진이나 유명 캐릭터도 쓰면 안 됩니다.</p></div></div>
            <SourceLink href={official.upload}>파일과 커버 규격 확인하기</SourceLink>
          </section>

          <section className="section" id="upload">
            <div className="section-heading"><span className="chapter">04</span><h2>실제 등록은 이렇게 진행해요.</h2><p>가입한 뒤 대시보드에서 ‘업로드’를 누르면 시작됩니다. 화면 문구가 조금 바뀌어도 입력 순서는 거의 같아요.</p></div>
            <div className="steps">
              <Step number="01" title="요금제를 고릅니다."><p>한 아티스트만 빠르게 발매하면 Musician, 예약 발매와 세부 설정이 필요하면 Musician Plus, 여러 아티스트를 관리하면 Ultimate를 살펴보세요. 모두 연간 자동 갱신 방식입니다.</p></Step>
              <Step number="02" title="보낼 음원 사이트를 선택합니다."><p>Spotify, Apple Music, YouTube Music, Amazon Music, TikTok, Instagram/Facebook 등 원하는 곳을 체크하세요. 국내 플랫폼이 중요하면 제출 당시 목록을 직접 확인하세요.</p></Step>
              <Step number="03" title="싱글인지 앨범인지 정합니다."><p>트랙 수를 고르고, 이미 발매된 곡인지 새 발매인지 표시합니다. 같은 곡을 다른 유통사에서 옮기는 중이라면 기존 ISRC와 동일한 메타데이터를 준비하세요.</p></Step>
              <Step number="04" title="아티스트 페이지를 정확히 연결합니다."><p>기존 Spotify·Apple Music·YouTube Music 아티스트 페이지가 있다면 해당 페이지를 선택하세요. 동명이인의 페이지로 잘못 연결되는 실수가 가장 골치 아파요.</p></Step>
              <Step number="05" title="발매일과 기본 정보를 입력합니다."><p>아티스트명, 앨범명, 장르, 언어, 레이블명을 입력합니다. 모든 플랫폼 동시 발매가 중요하면 최소 4주 전에 예약하세요. 예약 날짜 지정은 Musician Plus 이상에서 가능합니다.</p></Step>
              <Step number="06" title="커버와 트랙을 올립니다."><p>커버 이미지와 음원 파일을 업로드하고 곡 제목, 작사·작곡자, 피처링, 버전 정보, 가사, explicit 여부를 차례로 입력합니다. AI를 사용했다면 사용 범위도 사실대로 표시하세요.</p></Step>
              <Step number="07" title="추가 옵션은 바로 결제하지 말고 읽어봅니다."><p>소셜 미디어 팩, 커버곡 라이선스, Leave a Legacy 같은 옵션은 목적이 분명할 때만 고르세요. 일부는 발매마다 또는 매년 비용이 붙습니다.</p></Step>
              <Step number="08" title="마지막 검토 후 제출합니다."><p>아티스트명, 곡명, 참여자, 음원 버전, 발매일을 소리 내어 한 번 확인하세요. ISRC와 UPC가 없다면 DistroKid가 무료로 자동 생성합니다.</p></Step>
            </div>
            <div className="timeline"><strong>업로드 뒤에는</strong><span><b>제출</b> DistroKid 처리</span><span><b>며칠 안</b> 플랫폼별 검토</span><span><b>발매일</b> 공개 및 링크 확인</span><span><b>약 3개월부터</b> 주요 수익 반영 시작</span></div>
            <SourceLink href={official.upload}>DistroKid 단계별 공식 가이드</SourceLink>
          </section>

          <section className="section" id="mistakes">
            <div className="section-heading"><span className="chapter">05</span><h2>여기서 많이 틀려요.</h2><p>등록 자체보다 수정이 더 오래 걸립니다. 아래 여섯 가지만은 제출 전에 꼭 확인하세요.</p></div>
            <div className="mistake-grid">
              <div><span>01</span><h3>아티스트명 흔들림</h3><p>‘가요방’과 ‘가요 방’은 다른 이름으로 인식될 수 있어요. 발매마다 정확히 같게 쓰세요.</p></div>
              <div><span>02</span><h3>동명이인 페이지 연결</h3><p>이름만 보고 고르지 말고 기존 아티스트 페이지 주소를 확인하세요.</p></div>
              <div><span>03</span><h3>피처링을 제목에 직접 입력</h3><p>업로드 화면의 피처링 입력 기능을 사용하세요. 플랫폼 표기 규칙을 따라야 합니다.</p></div>
              <div><span>04</span><h3>권리 없는 비트와 샘플</h3><p>구매 영수증만 보지 말고 음원 유통·상업 이용·Content ID 허용 범위를 확인하세요.</p></div>
              <div><span>05</span><h3>촉박한 발매일</h3><p>플랫폼마다 처리 속도가 달라요. 홍보와 플레이리스트 피칭까지 생각하면 4주가 편합니다.</p></div>
              <div><span>06</span><h3>유료 옵션 전부 체크</h3><p>기본 구독료 외 추가 비용이 커질 수 있어요. 옵션마다 일회성인지 연간인지 확인하세요.</p></div>
            </div>
          </section>

          <section className="section" id="after">
            <div className="section-heading"><span className="chapter">06</span><h2>발매했다고 끝은 아니에요.</h2><p>이제 사람들이 내 음악을 제대로 찾도록 문을 열어 줄 차례입니다.</p></div>
            <div className="after-list">
              <div><span>발매 전</span><h3>HyperFollow 링크를 공유해요.</h3><p>DistroKid가 만들어 주는 무료 링크예요. 발매 전에는 Spotify 사전 저장을 받고, 발매 후에는 여러 플랫폼 링크가 한곳에 모입니다.</p></div>
              <div><span>발매 직후</span><h3>플랫폼마다 직접 검색해 봐요.</h3><p>곡명과 아티스트명을 검색해 보고, 동명이인의 페이지에 들어가지는 않았는지 확인하세요.</p></div>
              <div><span>첫 주</span><h3>아티스트 페이지를 인증해요.</h3><p>Spotify for Artists, Apple Music for Artists, Amazon Music for Artists에서 사진과 소개를 정리하고 통계를 확인하세요.</p></div>
              <div><span>계속</span><h3>링크보다 이야기를 같이 올려요.</h3><p>그냥 “들어주세요”보다 곡을 만든 이유, 한 소절, 비하인드 영상처럼 들을 이유를 함께 전해 보세요.</p></div>
            </div>
          </section>

          <section className="section" id="money">
            <div className="section-heading"><span className="chapter">07</span><h2>수익과 정산은 이렇게 봐요.</h2><p>오늘 재생된 금액이 내일 바로 보이는 구조는 아니에요.</p></div>
            <div className="money-hero"><div><span>STORE</span><b>재생·판매 발생</b></div><i>→</i><div><span>REPORT</span><b>플랫폼이 몇 달 뒤 보고</b></div><i>→</i><div><span>BANK</span><b>DistroKid Bank에 반영</b></div><i>→</i><div><span>PAYOUT</span><b>내 지급 수단으로 출금</b></div></div>
            <div className="two-col">
              <div className="info-card"><h3>알아둘 숫자</h3><ul><li>주요 서비스 수익은 보통 발매 후 약 3개월부터 보이기 시작해요.</li><li>공식 안내상 최소 출금 기준은 미화 6달러에 출금 수수료를 더한 금액이에요.</li><li>출금을 요청한 뒤 지급까지 최대 14일이 걸릴 수 있어요.</li></ul></div>
              <div className="info-card"><h3>‘100% 수익’의 정확한 뜻</h3><p>DistroKid는 일반 스트리밍·판매 수익에서 유통 비율 수수료를 떼지 않는다고 안내해요. 하지만 결제 대행 수수료, 환전 비용, 세금은 빠질 수 있고, 소셜 미디어 팩 수익에는 별도 비율이 적용됩니다.</p></div>
            </div>
            <div className="plain-note"><strong>세금은 미루지 마세요.</strong> 출금 전에 Tipalti에서 본인 정보, 지급 방법, 세금 양식을 작성해야 해요. 거주 국가와 조세조약 적용 여부에 따라 원천징수가 달라질 수 있으니, 금액이 커지면 세무 전문가에게 확인하세요.</div>
            <SourceLink href={official.earnings}>수익 반영 안내</SourceLink> <SourceLink href={official.payout}>출금 안내</SourceLink>
          </section>

          <section className="section" id="rights">
            <div className="section-heading"><span className="chapter">08</span><h2>저작권과 권리는 따로 챙겨야 해요.</h2><p>“DistroKid에 등록했으니 저작권 등록도 끝났다”는 말은 틀립니다.</p></div>
            <div className="rights-split">
              <div><span className="big-word">유통</span><h3>DistroKid가 하는 일</h3><p>녹음된 음원과 발매 정보를 플랫폼에 보내고, 플랫폼에서 들어온 수익을 모아 줍니다.</p></div>
              <div><span className="big-word">권리 관리</span><h3>별도로 확인할 일</h3><p>작사·작곡 저작권의 등록과 신탁, 실연자·음반제작자의 저작인접권, 계약과 지분 관리는 별도 영역입니다.</p></div>
            </div>
            <div className="rights-rules">
              <div><b>내 원곡</b><p>공동 작사·작곡자가 있다면 지분과 표기를 발매 전에 합의하세요.</p></div>
              <div><b>커버곡</b><p>원곡을 새로 연주·노래한 경우에도 라이선스가 필요할 수 있어요. DistroKid의 커버 라이선스는 적용 범위와 국가 제한을 꼭 읽으세요.</p></div>
              <div><b>샘플·비트</b><p>샘플 원본과 비트 제작자의 허가가 필요해요. 상업 이용 가능만으로 Content ID까지 가능한 건 아닙니다.</p></div>
              <div><b>AI 사용</b><p>AI 사용 범위를 표시하고, 타인의 목소리·초상·이름·저작물을 무단으로 사용하지 마세요.</p></div>
            </div>
            <p className="plain-note">DistroKid는 공연권 관리단체나 저작권 신탁단체에 곡을 자동 등록하지 않는다고 안내합니다.</p>
            <SourceLink href={official.pro}>저작권 관리 관련 공식 안내</SourceLink> <SourceLink href={official.ai}>AI 크레딧 안내</SourceLink>
          </section>

          <section className="section" id="manage">
            <div className="section-heading"><span className="chapter">09</span><h2>수정·삭제·유통사 이동도 알아두세요.</h2></div>
            <div className="manage-grid">
              <div><span>수정</span><h3>‘발매작 수정’에서 요청</h3><p>아티스트명, 제목, 커버, 참여자 등은 수정 요청이 가능하지만 모든 서비스에 반영되기까지 1~2주가 걸릴 수 있어요. 오디오 교체는 Ultimate 기능입니다.</p><SourceLink href={official.edit} /></div>
              <div><span>삭제</span><h3>삭제도 바로 되지 않아요.</h3><p>대시보드에서 삭제를 요청하면 모든 서비스에서 내려가기까지 보통 1~2주가 걸릴 수 있어요. 삭제 전에 정말 필요한지 한 번 더 생각하세요.</p><SourceLink href={official.delete} /></div>
              <div><span>구독 종료</span><h3>음원이 내려갈 수 있어요.</h3><p>연회비를 갱신하지 않으면 발매작이 삭제될 수 있습니다. Leave a Legacy는 선택한 발매작을 구독 종료 뒤에도 남기는 유료 옵션이에요.</p><SourceLink href={official.cancel} /></div>
              <div><span>유통사 이동</span><h3>같은 ISRC를 유지하세요.</h3><p>기존 곡의 ISRC, 음원 파일, 곡명, 아티스트명, 발매 정보를 동일하게 맞춰 새 유통사에 올린 뒤, 새 버전이 정상 연결된 것을 확인하고 이전 버전을 내리는 순서가 안전해요.</p></div>
            </div>
          </section>

          <section className="section checklist-section" id="checklist">
            <div className="section-heading"><span className="chapter">10</span><h2>제출 직전, 이것만 체크하세요.</h2><p>화면을 캡처하거나 체크하면서 하나씩 확인해 보세요.</p></div>
            <div className="check-columns">
              <div><h3>파일</h3><label><input type="checkbox" /> 최종 마스터 음원인가요?</label><label><input type="checkbox" /> WAV 또는 FLAC으로 준비했나요?</label><label><input type="checkbox" /> 커버가 정사각형 JPG인가요?</label><label><input type="checkbox" /> 커버 이미지 권리를 가지고 있나요?</label></div>
              <div><h3>정보</h3><label><input type="checkbox" /> 아티스트명 표기가 기존 발매와 같나요?</label><label><input type="checkbox" /> 곡명과 버전 정보가 정확한가요?</label><label><input type="checkbox" /> 작사·작곡자와 피처링을 빠짐없이 넣었나요?</label><label><input type="checkbox" /> explicit 여부를 확인했나요?</label></div>
              <div><h3>권리와 일정</h3><label><input type="checkbox" /> 비트·샘플·커버곡 허가를 확인했나요?</label><label><input type="checkbox" /> 수익 지분을 합의했나요?</label><label><input type="checkbox" /> 발매일까지 충분한 시간이 있나요?</label><label><input type="checkbox" /> 추가 옵션의 결제 주기를 읽었나요?</label></div>
            </div>
          </section>

          <section className="section" id="faq">
            <div className="section-heading"><span className="chapter">11</span><h2>자주 묻는 질문</h2></div>
            <div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">＋</span></summary><p>{answer}</p></details>)}</div>
          </section>

          <section className="final-cta">
            <p>준비가 다 됐다면</p><h2>첫 발매는 완벽함보다<br />정확함이 더 중요해요.</h2><p>음원, 이름, 권리, 날짜. 이 네 가지만 차분하게 확인하고 시작해 보세요.</p>
            <div><a className="button dark" href="https://distrokid.com/new" target="_blank" rel="noreferrer">DistroKid 업로드 화면 열기 ↗</a><a className="button ghost" href="#checklist">체크리스트 다시 보기</a></div>
          </section>

          <footer><p>이 페이지는 DistroKid와 제휴하지 않은 교육용 가이드입니다. 실제 결제와 제출 전에는 반드시 공식 화면의 최신 가격, 지원 플랫폼, 약관을 확인하세요.</p><div><SourceLink href="https://support.distrokid.com/hc/ko">DistroKid 한국어 고객센터</SourceLink><a href="#top">맨 위로 ↑</a></div></footer>
        </article>
      </div>
    </main>
  );
}
