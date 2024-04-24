# 1단계: 환경 설정 및 dependancy 설치
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN yarn --frozen-lockfile 

###########################################################

# 2단계: next.js 빌드 단계
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .

RUN yarn build

###########################################################

# 3단계: next.js 실행 단계
FROM node:18-alpine AS runner

WORKDIR /usr/src/app
 
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/src/app/public ./public
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /usr/src/app/.next/static ./.next/static

# 컨테이너의 수신 대기 포트를 60005으로 설정
EXPOSE 60005

# node로 애플리케이션 실행
CMD ["node", "server.js"] 
