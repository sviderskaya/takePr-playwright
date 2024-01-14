FROM node

COPY . /PlaywrightTests

WORKDIR /PlaywrightTests

RUN npm i

CMD ["npx", "playwright", "tests", "takeProfit-newFramework/tests/APItests/users.spec.ts"]

CMD ["echo", "123"]