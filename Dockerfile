# 1단계: 환경 설정 및 dependency 설치
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

# 작업 디렉터리 지정
WORKDIR /front

# package.json, package-lock.json, yarn.lock 복사
COPY package.json package-lock.json ./

# 의존성 설치 (잠긴 lock 파일 수정 또는 생성 방지)
RUN yarn --frozen-lockfile 

###########################################################

# 2단계: Next.js 빌드
FROM node:18-alpine AS builder

# 작업 디렉터리 지정
WORKDIR /front

# node_modules 등의 의존성 복사
COPY --from=deps /front/node_modules ./node_modules
COPY . .

RUN yarn build

###########################################################

# 3단계: Next.js 실행
FROM node:18-alpine AS runner

# 작업 디렉터리 지정
WORKDIR /front

# 컨테이너가 수신 대기할 포트 설정
EXPOSE 3000

# 애플리케이션 실행 명령
CMD ["npm", "run", "dev"]
