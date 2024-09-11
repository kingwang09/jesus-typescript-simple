import Jimp from "jimp";
import sharp from "sharp";
const { promisify } = require('util');
const fs = require('fs');

async function centerImage(inputPath: string, outputPath: string) {
    try {
      const image = await Jimp.read(inputPath);
      
      // 이미지 자동 크롭
      image.autocrop();
      
      // 정사각형 배경 생성
    //   const size = Math.max(image.getWidth(), image.getHeight());
    //   const background = new Jimp(size, size, 0xffffffff);  // 흰색 배경
      
    //   // 이미지를 배경 중앙에 배치
    //   background.composite(image, (size - image.getWidth()) / 2, (size - image.getHeight()) / 2);
      
      // 결과 저장
      await image.writeAsync(outputPath);
    // await image.writeAsync(outputPath);
      
      console.log('이미지 처리 완료');
    } catch (error) {
      console.error('이미지 처리 중 오류 발생:', error);
    }
  }

  async function convertPng(filePath: string, outputPath: string){
    const inputBuffer = await promisify(fs.readFile)(filePath);
    const { width } = await sharp(inputBuffer).metadata();

    const writeBuffer = await sharp(inputBuffer)
      .resize({
        width,
      })
      .png()
      .toBuffer();
    await promisify(fs.writeFile)(outputPath, writeBuffer);
    
  }
  
  convertPng('40703234_1.avif', 'test.png');
  
  // 함수 사용
  //centerImage('500000_561_914_img_39914561_1.jpg', 'output.png');