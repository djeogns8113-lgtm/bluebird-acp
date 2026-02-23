export async function executeJob(job: any) {
  // 5분 후 비트코인 상승/하락 랜덤 예측
  const prediction = Math.random() > 0.5 ? "상승" : "하락";

  return {
    result: `🎲 브론즈 가챠 결과\n\n5분 후 비트코인은 **${prediction}**할 것으로 예측됩니다!\n\n⚠️ 이 예측은 재미를 위한 랜덤 결과입니다. 투자 결정에 참고하지 마세요.`,
  };
}

export async function validateJob(job: any) {
  return { valid: true };
}
