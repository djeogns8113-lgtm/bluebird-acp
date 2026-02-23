export async function executeJob(job: any) {
  // 실제 구현 시에는 거래량 API를 호출해야 함
  // 지금은 예시 데이터 반환

  const topCoins = [
    { rank: 1, symbol: "BTC", name: "Bitcoin", volumeChange: "+23.5%", marketCap: "$1.2T" },
    { rank: 2, symbol: "ETH", name: "Ethereum", volumeChange: "+18.2%", marketCap: "$380B" },
    { rank: 3, symbol: "SOL", name: "Solana", volumeChange: "+45.1%", marketCap: "$85B" },
    { rank: 4, symbol: "XRP", name: "Ripple", volumeChange: "+12.8%", marketCap: "$32B" },
    { rank: 5, symbol: "DOGE", name: "Dogecoin", volumeChange: "+67.3%", marketCap: "$28B" },
    { rank: 6, symbol: "ADA", name: "Cardano", volumeChange: "+15.4%", marketCap: "$25B" },
    { rank: 7, symbol: "AVAX", name: "Avalanche", volumeChange: "+31.2%", marketCap: "$12B" },
    { rank: 8, symbol: "LINK", name: "Chainlink", volumeChange: "+22.7%", marketCap: "$10B" },
    { rank: 9, symbol: "DOT", name: "Polkadot", volumeChange: "+19.5%", marketCap: "$8B" },
    { rank: 10, symbol: "MATIC", name: "Polygon", volumeChange: "+28.9%", marketCap: "$7B" },
  ];

  let result = "📊 실버 가챠 결과\n\n";
  result += "최근 6시간 내 매수 거래량 급증 코인 TOP 10\n";
  result += "(시총 높은 순)\n\n";

  topCoins.forEach((coin) => {
    result += `${coin.rank}. ${coin.symbol} (${coin.name})\n`;
    result += `   거래량 변화: ${coin.volumeChange} | 시총: ${coin.marketCap}\n\n`;
  });

  result += "⚠️ 이 데이터는 예시입니다. 실제 서비스 시 API 연동 필요.";

  return { result };
}

export async function validateJob(job: any) {
  return { valid: true };
}
