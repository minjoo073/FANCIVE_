import { HeadlineSplit } from "./_components/HeadlineSplit";

const IMG = "/images";

const heroMeta = [
  { label: "Project", value: "FANCIVE", width: "w-[68px]" },
  { label: "Discipline", value: "Brand · UX/UI · Front-end", width: "w-[184px]" },
  { label: "Category", value: "Archive Project", width: "w-28" },
];

const contributionMeta = [
  {
    label: "Type",
    value: "Website",
    labelLeft: "left-0",
    valueLeft: "left-[62px]",
    width: "w-[124px]",
  },
  {
    label: "Contribution",
    value: "100%",
    labelLeft: "left-0",
    valueLeft: "left-[125px]",
    width: "w-[169px] mr-[-4.00px]",
  },
];

const questionImages = [
  { src: `${IMG}/THE_QUESTION_img1.webp`, alt: "The QUESTION visual 1", className: "w-[262px] h-[262px] aspect-[1]" },
  { src: `${IMG}/THE_QUESTION_img2.webp`, alt: "The QUESTION visual 2", className: "w-[261px] h-[352px] mt-[19px] aspect-[0.74]" },
  { src: `${IMG}/THE_QUESTION_img3.webp`, alt: "The QUESTION visual 3", className: "w-[262px] h-[359px] mt-[21px] aspect-[0.73]" },
];

const conceptKeywords = [
  { label: "Soft Structure", position: "top-[159px] left-0" },
  { label: "Quiet Luxury", position: "top-0 left-[279px]" },
  { label: "Boudoir", position: "top-[201px] left-[457px]" },
  { label: "Vintage Archive", position: "top-[514px] left-[365px] rotate-90" },
  { label: "Lace & Silk", position: "top-[651px] left-[69px]" },
];

const rightPreviewImages = [
  { src: `${IMG}/right_img1.webp`, alt: "Right preview 1", className: "w-[289px] h-[315px] aspect-[0.92]" },
  { src: `${IMG}/right_img2.webp`, alt: "Right preview 2", className: "w-[245px] h-[315px] ml-[24px] aspect-[0.78]" },
  { src: `${IMG}/right_img3.webp`, alt: "Right preview 3", className: "mt-px w-[196px] h-[314px] ml-[23px] aspect-[0.62]" },
];

const collectionImages = [
  { src: `${IMG}/collection_img1.webp`, alt: "Collection image 1", className: "absolute top-px left-0 w-[315px] h-[342px] aspect-[0.92]" },
  { src: `${IMG}/collection_img3.webp`, alt: "Collection image 3", className: "absolute top-0 left-[332px] w-[272px] h-[514px] aspect-[0.53]" },
  { src: `${IMG}/collection_img5.webp`, alt: "Collection image 5", className: "absolute top-0 left-[621px] w-[412px] h-[329px] aspect-[1.25]" },
  { src: `${IMG}/collection_img2.webp`, alt: "Collection image 2", className: "absolute top-[360px] left-0 w-[315px] h-[437px] aspect-[0.72]" },
  { src: `${IMG}/collection_img4.webp`, alt: "Collection image 4", className: "absolute top-[531px] left-[332px] w-[365px] h-[266px] aspect-[1.37]" },
  { src: `${IMG}/collection_img6.webp`, alt: "Collection image 6", className: "absolute top-[346px] left-[714px] w-[438px] h-[451px] aspect-[0.97]" },
  { src: `${IMG}/collection_img7.webp`, alt: "Collection image 7", className: "absolute top-0 left-[1050px] w-[286px] h-[329px] aspect-[0.87]" },
  { src: `${IMG}/collection_img8.webp`, alt: "Collection image 8", className: "absolute top-px left-[1353px] w-[342px] h-[543px] aspect-[0.63]" },
  { src: `${IMG}/collection_img9.webp`, alt: "Collection image 9", className: "absolute top-[561px] left-[1170px] w-[525px] h-[236px] aspect-[2.22]" },
];

const closingColumns = [
  {
    title: "BRAND STRATEGY",
    items: ["Visual Identity", "UI / UX Design", "Publishing"],
    wrapperClassName: "reveal flex-col w-[220px] items-start gap-[40px] top-[11012px] left-[329px] flex absolute",
    bodyClassName: "relative w-[220px] h-[170px]",
  },
  {
    title: "PROJECT PERIOD",
    items: ["May 2026", "Personal Project"],
    wrapperClassName: "reveal flex-col w-[220px] items-start gap-[40px] top-[11012px] left-[588px] flex absolute",
    bodyClassName: "relative w-[220px] h-[110px]",
  },
  {
    title: "OUTCOME",
    items: ["Brand Identity", "Website Design", "Editorial Direction", "Responsive Publishing"],
    wrapperClassName: "reveal flex-col w-[280px] items-start gap-[40px] top-[11012px] left-[846px] flex absolute",
    bodyClassName: "relative w-[280px] h-[230px]",
  },
];

export default function Home() {
  return (
    <div className="canvas-wrapper">
      <main className="canvas bg-white overflow-hidden relative">
        {/* ───────── HERO ───────── */}
        <section id="hero" aria-label="Hero">
          {/* Parallax wrappers — CustomCursor applies translate3d; child img stays free
              for GSAP fades and CSS hover. */}
          <div className="hero-parallax-bg absolute top-0 left-0 w-[1920px] h-[1079px] will-change-transform">
            <img className="no-hover w-full h-full object-cover" alt="Hero background" src={`${IMG}/hero_bg.webp`} />
          </div>
          <div className="absolute top-[754px] left-[370px] w-[1076px] h-[213px] overflow-hidden">
            <img className="no-hover hero-fade hero-wordmark w-full h-full" alt="FANCIVE — hero wordmark" src={`${IMG}/hero_logo.webp`} />
          </div>
          <div className="absolute top-[326px] left-[370px] w-[759px] h-[427px] overflow-hidden">
            <video
              className="no-hover hero-fade hero-model w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={`${IMG}/model_3_.webp`}
              aria-label="Hero model"
            >
              <source src="/videos/hero_model.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-fade absolute top-[65px] left-[370px] font-pretendard font-semibold text-ink text-base whitespace-nowrap">
            PORTFOLIO
          </div>

          <div className="hero-fade flex-col w-[200px] items-start gap-4 top-[909px] left-[1500px] flex absolute">
            {contributionMeta.map((item) => (
              <div key={item.label} className={`relative h-[21px] ${item.width}`}>
                <div className={`absolute top-0 ${item.labelLeft} font-pretendard font-semibold text-ink text-lg whitespace-nowrap`}>
                  {item.label}
                </div>
                <div className={`absolute top-px ${item.valueLeft} font-pretendard font-normal text-ink text-base whitespace-nowrap`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div className="hero-fade w-[1213px] items-center justify-between top-[119px] left-[370px] flex absolute">
            {heroMeta.map((item) => (
              <div key={item.label} className={`relative h-[59px] ${item.width}`}>
                <div className="absolute top-0 left-0 font-pretendard font-normal text-ink-muted text-sm leading-[21px] whitespace-nowrap">
                  {item.label}
                </div>
                <div className="absolute top-[35px] left-0 font-pretendard font-normal text-ink text-base leading-6 whitespace-nowrap">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ───────── 01. PROJECT OVERVIEW ───────── */}
        <section id="project-overview" aria-label="Project overview">
          <img
            className="no-hover absolute top-[1079px] left-0 w-[1920px] h-[1080px] object-cover"
            alt="Project overview background"
            src={`${IMG}/PROJECT_OVERVIEW_bg.webp`}
            loading="lazy"
          />
          <div className="reveal absolute top-[1229px] left-[200px] font-pretendard font-semibold text-ink-faint text-2xl">
            01. PROJECT OVERVIEW
          </div>
          <img
            className="mask-reveal absolute top-[1304px] left-[711px] w-[492px] h-[587px]"
            alt="Project overview"
            src={`${IMG}/PROJECT_OVERVIEW_img.webp`}
            loading="lazy"
          />
          <div className="reveal absolute top-[1852px] left-[267px] w-[1389px] h-[152px] flex flex-col gap-[30px]">
            {/* Mid-line span is white because the section's central image overlaps that range —
                the bright run preserves legibility on the dark photo. Edge spans stay ink-strong. */}
            <p
              lang="en"
              className="w-[1385px] font-[var(--font-switzer)] font-medium text-[38px] text-center leading-[normal]"
            >
              <span className="text-ink-strong">A lifestyle fashion brand i</span>
              <span className="text-white">nspired by vintage boudoir a</span>
              <span className="text-ink-strong">esthetics and quiet luxury.</span>
            </p>
            <p className="ml-[175px] w-[1036px] font-pretendard font-extralight text-ink-soft text-[22px] text-center leading-[32px]">
              과장된 화려함보다 오래 남는 분위기에 집중한 패션 브랜드 프로젝트입니다.
              <br />
              레이스, 실크, 빈티지 아카이브 무드를 기반으로 브랜드 아이덴티티와 웹 경험을 구축하였습니다.
            </p>
          </div>
        </section>

        {/* ───────── 02. THE QUESTION ───────── */}
        <section id="the-question" aria-label="The question">
          <img
            className="no-hover absolute top-[2159px] left-0 w-[1920px] h-[1080px] object-cover"
            alt="The question background"
            src={`${IMG}/THE_QUESTION_bg.webp`}
            loading="lazy"
          />
          <div className="absolute top-[2193px] left-[1398px] w-[262px] h-[1013px] flex flex-col z-10">
            {questionImages.map((image) => (
              <img key={image.alt} className={image.className} alt={image.alt} src={image.src} loading="lazy" />
            ))}
          </div>
          <div className="reveal flex-col w-[785px] items-start gap-[100px] top-[2309px] left-[200px] flex absolute">
            <div className="relative self-stretch -mt-px font-pretendard font-semibold text-ink-faint text-2xl">
              02. THE QUESTION
            </div>
            <div className="relative w-[787px] h-[287px] -mr-0.5">
              <HeadlineSplit
                lang="en"
                className="absolute top-0 left-0 font-[var(--font-switzer)] font-semibold text-ink text-[38px]"
              >
                What Makes Elegance Memorable?
              </HeadlineSplit>
              <div className="absolute top-[100px] left-0 w-[791px] h-[187px] flex flex-col gap-5">
                <p className="w-[785px] h-[72px] font-pretendard font-light text-ink-soft text-[22px] leading-[32px]">
                  오늘날 많은 패션 브랜드는 강한 시각적 자극과 화려함을 중심으로 표현됩니다.
                  <br />
                  FANCIVE는 그 반대의 방향에서 출발했습니다.
                </p>
                <div className="w-[412px] h-[39px] font-pretendard font-semibold text-ink-strong text-[28px] leading-[39.2px] whitespace-nowrap">
                  &apos;오래 기억되는 아름다움은 무엇일까?&apos;
                </div>
                <p className="w-[756px] h-9 font-pretendard font-light text-ink-soft text-[22px] leading-[32px] whitespace-nowrap">
                  이 질문을 바탕으로 조용하지만 깊게 남는 감정을 시각화하고자 하였습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ───────── 03. CONCEPT DEVELOPMENT ───────── */}
        <section id="concept-development" aria-label="Concept development">
          <img
            className="no-hover absolute top-[3239px] left-0 w-[1920px] h-[1080px] object-cover"
            alt="Concept background"
            src={`${IMG}/CONCEPT_DEVELOPMENT_bg.webp`}
            loading="lazy"
          />
          <div className="reveal flex-col w-[693px] items-start gap-[100px] top-[3389px] left-[200px] flex absolute">
            <div className="relative self-stretch -mt-px font-pretendard font-semibold text-ink-faint text-2xl">
              03. CONCEPT DEVELOPMENT
            </div>
            <div className="relative w-[695px] h-[218px] -mr-0.5">
              <HeadlineSplit
                lang="en"
                className="absolute top-0 left-0 font-[var(--font-switzer)] font-semibold text-ink text-[38px]"
              >
                A Lasting Atmosphere
              </HeadlineSplit>
              <div className="absolute top-[100px] left-0 w-[697px] h-[118px] flex flex-col gap-2.5">
                <p className="w-[693px] font-pretendard text-[22px] leading-[32px] whitespace-nowrap">
                  <span className="font-semibold text-ink-strong">FANCIVE</span>
                  <span className="font-light text-ink-soft">
                    는 꾸며낸 럭셔리보다 잔향처럼 남는 분위기를 지향합니다.
                  </span>
                </p>
                <p className="w-[557px] h-[72px] font-pretendard font-light text-ink-soft text-[22px] leading-[32px]">
                  브랜드의 핵심 키워드를 정의하고,
                  <br />
                  이를 기반으로 시각적 언어와 세계관을 구축하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="reveal absolute top-[3495px] left-[1114px] w-[544px] h-[682px]">
            <img
              className="mask-reveal absolute top-[205px] left-[69px] w-[336px] h-[402px]"
              alt="Concept development"
              src={`${IMG}/CONCEPT_DEVELOPMENT_img.webp`}
              loading="lazy"
            />
            {conceptKeywords.map((kw) => (
              <div
                key={kw.label}
                lang="en"
                className={`absolute font-pretendard font-normal text-ink-muted text-[22px] leading-[30.8px] whitespace-nowrap ${kw.position}`}
              >
                {kw.label}
              </div>
            ))}
          </div>
        </section>

        {/* ───────── 04. VISUAL IDENTITY (2 screens: 4319–6479) ───────── */}
        <section id="visual-identity" aria-label="Visual identity">
          {/* Section covers two screens (2160px) to give 04 room to breathe. */}
          <div className="absolute top-[4319px] left-0 w-[1920px] h-[2160px] bg-paper" />
          <img className="mask-reveal absolute top-[4319px] left-0 w-[944px] h-[1080px]" alt="Left visual" src={`${IMG}/left_img.webp`} loading="lazy" />
          <div className="absolute top-[4858px] left-[944px] w-[976px] h-px bg-ink-divider" aria-hidden />
          <div className="absolute top-[4716px] left-[1056px] w-[777px] h-[315px] flex">
            {rightPreviewImages.map((image) => (
              <img key={image.alt} className={image.className} alt={image.alt} src={image.src} loading="lazy" />
            ))}
          </div>
          <div className="reveal flex-col w-[971px] items-start gap-[100px] top-[5549px] left-[200px] flex absolute">
            <div className="relative self-stretch -mt-px font-pretendard font-semibold text-ink-faint text-2xl">
              04. VISUAL IDENTITY
            </div>
            <div className="relative w-[973px] h-[270px] -mr-0.5">
              <HeadlineSplit
                lang="en"
                className="absolute top-0 left-0 font-[var(--font-switzer)] font-semibold text-ink text-[38px]"
              >
                A Quiet Expression of Elegance
              </HeadlineSplit>
              <div className="absolute top-[100px] left-0 w-[977px] h-[170px] flex flex-col gap-[15px]">
                <p className="w-[725px] h-[34px] font-pretendard font-light text-ink-soft text-[20px] leading-[28px] whitespace-nowrap">
                  FANCIVE는 화려한 장식보다 소재와 분위기에서 오는 아름다움에 집중합니다.
                </p>
                <p className="w-[750px] h-[72px] font-pretendard font-semibold text-ink-strong text-[26px] leading-[36.4px]">
                  레이스의 섬세한 결, 실크의 부드러운 흐름, 그리고 절제된 스타일링을 통해
                  <br />
                  브랜드가 추구하는 조용한 럭셔리를 시각적으로 표현하였습니다.
                </p>
                <p className="w-[971px] h-[34px] font-pretendard font-light text-ink-soft text-[20px] leading-[28px] whitespace-nowrap">
                  낮은 채도의 컬러와 빈티지 아카이브 무드를 기반으로 감정이 오래 남는 브랜드 이미지를 구축하였습니다.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute top-[5537px] left-[1203px] w-[599px] h-[881px]">
            <img className="mask-reveal absolute top-[100px] left-0 w-[212px] h-[282px] object-cover" alt="Visual identity 2" src={`${IMG}/VISUAL_IDENTITY_img2.webp`} loading="lazy" />
            <img className="mask-reveal absolute top-[431px] left-[138px] w-[338px] h-[450px] object-cover" alt="Visual identity 3" src={`${IMG}/VISUAL_IDENTITY_img3.webp`} loading="lazy" />
            <img className="mask-reveal absolute top-0 left-[289px] w-[310px] h-[310px]" alt="Visual identity 1" src={`${IMG}/VISUAL_IDENTITY_img1.webp`} loading="lazy" />
          </div>
        </section>

        {/* ───────── 05. WEBSITE DESIGN (starts at 6479 after 04 expansion) ───────── */}
        <section id="website-design" aria-label="Website design">
          {/* Paper-tone intro plate so 04 → 05 has no flat white seam. */}
          <div className="absolute top-[6479px] left-0 w-[1920px] h-[1080px] bg-paper" />
          <img
            className="no-hover absolute w-[1920px] h-[3797px] top-[6697px] left-0"
            alt="Website background"
            src={`${IMG}/website_bg.webp`}
            loading="lazy"
            style={{
              maskImage:
                "linear-gradient(to bottom, transparent 0, black 220px, black calc(100% - 350px), transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0, black 220px, black calc(100% - 350px), transparent 100%)",
            }}
          />
          {/* 05 intro — label + English headline + Korean body, placed in the 6479–7559 plate
              so the section opens with breath instead of jumping straight into mockups. */}
          <div className="reveal flex-col w-[971px] items-start gap-[100px] top-[6629px] left-[200px] flex absolute">
            <div className="relative self-stretch -mt-px font-pretendard font-semibold text-ink-faint text-2xl">
              05. WEBSITE DESIGN
            </div>
            <div className="relative w-[973px] h-[210px] -mr-0.5">
              <HeadlineSplit
                lang="en"
                className="absolute top-0 left-0 font-[var(--font-switzer)] font-semibold text-ink text-[38px]"
              >
                From Mood to Interface
              </HeadlineSplit>
              <div className="absolute top-[100px] left-0 w-[977px] h-[110px] flex flex-col gap-[15px]">
                <p className="w-[860px] font-pretendard font-light text-ink-soft text-[20px] leading-[28px]">
                  FANCIVE의 분위기를 웹 인터페이스로 옮긴 방식을 보여드립니다.
                </p>
                <p className="w-[900px] font-pretendard font-light text-ink-soft text-[20px] leading-[28px]">
                  에디토리얼 호흡과 절제된 그리드, 콘텐츠의 무게를 살리는 화면 구성에 집중하였습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Main Page mockup */}
          <div className="reveal flex-col w-[1520px] items-start gap-[15px] top-[7100px] left-[200px] flex absolute">
            <div className="relative self-stretch -mt-px font-[var(--font-switzer)] text-xl font-semibold text-ink" lang="en">
              Main Page
            </div>
            <img
              className="block w-[1520px] h-[855px] object-cover"
              alt="Main page mockup"
              src={`${IMG}/main_page_img.webp`}
              loading="lazy"
            />
          </div>

          {/* Sub Page mockup */}
          <div className="reveal flex-col w-[1520px] items-start gap-[15px] top-[8284px] left-[200px] flex absolute">
            <div className="relative self-stretch -mt-px font-[var(--font-switzer)] text-xl font-semibold text-ink" lang="en">
              Sub Page
            </div>
            <img
              className="block w-[1520px] h-[855px] object-cover"
              alt="Sub page mockup"
              src={`${IMG}/sub_img.webp`}
              loading="lazy"
            />
          </div>

          {/* Collection grid */}
          <div className="reveal absolute top-[9357px] left-[113px] w-[1697px] h-[837px] flex flex-col gap-3.5">
            <div lang="en" className="ml-[87px] w-[93px] h-[26px] font-[var(--font-switzer)] font-semibold text-ink text-xl text-center">
              Collection
            </div>
            <div data-collection-grid className="w-[1695px] h-[797px] relative">
              {collectionImages.map((image) => (
                <img
                  key={image.alt}
                  data-collection-img
                  className={`${image.className} no-hover will-change-transform`}
                  alt={image.alt}
                  src={image.src}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ───────── CLOSING (shifted +1080) ───────── */}
        <section id="closing" aria-label="Closing">
          <img
            className="no-hover absolute top-[10494px] left-0 w-[1920px] h-[1079px] object-cover"
            alt="Closing background"
            src={`${IMG}/closing_bg.webp`}
            loading="lazy"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0, black 420px)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0, black 420px)",
            }}
          />
          <div className="reveal absolute top-[10594px] left-[329px] font-pretendard font-semibold text-black text-2xl">
            PORTFOLIO
          </div>
          <div className="reveal absolute top-[10710px] left-[329px] font-pretendard font-semibold text-ink-muted text-[13px] tracking-[0.14em]">
            PROJECT INFO
          </div>
          <img className="no-hover absolute top-[10778px] left-[329px] w-[374px] h-[74px]" alt="FANCIVE — closing wordmark" src={`${IMG}/closing_logo.webp`} loading="lazy" />
          <div className="reveal absolute top-[10777px] left-[753px] w-[420px] flex flex-col gap-[10px]">
            <p lang="en" className="font-pretendard font-light text-ink text-[18px] whitespace-nowrap">
              Lingerie &amp; Boudoir Fashion Branding
            </p>
            <p lang="en" className="font-pretendard font-light text-ink text-[18px] whitespace-nowrap">
              Editorial Archive Website
            </p>
          </div>
          <img className="absolute top-[10680px] left-[1187px] w-[533px] h-[715px]" alt="Closing object" src={`${IMG}/as_i_7.webp`} loading="lazy" />

          {closingColumns.map((column) => (
            <div key={column.title} className={column.wrapperClassName}>
              <div
                lang="en"
                className="font-pretendard font-semibold text-ink-muted text-[13px] tracking-[0.14em]"
              >
                {column.title}
              </div>
              <div className={column.bodyClassName}>
                {column.items.map((item, index) => (
                  <div
                    key={item}
                    lang="en"
                    className="absolute left-0 font-pretendard font-light text-ink text-[20px] whitespace-nowrap"
                    style={{ top: `${index * 54}px` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="reveal absolute top-[11451px] left-[852px] w-[260px] flex flex-col items-center gap-[18px]">
            <div lang="en" className="font-pretendard font-semibold text-ink text-[20px] tracking-[0.06em] whitespace-nowrap">
              THANK YOU
            </div>
            <div lang="en" className="font-pretendard font-light text-ink-soft text-[16px] whitespace-nowrap">
              Designed &amp; Published
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
