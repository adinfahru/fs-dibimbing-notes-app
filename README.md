# Aplikasi Catatan
## Assignment Full-Stack Engineer Dibimbing

## Configuration and Setup

### Create .env file from .env.example

```
cp .env.example .env
```

### Database Integration
1. Open .env file
2. Create a database and connect it with Next.js by adjusting the `DATABASE_URL` with your own password

```
DATABASE_URL="postgresql://postgres:yourpassword@localhost:5432/notes_app?schema=public"
```

### Migrate the Database Migration

```
npx prisma db push
```

## Installation

### Node Packages 
```
npm install
```

## Run App
```
npm run dev
```