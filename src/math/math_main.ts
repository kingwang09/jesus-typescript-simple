import { countBy } from "lodash";
import { getAverage, getPercentile, getStandardDeviation, getStanine, getStanine10, getZScore } from "../utils/math";

function main(){
    const sampleValues= [73.80534,70.36305,78.40402,80.30139,77.64991,79.48889,69.5324,81.56855,72.83364,82.41385,61.51574,75.60344,70.3786,85.08967,72.96235,73.55543,76.18528,71.11531,74.54973,80.03264,81.98128,81.44108,82.95243,74.9868,84.40344,79.04341,74.84988,83.26832,61.37362,61.75988,71.08106,81.39815,81.35072,69.70781,76.46132,75.65061,63.38329,73.56282,76.7854,75.26268,75.34883,65.75345,75.85957,78.29406,82.41952,79.5714,70.57489,68.63947,64.16509,78.80806,77.60737,78.02577,77.49942,64.97133,75.17284,77.10035,75.27095,80.87326,78.53118,77.70219,76.40995,74.99282,81.16544,82.57433,82.33399,76.18641,70.73859,78.35598,65.64633,71.98632,76.02638,64.2531,71.35185,79.92432,76.35426,78.54475,68.26777,77.22826,81.26262,64.14936,76.08532,77.40005,79.40807,64.0647,68.87515,78.30051,61.81449,64.12436,74.12254,69.55053,76.93861,67.43497,66.29293,63.54876,77.4771,69.71661,82.15978,84.17605,81.87411,60.85253,74.20514,72.3139,78.8034,78.33351,81.64706,62.33479,77.69156,76.77371,83.51096,78.98064,77.55042,76.30353,75.42572,75.62653,79.35705,75.22324,73.69185,82.99631,74.5051,83.11389,69.23345,83.80296,79.52349,81.91952,80.33637,82.23283,80.12193,83.91365,76.44765,76.54592,64.56995,76.67751,77.58333,77.49795,70.52212,81.98259,69.63709,75.32246,73.38232,71.2541,73.97755,81.04828,74.8534,74.15625,64.96715,67.17113,77.65935,73.85169,72.31879,83.16822,73.29291,74.35099,79.21202,78.07265,79.35663,79.34009,81.17764,64.25897,78.25402,64.79813,68.67795,69.63709,61.40137,74.84421,85.13543,69.4407,66.31105,78.38309,74.85134,76.74912,81.24976,80.98511];
  

    const calculator = getStanine; //getPercentile;

    //1) calculateStandardScore: 표준점수를 구함 (z-score로)
    const average = getAverage(sampleValues);
    const standardDeviation = getStandardDeviation(sampleValues); //표준 편차
    console.log(`average=${average}, standardDeviation=${standardDeviation}`);
    //z-score: 평균에서 얼마나 떨어져 있는지를 표준 편차 단위로 나타내는 값
    const zScoreList = sampleValues.map((v) => getZScore(v, average, standardDeviation)); 
    console.log(zScoreList);

    //2) stanine: (스테나인척도로 변환) -> 높을수록 상위
    const finalValues = zScoreList.map((zScore) => calculator(zScore));
    console.log(`finalValues=${finalValues}`);

    //const percentileValues = zScoreList.map((zScore) => getPercentile(zScore));
    //console.log(`percentile=${percentileValues}, minValue=${minValue}, maxValue=${maxValue}`);

    //3) 분포도 조회: 등급별 count
    const countValues = countBy(finalValues, Math.floor);
    
    //통계적 오류에 대한 보정 처리 (필요함.)
    // const countValues = countBy(finalValues, (v) => {
    //   const floorValue = Math.floor(v);
    //   if(v < 0){
    //     return 0;
    //   }else if(v > 100){
    //     return 100;
    //   }
    //   return floorValue;
    // }); 

    //stanine으로 할 때
    // const countValues = countBy(finalValues, (v) => {
    //     return Math.floor(v / 10);
    // });
    console.log('countValues: ', countValues);
    console.log(sampleValues.length);
    console.log(Object.values(countValues).map((v) => v).reduce((prev, cur)=> prev+cur));

    //특정 모델의 상위 분포 확인
    const value = 64.779;
    const minValue = Math.min.apply(Math, sampleValues);
    const maxValue = Math.max.apply(Math, sampleValues);
    
    const zScoreValue = getZScore(value, average, standardDeviation);
    const finalValue = calculator(zScoreValue);
    console.log(`score: ${value}, finalValue: ${finalValue}, floorValue: ${Math.floor(finalValue)} minScore: ${minValue}, maxScore: ${maxValue}, avgScore=${average}`);
}

interface RankRange{
    topRank: number;
    bottomRank: number;
}

function calculatePercentileRankRange(
    totalCount: number, 
    startPercentile: number, 
    endPercentile: number
  ): RankRange {
    if (startPercentile < 0 || endPercentile > 100 || startPercentile >= endPercentile) {
      throw new Error("Invalid percentile range. Start should be less than end, and both should be between 0 and 100.");
    }
  
    const topRank = Math.floor(totalCount * (startPercentile / 100)) + 1;
    const bottomRank = Math.floor(totalCount * (endPercentile / 100));
    
    // 상위 분포도 계산을 위해 백분위를 반대로 적용
    //const bottomRank = Math.ceil(totalCount * (startPercentile / 100));
    //const topRank = Math.ceil(totalCount * ((100 - endPercentile) / 100));
    return {
      topRank,
      bottomRank
    };
}

function getRankRange(startPercent: number, endPercent: number, total: number): { startRank: number, endRank: number } {
    const startRank = Math.ceil(total * (1 - (endPercent / 100)));
    const endRank = Math.floor(total * (1 - (startPercent / 100)));
    
    return { startRank, endRank };
  }

function getUpperPercent(rank: number, total: number): number {
    return (rank / total) * 100;
}
function calculatePercentileRankRangeOriginal(
    totalCount: number, 
    startPercentile: number, 
    endPercentile: number
  ): RankRange {
    if (startPercentile < 0 || endPercentile > 100 || startPercentile >= endPercentile) {
      throw new Error("Invalid percentile range. Start should be less than end, and both should be between 0 and 100.");
    }
  
    const topRank = Math.floor(totalCount * (startPercentile / 100)) + 1;
    const bottomRank = Math.floor(totalCount * (endPercentile / 100));
    return {
      topRank,
      bottomRank
    };
  }
//100, 90입력 시 1, 10 반환되도록 개선
export function calculatePercentileRankRangeV2(
    totalCount: number, 
    startPercentile: number, 
    endPercentile: number
  ): RankRange {
    if (startPercentile < 0 || endPercentile > 100 || startPercentile <= endPercentile) {
      throw new Error("Invalid percentile range. Start should be greater than end, and both should be between 0 and 100.");
    }
  
    // 상위 100%일 경우 1등으로 처리
    const topRank = startPercentile === 100 
      ? 1 
      : Math.ceil(totalCount * (1 - startPercentile / 100));

    // 종료 퍼센트일 때 등수 (하위 끝은 포함해야 하므로 floor 사용)
    const bottomRank = Math.floor(totalCount * (1 - endPercentile / 100));
    return {
      topRank,
      bottomRank
    };
  }

  function calculatePercentage(totalCount: number, includeCount: number): number {
    if (totalCount === 0) {
      return 0; // totalCount가 0일 경우 백분율은 0
    }
    return Math.floor((includeCount / totalCount) * 100);
  }
main();