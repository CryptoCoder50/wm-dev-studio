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
  ];