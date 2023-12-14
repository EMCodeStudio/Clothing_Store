# CLOTHING STORE

## author: EMCodev

## <estivenmorelos@hotmail.com>

## CREATING AND SETTING FILES

## VERIFY VERSIONS

- npm -v: 10.2.1
- node -v: v20.19.0
- nvm -v: v1.1.11

## Creating Server Project (Server)

- cd Apps
- cd Server
- npm init -y
- Edit Package (Server)
- "main": "index.js",
- "type": "module",
- "scripts": { "test": "echo "Error: no test specified" && exit 1", "dev": "nodemon src/index.js", "start": "node src/index.js" },

## Creating Client Project

- cd Apps
- npx create-vite
- cd Client

## SETTING WORKSPACE AND TURBOREPO

### Install Package (root)

- npm init -y

- "scripts": { "test": "echo "Error: no test specified" && exit 1", "dev": "turbo dev", "build": "turbo build", "start": "node Apps/Server/src/index.js" },

- "workspaces" : ["Apps/*"]

### Install Node Modules and Turborepo (root)

- npm i turbo -D
- create file:
- turbo.json:
- {
    "$schema": "<https://turbo.build/schema.json>",
    "pipeline": {
    "dev": { "cache": false },
    "build": { "dependsOn": [ "^build" ], "outputs": [ "dist/**" ] },
    "lint": {}
    }
  }

- Adding Proxy to Client (Apps/Client)

### vite.config.ts

- export default defineConfig({
     plugins: [react()],
<!-- START -->
      server: {
        proxy: { 
         '/client-api': { target: "<http://localhost:3000>", changeOrigin: true, secure: false, }
        }  
      }
<!-- END -->
})

### Installing Dependencies to Server (Apps/Server)

- npm i express --workspace server   <!--  npm install express --no-save -->
- npm i serve-static --workspace server
- npm i morgan -D --workspace server

- npm i mongoose --workspace server
- npm i drizzle --workspace server
- npm i bcryptjs --workspace server
- npm i jsonwebtoken --workspace server
- npm i zod --workspace server
- npm i cookie-parser @latest --workspace server
- npm i --save-dev @types/cookie-parser --workspace server

- npm i cors --workspace server
- npm i serve-favicon --workspace server
- npm i http -D --workspace server <!--  npm i http-server -->
- npm i nodemon -D --workspace server

- mongodb://localhost/authdb -> db.js IPV6
- mongodb://127.0.0.1/authdb -> db.js IPV4

## Installing Client Libs

- npm i react-router-dom@6.20.1 --workspace client
- npm i axios --workspace client
- npm i zustand --workspace client
- npm i react-query --workspace client
- npm i react-hook-form --workspace client
- npm i js-cookie --workspace client
- npm i dayjs --workspace client

## CLIENT DEVELOTMENT

### LIBS

- npm i sass@latest --workspace client
- npm i styled-components@latest --workspace client
- npm i @mantine/core @mantine/hooks --workspace client
- npm i @tabler/icons-react --workspace client
- npm i --save-dev postcss postcss-preset-mantine postcss-simple-vars --workspace client
- npm i @mantinex/mantine-logo --workspace client
- npm i swiper --workspace client
- npm i @shoelace-style/shoelace --workspace client

### STEPS

1) Global Header Menu

- Logo *
- Menu Options *
- Search Field *
- Profile Options + Favorite *
- Social Icons Links *
- Notifications and Cart, Shipping Icons Options *
- Login Buttons Options *
- Menu fixed position

2) Home Images Carousel

- Add Images *
- Next & Preview options *
- Autoplay *
- Dragging Images *
- Slide position state animation *
- Scroll down animation *
- Shadow image *
- Title + Subtitle + Button Link

## Commands

- npm run dev
- npm run dev --workspace client
- npm run dev --workspace server
- npm run build
- npm start
