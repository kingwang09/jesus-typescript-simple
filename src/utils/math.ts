export function getAverage(array: number[]): number {
    if (array.length === 0) return 0;
    return (
      array.reduce((a = 0, b) => {
        return a + b;
      }) / array.length
    );
  }
  
  // stanine 1~9 범위에 10을 곱한 결과값(100점 척도를 위해)
  export function getStanine10(zScore: number) {
    return getRoundedScore((zScore * 2 + 5) * 10);
  }

  export function getStanine(zScore: number) {
    return getRoundedScore(zScore * 2 + 5);
  }
  
  export function getPercentile(zScore: number) {
    return Math.round(zScore * 10 + 50);
  }
  
  export function getStandardDeviation(array: number[]) {
    const n = array.length;
    const mean = getAverage(array);
    if (n === 0) return 0;
    return Math.sqrt(
      array.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
    );
  }
  
  export function getZScore(
    value: number,
    average: number,
    standardDeviation: number
  ) {
    return (value - average) / (standardDeviation || 1);
  }
  
  export function getRoundedScore(score: number) {
    return Math.round((score + Number.EPSILON) * 100000) / 100000;
  }
  