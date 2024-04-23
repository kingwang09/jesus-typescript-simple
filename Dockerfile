FROM node:18

# 환경 변수를 통해 시간대 설정하기
ENV TZ=Asia/Seoul

# 타임존을 설정하는 패키지를 설치하고, 시간대를 변경하기 위한 명령어 실행
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Define the command to run the app
CMD [ "npm", "start" ]