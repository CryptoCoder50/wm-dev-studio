export interface App {
    id: string;
    title: string;
    description: string;
    tech: string[];
    url?: string;
  }
  
  export const apps: App[] = [
    {
      id: "smokie-joe",
      title: "Smokie Joe Token",
      description:
        "Avalanche-based token with staking, vesting, and proof-of-funds contract.",
      tech: ["Solidity", "Next.js", "Avalanche"],
        url: "https://smokie-joe.vercel.app/"
    },
    {
      id: "ai-trading",
      title: "AI Trading System",
      description:
        "Multi-agent AI crypto trading system with Alpaca integration.",
      tech: ["Python", "Alpaca API", "AI Models"],
    },
    {
      id: "moonwalker-swap-dex",
      title: "Moonwalker Swap Dex",
      description:
        "BSC/EVM-based cryptocurrency Dex with staking, vesting and Defi",
      tech: ["Solidity", "Next.js", "Typescript", "EVM", "GraphQl"],
      url: "https://moon-walker-swap-front-end-main.vercel.app/",
    },
    {
      id: "golbal-tasker",
      title: "Global tasker an IOS/Andriod mobile App - *WIP*",
      description:
        "In this app it's focus on the global posters and tasker and bridging the gap within the market at resonable rates",
      tech: ["React-Native", "Expo", "Typescript", "Javascript", "Superbase", "PostGres DB"],
    },
    {
      id: "ghost-ledger",
      title: "Ghost Ledger an IOS/Andriod mobile App - *WIP*",
      description:
        "In this app it's focus on the the individual tracking/monitoring their finances ",
      tech: ["React-Native", "Expo", "Typescript", "Javascript", "Superbase", "PostGres DB"],
    },
  ];
