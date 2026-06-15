import svgPaths from "./svg-19oeng0tbi";
import imgHeader from "./91d70f44f7cb674d5dcd0075ff563b284adfdcb3.png";
import imgImg from "./6d8f5b57d6b14b5291d6ec14d757d9c3a0cc31e3.png";
import imgImg1 from "./abe169e59bbf2c55deb57ae4b6832667c6082f50.png";
import imgImg2 from "./43c122a56996b25c1dc2de7820a26e197b5ec98c.png";

function Slider() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Waverly_CF:Extra_Bold',sans-serif] gap-[80px] items-center leading-[normal] left-0 not-italic text-[#8d8e8e] text-[18px] top-0 tracking-[2.7px] uppercase whitespace-nowrap" data-name="slider">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col font-['Waverly_CF:Extra_Bold',sans-serif] gap-[48px] items-center not-italic relative shrink-0 uppercase" data-name="headline">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[normal] relative shrink-0 text-[#8d8e8e] text-[18px] tracking-[2.7px] w-[364px]">Lorem ipsum dolor sit amet</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[1.2] relative shrink-0 text-[#020a0a] text-[40px] tracking-[6px] w-[364px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Text1({ className }: { className?: string }) {
  return (
    <div className={className || "[word-break:break-word] content-stretch flex flex-col gap-[64px] items-center relative shrink-0 text-center"} data-name="text 1">
      <Headline />
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[1.8] relative shrink-0 text-[#020a0a] text-[22px] w-[364px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="1">
      <div className="h-[40px] relative shrink-0 w-[49px]" data-name="logo-o">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 40">
          <path d={svgPaths.p35fb6db0} fill="var(--fill-0, #020A0A)" id="Vector" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#020a0a] text-[32px] text-center tracking-[4.8px] uppercase w-[362px]">Kristallklar</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter_Tight:Light',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[15px] text-center w-[362px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. `}</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="2">
      <div className="h-[40px] relative shrink-0 w-[49px]" data-name="logo-o">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 40">
          <path d={svgPaths.p35fb6db0} fill="var(--fill-0, #020A0A)" id="Vector" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#020a0a] text-[32px] text-center tracking-[4.8px] uppercase w-[362px]">Unberührt</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter_Tight:Light',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[15px] text-center w-[362px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. `}</p>
    </div>
  );
}

function Component2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="3">
      <div className="h-[40px] relative shrink-0 w-[49px]" data-name="logo-o">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 40">
          <path d={svgPaths.p35fb6db0} fill="var(--fill-0, #020A0A)" id="Vector" />
        </svg>
      </div>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#020a0a] text-[32px] text-center tracking-[4.8px] uppercase w-[362px]">Quellfrisch</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter_Tight:Light',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[15px] text-center w-[362px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. `}</p>
    </div>
  );
}

function IconHeadlineText({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[72px] items-start relative shrink-0"} data-name="icon+headline+text">
      <Component />
      <Component1 />
      <Component2 />
    </div>
  );
}

function Slider1() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Waverly_CF:Extra_Bold',sans-serif] gap-[80px] items-center leading-[normal] left-0 not-italic text-[#8d8e8e] text-[18px] top-0 tracking-[2.7px] uppercase whitespace-nowrap" data-name="slider">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] relative shrink-0">PURITY BORN ABOVE GURGL</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a]" data-name="text">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">Ursprung</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[17px] w-[363px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam. `}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start ml-0 mt-[31px] relative row-1" data-name="text">
      <div className="relative shrink-0 size-[160px]" data-name="img">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="160" src={imgImg} width="160" />
      </div>
      <Text2 />
    </div>
  );
}

function Component3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="1">
      <div className="col-1 h-[130px] ml-[209.5px] mt-0 relative row-1 w-[160px]" data-name="logo-o">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 130">
          <path d={svgPaths.p2478f5f0} fill="var(--fill-0, #020A0A)" id="Vector" opacity="0.02" />
        </svg>
      </div>
      <Text />
    </div>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a] text-right" data-name="text">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">Qualität</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[17px] w-[363px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam. `}</p>
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-end relative shrink-0" data-name="2">
      <div className="relative shrink-0 size-[200px]" data-name="img">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="200" src={imgImg1} width="200" />
      </div>
      <Text3 />
    </div>
  );
}

function Text5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a]" data-name="text">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">Herkunft</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[17px] w-[363px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam. `}</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start ml-0 mt-[31px] relative row-1" data-name="text">
      <div className="relative shrink-0 size-[160px]" data-name="img">
        <img alt="" className="absolute block inset-0 max-w-none size-full" height="160" src={imgImg} width="160" />
      </div>
      <Text5 />
    </div>
  );
}

function Component5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="3">
      <div className="col-1 h-[130px] ml-[219px] mt-0 relative row-1 w-[160px]" data-name="logo-o">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 130">
          <path d={svgPaths.p2478f5f0} fill="var(--fill-0, #020A0A)" id="Vector" opacity="0.02" />
        </svg>
      </div>
      <Text4 />
    </div>
  );
}

function ImgText({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[72px] items-start px-[16px] relative shrink-0 w-[395px]"} data-name="img+text">
      <Component3 />
      <Component4 />
      <Component5 />
    </div>
  );
}

function Headline1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Waverly_CF:Extra_Bold',sans-serif] gap-[48px] items-center not-italic relative shrink-0 text-center uppercase" data-name="headline">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[normal] relative shrink-0 text-[#8d8e8e] text-[18px] tracking-[2.7px] w-[364px]">Lorem ipsum dolor sit amet</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[1.2] relative shrink-0 text-[#020a0a] text-[40px] tracking-[6px] w-[364px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full" data-name="text">
      <Headline1 />
    </div>
  );
}

function Text7() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a] text-center" data-name="text">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">Sparkling</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[15px] w-[363px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam. `}</p>
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="1">
      <div className="relative rounded-[580px] shrink-0 size-[268px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[580px] size-full" src={imgImg2} />
      </div>
      <Text7 />
    </div>
  );
}

function Text8() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start not-italic relative shrink-0 text-[#020a0a] text-center" data-name="text">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Waverly_CF:Extra_Bold',sans-serif] leading-[normal] relative shrink-0 text-[32px] tracking-[4.8px] uppercase w-[363px]">Sparkling</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] leading-[1.6] relative shrink-0 text-[15px] w-[363px]">{`Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. Lorem ipsum dolor sit amet, consetetur elitr, sed diam nonumy et eirmod tempor invidunt ut labore magn aliquyam. `}</p>
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="2">
      <div className="relative rounded-[580px] shrink-0 size-[268px]" data-name="img">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[580px] size-full" src={imgImg2} />
      </div>
      <Text8 />
    </div>
  );
}

function ImgText1({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#f5f5f5] relative shrink-0 w-full"} data-name="img+text">
      <div className="content-stretch flex flex-col gap-[64px] items-start px-[16px] py-[80px] relative size-full">
        <Text6 />
        <Component6 />
        <Component7 />
      </div>
    </div>
  );
}

function Headline2() {
  return (
    <div className="content-stretch flex flex-col font-['Waverly_CF:Extra_Bold',sans-serif] gap-[48px] items-center not-italic relative shrink-0 uppercase" data-name="headline">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[normal] relative shrink-0 text-[#8d8e8e] text-[18px] tracking-[2.7px] w-[364px]">Lorem ipsum dolor sit amet</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] leading-[1.2] relative shrink-0 text-[#020a0a] text-[40px] tracking-[6px] w-[364px]">Lorem ipsum dolor sit amet</p>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[80px] relative shrink-0 w-[207.594px]" data-name="logo">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207.594 80">
        <g id="logo">
          <path d={svgPaths.p3cd2dd80} fill="var(--fill-0, #4B4B4B)" id="Vector" />
          <path d={svgPaths.p2104d900} fill="var(--fill-0, #BF8731)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function List() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[24px] items-center justify-center leading-[1.6] not-italic relative shrink-0 text-[#020a0a] text-[18px] text-center w-full" data-name="list">
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:SemiBold',sans-serif] relative shrink-0 w-full">Englisch</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] relative shrink-0 w-full">Datenschutz</p>
      <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Inter_Tight:Light',sans-serif] relative shrink-0 w-full">Impressum</p>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[120px] items-center left-0 top-[814px] w-[396px]" data-name="content">
      <Text1 />
      <IconHeadlineText />
      <div className="h-[14px] overflow-clip relative shrink-0 w-full" data-name="Font Mobile">
        <Slider1 />
      </div>
      <ImgText />
      <ImgText1 />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[64px] items-center relative shrink-0 text-center" data-name="text 1">
        <Headline2 />
        <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] font-['Playfair_Display:Italic',sans-serif] font-normal italic leading-[1.8] relative shrink-0 text-[#020a0a] text-[22px] w-[364px]">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren.</p>
      </div>
      <div className="content-stretch flex flex-col gap-[32px] items-center justify-center relative shrink-0" data-name="logos">
        <div className="h-[80px] relative shrink-0 w-[174px]" data-name="logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 80">
            <path d={svgPaths.p335f30f0} fill="var(--fill-0, #3E4339)" id="logo" />
          </svg>
        </div>
        <Logo />
        <div className="h-[80px] relative shrink-0 w-[174px]" data-name="logo">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 174 80">
            <path d={svgPaths.p335f30f0} fill="var(--fill-0, #3E4339)" id="logo" />
          </svg>
        </div>
      </div>
      <div className="bg-[#f5f5f5] h-[475px] relative shrink-0 w-full" data-name="footer">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[56px] items-center px-[16px] py-[64px] relative size-full">
            <div className="h-[48px] relative shrink-0 w-[226px]" data-name="logo-monto">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 48">
                <path d={svgPaths.p2caa2d00} fill="var(--fill-0, #020A0A)" id="Vector" />
              </svg>
              <div className="absolute inset-[84.57%_22.74%_0.41%_74.07%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20711 7.2079">
                  <path d={svgPaths.pe8b2d00} fill="var(--fill-0, #8D8E8E)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[text-box-edge:cap_alphabetic] [text-box-trim:trim-both] [word-break:break-word] font-['Inter_Tight:Light',sans-serif] leading-[1.6] min-w-full not-italic relative shrink-0 text-[#020a0a] text-[18px] text-center w-[min-content] whitespace-pre-wrap">
              Lorem ipsum dolor sit amet
              <br aria-hidden />
              {` sadipscing elitr, sed diam nonumy et `}
              <br aria-hidden />
              {`eirmod tempor invidunt ut labore magn aliquyam erat diam voluptua. `}
            </p>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomeMobile() {
  return (
    <div className="bg-white relative size-full" data-name="Home Mobile">
      <div className="-translate-x-1/2 absolute bottom-[5852px] h-[980px] left-1/2 w-[395px]" data-name="header">
        <div className="-translate-x-1/2 absolute bottom-0 h-[792px] left-1/2 w-[395px]" data-name="header">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[118.48%] left-[-117.22%] max-w-none top-[-9.26%] w-[325.23%]" src={imgHeader} />
          </div>
        </div>
        <div className="-translate-x-1/2 absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[452px] left-1/2 to-white via-[43.269%] via-[rgba(255,255,255,0.5)] w-[395px]" data-name="gradient" />
        <div className="absolute aspect-[69/34] bottom-[304px] left-[45.82%] right-[46.08%]" data-name="arrow">
          <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34.8284 20.2427">
              <path d={svgPaths.p103af3c0} id="arrow" stroke="var(--stroke-0, white)" strokeMiterlimit="10" strokeWidth="4" />
            </svg>
          </div>
        </div>
        <div className="absolute aspect-[258.98638916015625/55] bottom-[814px] left-[21.01%] right-[21.77%]" data-name="logo-monto">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 226 48">
            <path d={svgPaths.p2caa2d00} fill="var(--fill-0, #020A0A)" id="Vector" />
          </svg>
          <div className="absolute inset-[84.57%_22.74%_0.41%_74.07%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.20711 7.2079">
              <path d={svgPaths.pe8b2d00} fill="var(--fill-0, #8D8E8E)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute bottom-[934px] h-[14px] left-0 overflow-clip right-0" data-name="Font Mobile">
          <Slider />
        </div>
      </div>
      <Content />
      <div className="absolute h-[254px] left-[calc(50%-7.5px)] top-[1085px] w-[312px]" data-name="logo-o">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 312 254">
          <path d={svgPaths.p39a28e30} fill="var(--fill-0, #020A0A)" id="Vector" opacity="0.02" />
        </svg>
      </div>
    </div>
  );
}