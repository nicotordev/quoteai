import Image from "next/image";
import assets from "./assets";

export default function Home() {
  const steps = [
    {
      id: 1,
      title: "Collect",
      description: "Prompt + stats hit our private vault",
      image: assets.steps.stepCollect,
    },
    {
      id: 2,
      title: "Train",
      description: "AI hones niche virality models",
      image: assets.steps.stepTrain,
    },
    {
      id: 3,
      title: "Pay",
      description: "Data & ad revenue used for rewards",
      image: assets.steps.stepPay,
    },
  ];
  return (
    <div>
      <div>
        {/* Section of the landing page */}
        <div className="pb-[144px] border-b border-[#5EB77D]">
          <div className="container mx-auto px-4">
            <div className="w-full flex items-center justify-center pt-[87.27px]">
              <Image src={assets.logo} alt="logo" width={248} height={248} />
            </div>
          </div>
          <div className="pt-[154.88px] relative">
            <div className="container mx-auto">
              <div>
                <h1 className="font-zen-dots text-[131px] leading-[158px] text-[#fafafa] text-center">
                  OWN THE VIRAL
                  <br />
                  <span className="text-[#5EB77D]">AI ENGINE</span>
                </h1>
              </div>
              <div className="pt-[39px] text-center text-[47px] text-white">
                Tag <strong className="text-[#37AECF]">@MakeItQuote.</strong>
                <br />
                Harvest the signal. TrainAI.
              </div>
              <div className="pt-[112px] flex items-center justify-center">
                <button className="bg-transparent border-transparent text-[#000000] font-zen-dots text-[24px] leading-[28px] relative pr-12 pl-8 py-2">
                  LAUNCH APP
                  <Image
                    src={assets.launchAppButton}
                    alt="launch app"
                    width={411}
                    height={74}
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                  />
                </button>
                <button className="bg-transparent border-transparent text-[#5EB77D] font-zen-dots text-[24px] leading-[28px] relative pl-16 pr-4 py-2">
                  HOW IT WORKS
                  <Image
                    src={assets.howItWorksButton}
                    alt="how it works"
                    width={411}
                    height={74}
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                  />
                </button>
              </div>
            </div>
            <Image
              src={assets.pathDecorationLeft}
              alt="path decoration left"
              width={501}
              height={501}
              className="absolute bottom-0 left-0 w-[25vw]"
            />
            <Image
              src={assets.pathDecorationRight}
              alt="path decoration right"
              width={501}
              height={501}
              className="absolute bottom-0 right-0 w-[25vw]"
            />
          </div>
        </div>
        {/* Section of the landing page */}
        <div className="pt-[54px] container mx-auto">
          <div className="pb-[107px]">
            <h2 className="font-zen-dots text-[92px] leading-[100px] text-[#fafafa] text-center">
              3-Step
              <br />
              <span className="text-[#5EB77D]">Flywheel</span>
            </h2>
          </div>
          <div className="flex items-start justify-between gap-16 pb-[69px]">
            {steps.map((step) => (
              <div
                className="flex flex-col items-center justify-center"
                key={step.id}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width={95}
                  height={95}
                  className="w-[95px] h-[95px] aspect-square"
                />
                <div className="flex flex-col items-center justify-center pt-[38px]">
                  <span className="text-[#5EB77D] text-[92px] leading-[111px] font-zen-dots text-center">
                    {step.id}
                  </span>
                  <span className="text-[#fafafa] text-[50px] leading-[111px] font-zen-dots text-center">
                    {step.title}
                  </span>
                  <p className="pt-[43px] text-[34px] font-roboto text-[#fafafa] text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#5EB77D] w-5/6 mx-auto py-[67px] flex items-center justify-center">
            <h3 className="font-zen-dots text-[48px] leading-[58px] text-[#fafafa] text-center">
              Prompt, Build Data Models, Earn
            </h3>
          </div>
        </div>
      </div>
      {/* Section of the landing page */}
      <div className="pt-[158px] bg-white">
        <div className="pb-[94px] container mx-auto">
          <h2 className="text-black font-zen-dots text-[92px] leading-[100px] text-center">
            $QUOTEAI Gives You
            <br />a <strong className="text-[#5EB77D]">Boost!</strong>
          </h2>
        </div>
        <div className="mx-auto container flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-16 text-center">
            <div>
              <span className="font-zen-dots text-[36px] text-black text-center">
                Tier
              </span>
            </div>
            <div>
              <span className="font-zen-dots text-[36px] text-black text-center">
                Stake ≥
              </span>
            </div>
            <div>
              <span className="font-zen-dots text-[36px] text-black text-center">
                Boost
              </span>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-16 py-2">
            <Image
              src={assets.bg.silverBg}
              alt="silver bg"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                Silver
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                11 k
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                1×
              </span>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-16 py-2">
            <Image
              src={assets.bg.violetBg}
              alt="violet bg"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                Neon
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                10 k
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                1.25×
              </span>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-16 py-2">
            <Image
              src={assets.bg.yellowBg}
              alt="red bg"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                Gold
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                50 k
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                1.5×{" "}
              </span>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-16 py-2">
            <Image
              src={assets.bg.blueBg}
              alt="violet bg"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                Holo
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                200 k
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                2×{" "}
              </span>
            </div>
          </div>
          <div className="relative grid grid-cols-3 gap-16 py-2">
            <Image
              src={assets.bg.redBg}
              alt="yellow bg"
              width={100}
              height={100}
              className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                Flame
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                500 k{" "}
              </span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-zen-dots text-[36px] text-black text-center relative z-10">
                3×{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="container mx-auto pt-[169px]">
          <video
            src={assets.video.main}
            className="w-full h-auto rounded-lg shadow-lg"
            controls
            autoPlay
            muted
            loop
            playsInline
          />
        </div>
        <div className="container mx-auto pt-[169px] pb-[169px]">
          <div>
            <h4 className="font-zen-dots text-[48px] leading-[58px] text-black text-center">
              XP = Tokens + Tweets + Engagement.
              <br />
              Hit the line auto-upgrade.
            </h4>
          </div>
        </div>
      </div>
      {/* Section of the landing page */}
      <div className="bg-[#E3E3E3]">
        <div className="container mx-auto py-[169px]">
          <div className="">
            <h2 className="font-zen-dots text-[92px] leading-[100px] text-black text-center">
              Build a Data Node
              <br />
              and <strong className="text-[#5EB77D]">Earn</strong>
            </h2>
          </div>
          <div className="flex items-center justify-between">
            <p className="font-roboto text-[34px] leading-[40px] text-black w-1/2">
              Whenever someone prompts Quote the platform gathers data and uses
              it to build data models. Whenever these data models are monetized
              you can earn a piece by building and leveling up your data node.
              <br />
              <br />
              Building and leveling up a data node is easy. Just prompt Quote to make Quotes. The more
              you prompt and the more engagement your
              prompts get the more XP you earn which is
              used to build and level your Data Node.
              <br />
              <br />
              <strong>$QUOTEAI</strong> stakers get a leg up since they get
              boosted XP returns based on their staking tier.
            </p>
            <div className="w-1/2">
              <Image
                src={assets.buildADataNodeAndEarn}
                alt="build a data node and earn"
                className="w-full h-full object-contain"
                width={640}
                height={594}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#5DB27B]">
        <div className="container mx-auto py-[169px]">
          <div className="pb-[132px]">
            <h2 className="font-zen-dots text-[92px] leading-[100px] text-black text-center">
              Data Models to
              <br />
              <span className="text-white">Advance AI Learning</span>
            </h2>
          </div>
          <div className="flex items-baseline justify-between gap-16">
            <div className="flex flex-col items-center justify-center w-1/3">
              <Image src={assets.dataModelsToAdvanceAiLearning.aiAgents} alt="ai agents" width={350} height={350} className="object-contain" />
              <p className="font-zen-dots text-[36px] leading-[43px] text-black text-center pt-[38px]">
                AI Agents.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <Image src={assets.dataModelsToAdvanceAiLearning.generativeAiTools} alt="generative ai tools" width={350} height={350} className="object-contain" />
              <p className="font-zen-dots text-[36px] leading-[43px] text-black text-center pt-[38px]">
                Generative AI Tools.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <Image src={assets.dataModelsToAdvanceAiLearning.aiPoweredSmmTools} alt="ai powered smm tools" width={350} height={350} className="object-contain" />
              <p className="font-zen-dots text-[36px] leading-[43px] text-black text-center pt-[38px]">
                AI Powered SMM Tools.
              </p>
            </div>
          </div>
          <p className="text-white font-roboto text-[34px] text-center pt-[132px]">
            We provide narrow data models to help train Ais specific parameters related to social media
          </p>
        </div>
      </div>
      <div className="bg-[#302F31]">
        <div className="container mx-auto py-[169px]">
          <div>
            <h2 className="font-zen-dots text-[92px] leading-[100px] text-white text-center">
              PROJECT
              <br />
              <span className="text-[#5EB77D]">USER STATS</span>
            </h2>
          </div>
          <div className="flex items-stretch justify-between pt-[116px] gap-16">
            <div className="flex flex-col items-center justify-center border border-[#5EB77D] p-5 min-h-[560px]">
              <p className="font-zen-dots text-[80px] leading-[96px] text-white text-center">
                100+<br />
                MILLION
              </p>
              <p className="font-zen-dots text-[40px] text-[#5EB77D] text-center pt-[61px]">
                All Time
                Prompts
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border border-[#5EB77D] p-5 min-h-[560px]">
              <p className="font-zen-dots text-[80px] leading-[96px] text-white text-center">
                250K+
              </p>
              <p className="font-zen-dots text-[40px] text-[#5EB77D] text-center pt-[61px]">
                Daily Prompts
              </p>
            </div>

            <div className="flex flex-col items-center justify-center border border-[#5EB77D] p-5 min-h-[560px]">
              <p className="font-zen-dots text-[80px] leading-[96px] text-white text-center">
                25%+
              </p>
              <p className="font-zen-dots text-[40px] text-[#5EB77D] text-center pt-[61px]">
                Growth<br />
                Last 30 Days
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[97px] bg-white flex items-center justify-evenly gap-16">
        <div>
          <p className="font-zen-dots text-[92px] leading-[100px] text-black text-center">
            <strong className="text-[#5EB77D]">PRIVACY</strong>
            <br />
            FIRST
          </p>
        </div>
        <div>
          <ul>
            <li className="flex items-center justify-start gap-2">
              <Image src={assets.square.green} alt="square green" width={24} height={24} />
              <p className="font-roboto text-[34px] leading-[40px] text-black">
                Hash-only storage
              </p>
            </li>
            <li className="flex items-center justify-start gap-2">
              <Image src={assets.square.blue} alt="square green" width={24} height={24} />
              <p className="font-roboto text-[34px] leading-[40px] text-black">
                1-click opt-out
              </p>
            </li>
            <li className="flex items-center justify-start gap-2">
              <Image src={assets.square.green} alt="square green" width={24} height={24} />
              <p className="font-roboto text-[34px] leading-[40px] text-black">
                Wallet IDs
              </p>
            </li>
            <li className="flex items-center justify-start gap-2">
              <Image src={assets.square.blue} alt="square green" width={24} height={24} />
              <p className="font-roboto text-[34px] leading-[40px] text-black">
                Never @handles
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-[#302F31] pt-[169px]">
        <div className="container mx-auto">
          <div>
            <h5 className="font-zen-dots text-[92px] leading-[100px] text-white text-center pb-[132px]">
              ROADMAP
            </h5>
          </div>
          <Image src={assets.roadmap} alt="roadmap" width={1016} height={1230} className="w-full h-auto" />
        </div>
      </div>
      <div className="bg-[#5EB77D]">
        <div className="container mx-auto py-[140px] flex items-center justify-between">
          <h5 className="font-zen-dots text-[64px] leading-[77px] text-white text-center">
            Ready to turn<br />tweets into yield?
          </h5>
          <div className="flex items-center justify-center">
            <button className="bg-transparent border-transparent text-white font-zen-dots text-[24px] leading-[28px] relative pr-12 pl-2 py-2">
              <span className="relative z-10">
                START STAKING
              </span>
              <Image
                src={assets.startStaking}
                alt="start staking"
                width={411}
                height={74}
                className="absolute top-0 left-0 w-full h-full z-0"
              />
            </button>
            <button className="bg-transparent border-transparent text-white font-zen-dots text-[24px] leading-[28px] relative pl-16 pr-4 py-2">
              <span className="relative z-10">
                JOIN DISCORD
              </span>
              <Image
                src={assets.joinDiscord}
                alt="join discord"
                width={411}
                height={74}
                className="absolute top-0 left-0 w-full h-full z-0"
              />
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[#302F31]">
        <div className="container mx-auto pt-[169px] flex flex-col items-center justify-center">
          <Image src={assets.logo} alt="logo" width={248} height={248} />
          <p className="pt-[77px] text-[#B3B3B3] text-[23.1px] font-inter font-medium pb-8">
            © 2025 QUOTE AI — Built for creators, powered by prompts.
          </p>
        </div>

      </footer>

    </div>
  );
}
