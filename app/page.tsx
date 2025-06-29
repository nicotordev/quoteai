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
    <div className="bg-[#302F31]">
      {/* Hero Section */}

      <div className="pb-16 sm:pb-24 lg:pb-36 border-b border-[#5EB77D]">
        <div className="container mx-auto px-4">
          <div className="w-full flex items-center justify-center pt-12 sm:pt-16 lg:pt-20">
            <Image
              src={assets.logo || "/placeholder.svg"}
              alt="logo"
              width={248}
              height={248}
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-62 xl:h-62"
            />
          </div>
        </div>

        <div className="pt-16 sm:pt-24 lg:pt-32 xl:pt-40 relative">
          <div className="container mx-auto px-4 relative z-10">
            <div>
              <h1 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-[#fafafa] text-center">
                OWN THE VIRAL
                <br />
                <span className="text-[#5EB77D]">AI ENGINE</span>
              </h1>
            </div>

            <div className="pt-6 sm:pt-8 lg:pt-10 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white px-4">
              Tag <strong className="text-[#37AECF]">@MakeItQuote.</strong>
              <br />
              Harvest the signal. TrainAI.
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-20 xl:pt-28 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
              <button className="bg-transparent border-transparent text-[#000000] font-zen-dots text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight relative pr-8 sm:pr-12 pl-6 sm:pl-8 py-2 transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5EB77D] focus:ring-offset-2 focus:ring-offset-[#302F31] active:scale-95 w-full sm:w-auto max-w-xs sm:max-w-none">
                <span className="relative z-10">LAUNCH APP</span>

                <Image
                  src={assets.launchAppButton || "/placeholder.svg"}
                  alt="launch app"
                  width={411}
                  height={74}
                  className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-200 hover:opacity-90"
                />
              </button>

              <button className="bg-transparent border-transparent text-[#5EB77D] font-zen-dots text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight relative pl-12 sm:pl-16 pr-3 sm:pr-4 py-2 transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-[#5EB77D] focus:ring-offset-2 focus:ring-offset-[#302F31] active:scale-95 w-full sm:w-auto max-w-xs sm:max-w-none">
                <span className="relative z-10">HOW IT WORKS</span>

                <Image
                  src={assets.howItWorksButton || "/placeholder.svg"}
                  alt="how it works"
                  width={411}
                  height={74}
                  className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-200 hover:opacity-90"
                />
              </button>
            </div>
          </div>

          <Image
            src={assets.pathDecorationLeft || "/placeholder.svg"}
            alt="path decoration left"
            width={501}
            height={501}
            className="absolute bottom-0 left-0 w-[25vw] opacity-80 sm:opacity-100 min-w-[251px] min-h-[251px] z-0"
          />

          <Image
            src={assets.pathDecorationRight || "/placeholder.svg"}
            alt="path decoration right"
            width={501}
            height={501}
            className="absolute bottom-0 right-0 w-[25vw] opacity-80 sm:opacity-100 min-w-[251px] min-h-[251px] z-0"
          />
        </div>
      </div>

      {/* 3-Step Flywheel Section */}

      <div className="bg-[#E3E3E3] py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="pb-12 sm:pb-16 lg:pb-24">
            <h2 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-black text-center">
              3-Step
              <br />
              <span className="text-[#5EB77D]">Flywheel</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 pb-12 sm:pb-16 lg:pb-20">
            {steps.map((step) => (
              <div className="flex flex-col items-center justify-center w-full lg:w-1/3" key={step.id}>
                <Image
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  width={95}
                  height={95}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 aspect-square"
                />

                <div className="flex flex-col items-center justify-center pt-6 sm:pt-8">
                  <span className="text-[#5EB77D] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight font-zen-dots text-center">
                    {step.id}
                  </span>

                  <span className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-zen-dots text-center">
                    {step.title}
                  </span>

                  <p className="pt-4 sm:pt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-roboto text-black text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#302F31] w-full lg:w-5/6 mx-auto py-8 sm:py-12 lg:py-16 flex items-center justify-center px-4">
            <h3 className="font-zen-dots text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-[#fafafa] text-center">
              Prompt, Build Data Models, Earn
            </h3>
          </div>
        </div>
      </div>

      {/* Project User Stats Section */}

      <div className="bg-[#5EB77D]">
        <div className="container mx-auto py-16 sm:py-24 lg:py-32 px-4">
          <div className="pb-12 sm:pb-16 lg:pb-20">
            <h2 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-white text-center">
              PROJECT
              <br />
              <span className="text-black">USER STATS</span>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-16">
            {[
              { stat: "100+\nMILLION", label: "All Time\nPrompts" },

              { stat: "250K+", label: "Daily Prompts" },

              { stat: "25%+", label: "Growth\nLast 30 Days" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center border border-white p-4 sm:p-6 lg:p-8 min-h-[300px] sm:min-h-[400px] lg:min-h-[560px] w-full lg:w-1/3"
              >
                <p className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight text-white text-center whitespace-pre-line">
                  {item.stat}
                </p>

                <p className="font-zen-dots text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black text-center pt-6 sm:pt-8 lg:pt-12 whitespace-pre-line">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* $QUOTEAI Boost Section */}
      <div className="pt-16 sm:pt-24 lg:pt-32 bg-white">
        <div className="pb-12 sm:pb-16 lg:pb-24 container mx-auto px-4">
          <h2 className="text-black font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-center">
            $QUOTEAI Gives You
            <br />a <strong className="text-[#5EB77D]">Boost!</strong>
          </h2>
        </div>

        <div className="mx-auto container px-4 flex flex-col gap-2">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16 text-center mb-4">
            <div>
              <span className="font-zen-dots text-lg sm:text-xl md:text-2xl lg:text-3xl text-black text-center">
                Tier
              </span>
            </div>
            <div>
              <span className="font-zen-dots text-lg sm:text-xl md:text-2xl lg:text-3xl text-black text-center">
                Stake ≥
              </span>
            </div>
            <div>
              <span className="font-zen-dots text-lg sm:text-xl md:text-2xl lg:text-3xl text-black text-center">
                Boost
              </span>
            </div>
          </div>

          {/* Table Rows */}
          {[
            { bg: assets.bg.silverBg, tier: "Silver", stake: "1 k", boost: "1×" },
            { bg: assets.bg.violetBg, tier: "Neon", stake: "10 k", boost: "1.25×" },
            { bg: assets.bg.yellowBg, tier: "Gold", stake: "50 k", boost: "1.5×" },
            { bg: assets.bg.blueBg, tier: "Holo", stake: "200 k", boost: "2×" },
            { bg: assets.bg.redBg, tier: "Flame", stake: "500 k", boost: "3×" },
          ].map((row, index) => (
            <div key={index} className="relative grid grid-cols-3 gap-4 sm:gap-8 lg:gap-16 py-2 sm:py-3">
              <Image
                src={row.bg || "/placeholder.svg"}
                alt={`${row.tier} bg`}
                width={100}
                height={100}
                className="absolute top-0 left-0 w-full h-full z-0"
              />
              <div className="flex items-center justify-center">
                <span className="font-zen-dots text-lg sm:text-xl md:text-2xl lg:text-3xl text-black text-center relative z-10">
                  {row.tier}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-zen-dots text-lg sm:text-xl md:text-2xl lg:text-3xl text-black text-center relative z-10">
                  {row.stake}
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span className="font-zen-dots text-lg sm:text-xl md:text-2xl lg:text-3xl text-black text-center relative z-10">
                  {row.boost}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto pt-16 sm:pt-24 lg:pt-32 px-4">
          <Image src={assets.videoPlaceholder} alt="video placeholder" width={1000} height={1000} className="w-full h-auto aspect-video" />
        </div>

        <div className="container mx-auto pt-16 sm:pt-24 lg:pt-32 pb-16 sm:pb-24 lg:pb-32 px-4">
          <div>
            <h4 className="font-zen-dots text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-black text-center">
              XP = Tokens + Tweets + Engagement.
              <br />
              Hit the line auto-upgrade.
            </h4>
          </div>
        </div>
      </div>

      {/* Build a Data Node Section */}
      <div className="bg-[#E3E3E3]">
        <div className="container mx-auto py-16 sm:py-24 lg:py-32 px-4">
          <div className="pb-12 sm:pb-16 lg:pb-24">
            <h2 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-black text-center">
              Build a Data Node
              <br />
              and <strong className="text-[#5EB77D]">Earn</strong>
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
            <div className="w-full lg:w-1/2">
              <p className="font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
                Whenever someone prompts Quote the platform gathers data and uses it to build data models. Whenever
                these data models are monetized you can earn a piece by building and leveling up your data node.
                <br />
                <br />
                Building and leveling up a data node is easy. Just prompt Quote to make Quotes. The more you prompt and
                the more engagement your prompts get the more XP you earn which is used to build and level your Data
                Node.
                <br />
                <br />
                <strong>$QUOTEAI</strong> stakers get a leg up since they get boosted XP returns based on their staking
                tier.
              </p>
            </div>

            <div className="w-full lg:w-1/2">
              <Image
                src={assets.buildADataNodeAndEarn || "/placeholder.svg"}
                alt="build a data node and earn"
                className="w-full h-full object-contain"
                width={640}
                height={594}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Data Models Section */}
      <div className="bg-[#5DB27B]">
        <div className="container mx-auto py-16 sm:py-24 lg:py-32 px-4">
          <div className="pb-12 sm:pb-16 lg:pb-24">
            <h2 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-black text-center">
              Data Models to
              <br />
              <span className="text-white">Advance AI Learning</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-16">
            {[
              { image: assets.dataModelsToAdvanceAiLearning.aiAgents, title: "AI Agents." },
              { image: assets.dataModelsToAdvanceAiLearning.generativeAiTools, title: "Generative AI Tools." },
              { image: assets.dataModelsToAdvanceAiLearning.aiPoweredSmmTools, title: "AI Powered SMM Tools." },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 sm:p-8 flex flex-col items-center justify-center w-full md:w-1/3 transition-transform duration-200 hover:scale-105">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={350}
                  height={350}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
                />
                <p className="font-zen-dots text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-black text-center pt-6 sm:pt-8">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>



      {/* Privacy First Section */}
      <div className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-16">
            <div className="text-center lg:text-left">
              <p className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-black">
                <strong className="text-[#5EB77D]">PRIVACY</strong>
                <br />
                FIRST
              </p>
            </div>

            <div>
              <ul className="space-y-4">
                {[
                  { icon: assets.square.green, text: "Hash-only storage" },
                  { icon: assets.square.blue, text: "1-click opt-out" },
                  { icon: assets.square.green, text: "Wallet IDs" },
                  { icon: assets.square.blue, text: "Never @handles" },
                ].map((item, index) => (
                  <li key={index} className="flex items-center justify-start gap-3">
                    <Image
                      src={item.icon || "/placeholder.svg"}
                      alt="square"
                      width={24}
                      height={24}
                      className="w-6 h-6 flex-shrink-0"
                    />
                    <p className="font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-black">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="bg-[#302F31] pt-16 sm:pt-24 lg:pt-32">
        <div className="container mx-auto px-4">
          <div className="pb-12 sm:pb-16 lg:pb-24">
            <h5 className="font-zen-dots text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight text-white text-center">
              ROADMAP
            </h5>
          </div>
          <Image
            src={assets.roadmap || "/placeholder.svg"}
            alt="roadmap"
            width={1016}
            height={1230}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#5EB77D]">
        <div className="container mx-auto py-16 sm:py-20 lg:py-28 px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16">
            <h5 className="font-zen-dots text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white text-center lg:text-left">
              Ready to turn
              <br />
              tweets into yield?
            </h5>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0">
              <button className="bg-transparent border-transparent text-white font-zen-dots text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight relative pr-8 sm:pr-12 pl-6 sm:pl-8 py-2 transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5EB77D] active:scale-95 w-full sm:w-auto max-w-xs sm:max-w-none">
                <span className="relative z-10">START STAKING</span>
                <Image
                  src={assets.startStaking || "/placeholder.svg"}
                  alt="start staking"
                  width={411}
                  height={74}
                  className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-200 hover:opacity-90"
                />
              </button>

              <button className="bg-transparent border-transparent text-white font-zen-dots text-base sm:text-lg lg:text-xl xl:text-2xl leading-tight relative pl-12 sm:pl-16 pr-3 sm:pr-4 py-2 transition-all duration-200 hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5EB77D] active:scale-95 w-full sm:w-auto max-w-xs sm:max-w-none">
                <span className="relative z-10">JOIN DISCORD</span>
                <Image
                  src={assets.joinDiscord || "/placeholder.svg"}
                  alt="join discord"
                  width={411}
                  height={74}
                  className="absolute top-0 left-0 w-full h-full z-0 transition-opacity duration-200 hover:opacity-90"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#302F31]">
        <div className="container mx-auto pt-16 sm:pt-24 lg:pt-32 pb-8 flex flex-col items-center justify-center px-4">
          <Image
            src={assets.logo || "/placeholder.svg"}
            alt="logo"
            width={248}
            height={248}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
          />
          <p className="pt-8 sm:pt-12 lg:pt-16 text-[#B3B3B3] text-base sm:text-lg md:text-xl font-inter font-medium text-center">
            © 2025 QUOTE AI — Built for creators, powered by prompts.
          </p>
        </div>
      </footer>
    </div>
  );
}
