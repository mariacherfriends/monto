import svgPaths from "../../imports/HomeMobile-1/svg-19oeng0tbi";
import imgHeader from "../../imports/HomeMobile-1/91d70f44f7cb674d5dcd0075ff563b284adfdcb3.png";
import imgImg2 from "../../imports/HomeMobile-1/43c122a56996b25c1dc2de7820a26e197b5ec98c.png";
import { content } from "../content";

const TICKER_COPIES = 8;

// ── Ticker ─────────────────────────────────────────────────────────────────
function Ticker() {
  return (
    <div
      data-name="slider"
      className="flex gap-[80px] whitespace-nowrap font-['Waverly_CF:Extra_Bold',sans-serif] text-[#8d8e8e] text-[18px] tracking-[2.7px] uppercase not-italic"
      style={{ lineHeight: '20px', height: '20px', overflow: 'hidden', alignItems: 'flex-start' }}
    >
      {Array(TICKER_COPIES).fill(null).map((_, i) => (
        <p key={i} className="relative shrink-0" style={{ lineHeight: '20px', overflow: 'hidden', height: '20px' }}>
          {content.ticker}
        </p>
      ))}
    </div>
  );
}

// ── Small O icon ───────────────────────────────────────────────────────────
function OIcon() {
  return (
    <div className="h-[40px] relative shrink-0 w-[49px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 40">
        <path d={svgPaths.p35fb6db0} fill="#020A0A" />
      </svg>
    </div>
  );
}

// ── Headline block ─────────────────────────────────────────────────────────
function MobileHeadline({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div
      data-name="headline"
      className="content-stretch flex flex-col font-['Waverly_CF:Extra_Bold',sans-serif] gap-[48px] items-center not-italic relative shrink-0 uppercase"
    >
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[normal] relative shrink-0 text-[#8d8e8e] text-[18px] tracking-[2.7px] w-[364px]">
        {eyebrow}
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[1.2] relative shrink-0 text-[#020a0a] text-[40px] tracking-[6px] w-[364px]">
        {title}
      </p>
    </div>
  );
}

// ── Pull-quote ─────────────────────────────────────────────────────────────
function MobilePullQuote({ text }: { text: string }) {
  return (
    <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[1.8] relative shrink-0 text-[#020a0a] text-[22px] w-[364px]">
      {text}
    </p>
  );
}

// ── Quality icon block ─────────────────────────────────────────────────────
function QualityBlock({ title, body }: { title: string; body: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0">
      <OIcon />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#020a0a] text-[32px] text-center tracking-[4.8px] uppercase w-[362px]">
        {title}
      </p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[15px] text-center w-[362px]">
        {body}
      </p>
    </div>
  );
}

// ── Feature block left (small img top-left, text below) ────────────────────
function FeatureBlockLeft({ title, body, mobileImage }: { title: string; body: string; mobileImage: string }) {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      {/* Decorative O watermark */}
      <div className="col-1 h-[130px] ml-[209.5px] mt-0 relative row-1 w-[160px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 130">
          <path d={svgPaths.p2478f5f0} fill="#020A0A" opacity="0.02" />
        </svg>
      </div>
      <div className="col-1 content-stretch flex flex-col gap-[32px] items-start ml-0 mt-[31px] relative row-1">
        <div className="relative shrink-0 size-[160px] rounded-full overflow-hidden">
          <img alt={title} className="absolute block inset-0 max-w-none size-full object-cover" src={mobileImage} />
        </div>
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a]">
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">
            {title}
          </p>
          <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[17px] w-[363px]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
}

// ── Feature block right (larger img top-right, text right-aligned) ─────────
function FeatureBlockRight({ title, body, mobileImage }: { title: string; body: string; mobileImage: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end relative shrink-0">
      <div className="relative shrink-0 size-[200px] rounded-full overflow-hidden">
        <img alt={title} className="absolute block inset-0 max-w-none size-full object-cover" src={mobileImage} />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a] text-right">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">
          {title}
        </p>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[17px] w-[363px]">
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Product card ───────────────────────────────────────────────────────────
function ProductCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <div className="relative rounded-[580px] shrink-0 size-[268px]">
        <img alt={title} className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[580px] size-full" src={imgImg2} />
      </div>
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a] text-center">
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">
          {title}
        </p>
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[15px] w-[363px]">
          {body}
        </p>
      </div>
    </div>
  );
}

// ── Root component ─────────────────────────────────────────────────────────
export function MobileWithContent() {
  const { headline1, quote, qualities, features, headline2, products, headline3, footer } = content;

  return (
    <div className="bg-white relative size-full" data-name="Home Mobile">

      {/* ── Header — pinned to top-0 (original used bottom-[5852px] relative to
           the full canvas; here we position it directly at the top) ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[980px] w-[395px]" data-name="header">

        {/* Background image */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[792px] w-[395px]">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              alt=""
              className="absolute max-w-none"
              style={{ height: "118.48%", left: "-117.22%", top: "-9.26%", width: "325.23%" }}
              src={imgHeader}
            />
          </div>
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[395px] h-[452px] bg-gradient-to-b from-[rgba(255,255,255,0)] via-[rgba(255,255,255,0.5)] to-white" />

        {/* Ticker strip — 32px from top of header */}
        <div
          data-name="Font Mobile"
          className="absolute left-0 right-0 overflow-hidden"
          style={{ top: '32px', height: '14px', maxHeight: '14px' }}
        >
          <Ticker />
        </div>

        {/* MONTO logo — 118px from top */}
        <div className="absolute top-[118px] left-[21.01%] right-[21.77%] aspect-[258.98638916015625/55]">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 48">
            <path d={svgPaths.p2caa2d00} fill="#020A0A" />
          </svg>
          <div className="absolute inset-[84.57%_22.74%_0.41%_74.07%]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20711 7.2079">
              <path d={svgPaths.pe8b2d00} fill="#8D8E8E" />
            </svg>
          </div>
        </div>

        {/* Down arrow — 660px from top */}
        <div className="absolute top-[660px] aspect-[69/34] left-[45.82%] right-[46.08%]">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.8284 20.2427">
              <path d={svgPaths.p103af3c0} stroke="white" strokeMiterlimit="10" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>

      {/* ── Decorative O watermark ── */}
      <div className="absolute h-[254px] left-[calc(50%-7.5px)] top-[1085px] w-[312px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 254">
          <path d={svgPaths.p39a28e30} fill="#020A0A" opacity="0.02" />
        </svg>
      </div>

      {/* ── Main content column — starts at 814px (overlaps bottom of header) ── */}
      <div
        className="absolute content-stretch flex flex-col gap-[120px] items-center left-0 top-[814px] w-[396px]"
        data-name="content"
      >

        {/* 1 · Headline + pull-quote */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[64px] items-center relative shrink-0 text-center">
          <MobileHeadline eyebrow={headline1.eyebrow} title={headline1.title} />
          <MobilePullQuote text={quote} />
        </div>

        {/* 2 · Quality icon blocks */}
        <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0">
          <QualityBlock title={qualities[2].title} body={qualities[2].body} />
          <QualityBlock title={qualities[1].title} body={qualities[1].body} />
          <QualityBlock title={qualities[0].title} body={qualities[0].body} />
        </div>

        {/* 3 · Mid-page ticker */}
        <div
          data-name="Font Mobile"
          className="relative shrink-0 w-full overflow-hidden"
          style={{ height: '14px', maxHeight: '14px' }}
        >
          <Ticker />
        </div>

        {/* 4 · Feature blocks */}
        <div className="content-stretch flex flex-col gap-[72px] items-start px-[16px] relative shrink-0 w-[395px]">
          <FeatureBlockLeft  title={features[0].title} body={features[0].body} mobileImage={features[0].mobileImage} />
          <FeatureBlockRight title={features[1].title} body={features[1].body} mobileImage={features[1].mobileImage} />
          <FeatureBlockLeft  title={features[2].title} body={features[2].body} mobileImage={features[2].mobileImage} />
        </div>

        {/* 5 · Products (gray bg) */}
        <div className="bg-[#f5f5f5] relative shrink-0 w-full" data-name="img+text">
          <div className="content-stretch flex flex-col gap-[64px] items-start px-[16px] py-[80px] relative size-full">
            <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
              <MobileHeadline eyebrow={headline2.eyebrow} title={headline2.title} />
            </div>
            <ProductCard title={products[0].title} body={products[0].body} />
            <ProductCard title={products[1].title} body={products[1].body} />
          </div>
        </div>

        {/* 6 · Third headline + pull-quote */}
        <div className="[word-break:break-word] content-stretch flex flex-col gap-[64px] items-center relative shrink-0 text-center">
          <MobileHeadline eyebrow={headline3.eyebrow} title={headline3.title} />
          <MobilePullQuote text={quote} />
        </div>

        {/* 7 · Partner logos */}
        <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0">
          <div className="h-[80px] relative shrink-0 w-[174px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 80">
              <path d={svgPaths.p335f30f0} fill="#3E4339" />
            </svg>
          </div>
          <div className="h-[80px] relative shrink-0 w-[207.594px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.594 80">
              <path d={svgPaths.p3cd2dd80} fill="#4B4B4B" />
              <path d={svgPaths.p2104d900} fill="#BF8731" />
            </svg>
          </div>
          <div className="h-[80px] relative shrink-0 w-[80px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 75 75">
              <path fill="#3E4339" d="M54.9607 27.114H19.9284V26.5742H54.9607V27.114ZM19.9284 48.4561H54.9607V47.9213H19.9284V48.4561ZM44.4495 35.7467C44.8074 36.1049 45.0645 36.6498 45.0645 37.3512C45.0645 38.2442 44.7268 38.9102 44.1621 39.3441C43.6126 39.778 42.8867 39.9647 41.9843 39.9647H40.245V39.7629C40.8752 39.7175 40.9357 39.672 40.9357 39.0414V36.0494C40.9357 35.4087 40.8752 35.3784 40.3105 35.333V35.116H42.3725C43.3051 35.116 43.9907 35.3078 44.4444 35.7518L44.4495 35.7467ZM44.3487 37.4571C44.3487 36.6902 44.0714 36.0242 43.4815 35.6761C43.1539 35.4591 42.7253 35.3683 42.2363 35.3683C41.9288 35.3683 41.7372 35.4036 41.6667 35.4591C41.591 35.5096 41.5709 35.5954 41.5709 35.8829V38.9859C41.5709 39.551 41.8129 39.6922 42.3472 39.6922C43.7185 39.6922 44.3487 38.6478 44.3487 37.4521V37.4571ZM44.1067 28.5368C43.9907 28.6781 43.9302 28.7235 43.7336 28.7235H40.8399C40.6332 28.7235 40.5374 28.7084 40.4366 28.5368H40.2904C40.2753 28.9455 40.24 29.4299 40.2047 29.8789H40.4164C40.5021 29.551 40.5626 29.3441 40.6534 29.2129C40.7491 29.0414 40.8953 28.9808 41.5053 28.9808H41.9591V32.6488C41.9591 33.2392 41.8986 33.3148 41.2331 33.3602V33.5671H43.3353V33.3602C42.6396 33.3148 42.5791 33.2392 42.5791 32.6488V28.9808H43.0984C43.6479 28.9808 43.7739 29.0313 43.8899 29.2129C43.9756 29.334 44.0462 29.5207 44.1268 29.8789L44.3386 29.8587C44.3033 29.4248 44.263 28.8799 44.263 28.5368H44.1117H44.1067ZM37.5933 41.4934V41.7003C37.9361 41.7306 38.0974 41.7911 38.2436 41.9778C38.3747 42.1544 38.3898 42.1847 38.3898 42.7296V44.3693C38.3898 45.0555 38.3696 45.4137 38.3444 45.6458C38.3091 46.0091 38.1226 46.11 37.6991 46.1302V46.337H39.4384V46.1302C38.9393 46.0999 38.7729 46.0091 38.7326 45.6307C38.7124 45.4137 38.6872 45.0555 38.6872 44.3693V42.4975H38.7024L41.8229 46.4077H42.0498V43.4006C42.0498 42.7043 42.0649 42.3713 42.0952 42.1493C42.1254 41.8214 42.3019 41.7255 42.7102 41.7003V41.4934H40.981V41.7003C41.4852 41.7306 41.6616 41.8264 41.702 42.1645C41.7221 42.3713 41.7524 42.7144 41.7524 43.4006V45.2371H41.7322L38.6772 41.4934H37.5933ZM36.3783 32.6438V29.6468C36.3783 29.0111 36.3178 28.9909 35.7481 28.9405V28.7336H37.5681C38.1024 28.7336 38.4604 28.7992 38.7427 28.9859C39.0351 29.1776 39.2267 29.5156 39.2267 29.9647C39.2267 30.6054 38.8385 31.004 38.294 31.2412C38.42 31.4884 38.7276 31.9879 38.9443 32.3209C39.2065 32.7094 39.3628 32.9011 39.5392 33.0979C39.7358 33.3199 39.9072 33.4057 40.0686 33.446L40.0383 33.6377C39.9526 33.6377 39.872 33.6377 39.7812 33.6327C39.2317 33.6024 38.9242 33.441 38.5914 32.9566C38.3343 32.5933 38.0722 32.1292 37.8504 31.7608C37.7243 31.554 37.6033 31.4632 37.2202 31.4632H36.9833V32.6488C36.9833 33.2846 37.0488 33.3249 37.6336 33.3703V33.5772H35.7078V33.3703C36.3077 33.3249 36.3733 33.2795 36.3733 32.6488L36.3783 32.6438ZM36.9883 31.2109H37.3412C37.7143 31.2109 37.9562 31.1504 38.1377 31.004C38.4251 30.782 38.541 30.4844 38.541 30.0807C38.541 29.2735 38.0218 28.9758 37.4622 28.9758C37.2505 28.9758 37.1244 29.0061 37.069 29.0515C37.0186 29.0868 36.9883 29.1776 36.9883 29.3794V31.2159V31.2109ZM44.7015 41.7558H45.2561C45.7854 41.7558 45.9821 41.8063 46.0829 41.9627C46.1787 42.1292 46.2492 42.2906 46.3198 42.6034L46.5316 42.5681C46.5114 42.1897 46.4711 41.6801 46.4711 41.4934H43.1992V41.7003C43.7739 41.7508 43.8294 41.776 43.8294 42.447V45.4137C43.8294 46.0192 43.7689 46.0797 43.1034 46.1302V46.337H46.6374C46.703 46.1049 46.8492 45.4036 46.8945 45.1564L46.6727 45.1261C46.5769 45.4238 46.4358 45.6761 46.3148 45.8274C46.1535 46.0192 45.9468 46.0797 45.3922 46.0797C45.0242 46.0797 44.7671 46.0747 44.631 45.9839C44.4999 45.888 44.4545 45.7316 44.4545 45.3784V43.9707H45.1502C45.7905 43.9707 45.8409 44.0161 45.9367 44.551H46.1484V43.1181H45.9367C45.8409 43.6176 45.8056 43.6781 45.1452 43.6781H44.4545V41.9828C44.4545 41.7608 44.4697 41.7457 44.6965 41.7457L44.7015 41.7558ZM27.9441 41.7053C28.3928 41.7659 28.4987 41.8264 28.6852 42.4369C29.0885 43.7639 29.4969 45.0757 29.8851 46.4228H30.1119C30.485 45.222 30.8984 44.0212 31.3067 42.7094H31.3218C31.6949 43.7891 32.199 45.2321 32.6023 46.4228H32.8292C33.4291 44.3441 33.8728 42.9314 34.0391 42.4521C34.2609 41.8315 34.3265 41.7709 34.8306 41.7053V41.4985H33.2123V41.7053C33.7921 41.7709 33.8223 41.8567 33.7165 42.3007C33.6005 42.8305 33.1972 44.2936 32.8897 45.2825H32.8746C32.4259 44.001 32.0024 42.7901 31.589 41.5691H31.3773C31.0042 42.7851 30.5808 44.0161 30.1875 45.2825H30.1724C29.8498 44.223 29.5624 43.2139 29.2801 42.2099C29.1692 41.8315 29.1843 41.7709 29.7187 41.7053V41.4985H27.9391V41.7053H27.9441ZM30.4598 38.9859L31.9772 35.0706L32.2041 35.005C32.6578 36.2866 33.1518 37.7043 33.6207 39.001C33.8576 39.6418 33.9484 39.7074 34.4273 39.7528V39.9596H32.6326V39.7528C33.0964 39.6922 33.1619 39.6317 33.0661 39.3441C32.9704 39.0515 32.8242 38.6529 32.6628 38.1937H31.1C30.9841 38.5267 30.8732 38.8446 30.7774 39.1574C30.6161 39.6266 30.6816 39.7023 31.2311 39.7528V39.9596H29.638V39.7528C30.1018 39.6872 30.2027 39.6418 30.4598 38.9859ZM31.2059 37.8759H32.557L31.9117 35.9738H31.8966C31.6596 36.6145 31.4277 37.2654 31.2059 37.8759ZM34.7046 35.3229C35.0474 35.3532 35.2087 35.4137 35.3549 35.6004C35.486 35.777 35.5011 35.8073 35.5011 36.3522V37.9919C35.5011 38.6781 35.4809 39.0363 35.4557 39.2684C35.4204 39.6317 35.2339 39.7326 34.8104 39.7528V39.9596H36.5497V39.7528C36.0506 39.7225 35.8843 39.6317 35.8439 39.2533C35.8238 39.0363 35.7985 38.6781 35.7985 37.9919V36.1201H35.8137L38.9393 40.0303H39.1662V37.0232C39.1662 36.3269 39.1813 35.9939 39.2115 35.7719C39.2418 35.444 39.4182 35.3481 39.8266 35.3229V35.116H38.0974V35.3229C38.6015 35.3532 38.778 35.449 38.8183 35.7871C38.8385 35.9939 38.8687 36.337 38.8687 37.0283V38.8648H38.8486L35.7935 35.1211H34.7096V35.3279L34.7046 35.3229ZM37.1698 41.7053V41.4985H35.2289V41.7053C35.8288 41.7508 35.8893 41.7962 35.8893 42.4268V45.4087C35.8893 46.0444 35.8288 46.0848 35.2289 46.1302V46.337H37.1698V46.1302C36.5699 46.0848 36.5094 46.0494 36.5094 45.4087V42.4268C36.5094 41.7911 36.5699 41.7457 37.1698 41.7053ZM35.3045 33.3653V33.5722H33.5098V33.3653C33.9736 33.3047 34.0391 33.2442 33.9433 32.9566C33.8475 32.664 33.7014 32.2654 33.54 31.8063H31.9772C31.8613 32.1393 31.7504 32.4571 31.6546 32.7699C31.4932 33.2392 31.5588 33.3148 32.1083 33.3653V33.5722H30.5152V33.3653C30.979 33.2997 31.0799 33.2543 31.337 32.5984L32.8544 28.6831L33.0813 28.6176C33.535 29.8991 34.029 31.3169 34.4979 32.6135C34.7348 33.2543 34.8256 33.3199 35.3045 33.3653ZM33.4392 31.4884L32.7939 29.5863H32.7788C32.5418 30.227 32.3099 30.8779 32.0881 31.4884H33.4392ZM66.6062 49.9899L59.5281 58.4258L55.4094 49.9899H50.0151L56.0093 61.6145L44.5856 75H50.3176L58.3737 65.2169L62.9462 75H68.1186L61.7514 62.0636L72.318 49.9899H66.6213H66.6062ZM52.8231 5.17154L54.9203 25.005H59.9012L69.3789 5.17154L65.5223 25.005H70.1654L75 0H67.322L58.4442 19.5308L56.4932 0H49.2236L44.3537 25.005H48.9615L52.8181 5.17154H52.8231ZM5.05646 25.0505H0L13.8586 0.0454087H19.4041L24.385 25.0505H19.6663L18.2799 17.9667H8.95342L5.05646 25.0505ZM11.2371 13.7689H17.5287L15.9205 4.69728L11.2371 13.7689ZM19.4041 49.9899L24.385 74.995H19.6663L18.2799 67.9112H8.95342L5.05646 74.995H0L13.8586 49.9899H19.4041ZM17.5338 63.7134L15.9205 54.6418L11.2371 63.7134H17.5287H17.5338Z" />
            </svg>
          </div>
        </div>

        {/* 8 · Footer */}
        <div className="bg-[#f5f5f5] h-[475px] relative shrink-0 w-full" data-name="footer">
          <div className="content-stretch flex flex-col gap-[56px] items-center px-[16px] py-[64px] relative size-full">
            {/* MONTO logo */}
            <div className="h-[48px] relative shrink-0 w-[226px]">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 48">
                <path d={svgPaths.p2caa2d00} fill="#020A0A" />
              </svg>
              <div className="absolute inset-[84.57%_22.74%_0.41%_74.07%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20711 7.2079">
                  <path d={svgPaths.pe8b2d00} fill="#8D8E8E" />
                </svg>
              </div>
            </div>
            {/* Address */}
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter_Tight:Light',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[18px] text-center w-full">
              {footer.address}
            </p>
            {/* Nav */}
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center justify-center leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[18px] text-center w-full">
              {footer.nav.map((item, i) => (
                <p
                  key={item}
                  className={`[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0 w-full ${i === 0 ? "font-['Inter_Tight:SemiBold',sans-serif]" : "font-['Inter_Tight:Light',sans-serif]"}`}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
