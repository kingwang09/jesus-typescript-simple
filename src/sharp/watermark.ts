import fs from 'fs';
import sharp from 'sharp';

const basePath = '/jesus-typescript-simple';
const testImage = 'target.jpg';
async function waterMarking() {
    // 워터마크 위치 및 투명도: 별도 지정하지 않으면 중앙으로 설정됨.
    const watermarkOptions = {
    //top: 1,
    //left: 1,
    opacity: 0.5
    //opacity: 0.1//0.5
    };
    const imageBuffer = fs.readFileSync(`${basePath}/images/${testImage}`).buffer;
    const image = sharp(imageBuffer);
  
    const watermarkImage = fs.readFileSync(`${basePath}/images/watermark.png`);
  
    sharp(`${basePath}/images/${testImage}`)
        //.resize(800) // 이미지 크기 조절 (옵션)
        .composite([{ input: watermarkImage, ...watermarkOptions }]) // 워터마크 합성
        .toFile('output.jpg', (err, info) => { // 결과 이미지 저장
            if (err) {
                console.error('error: ', err);
            } else {
                console.log('success: ', info);
            }
        });
    const watermarkedImageBuffer = await image.composite([{
      input: watermarkImage, ...watermarkOptions
    }]).toBuffer();
  
    return watermarkedImageBuffer;
  }

async function main(){
    const filePath = './result.png';
    const watermarked = await waterMarking();
    fs.writeFileSync(filePath, watermarked);
}
main();