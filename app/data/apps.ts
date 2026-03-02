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
        "BSC/EVM-based cryptocurrecy Dex with staking, vesting and Defi",
      tech: ["Solidity", "Next.js", "Typescript", "EVM", "GraphQl"],
    },
    {
      id: "golbal-tasker",
      title: "Global tasker an IOS/Andriod mobile App -(WIP)",
      description:
        "In this app it's focuse on the posters ad tasker and bridging the gap within the market at resonable rates",
      tech: ["React-Native", "Expo", "Typescript", "Javascript", "Superbase", "PostGres DB"],
    },
    {
      id: "ghost-ledger",
      title: "Ghost Ledger an IOS/Andriod mobile App -(WIP)",
      description:
        "In this app it's focuse on the the individual tracking/monitoring there finances ",
      tech: ["React-Native", "Expo", "Typescript", "Javascript", "Superbase", "PostGres DB"],
    },
  ];