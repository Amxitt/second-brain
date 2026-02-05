# Second Brain

A personal knowledge management app to save links, tweets, videos, and notes with public sharing and future AI-powered search.


## Description

Second Brain lets users:
- Save content like Youtube videos, tweets, and links
- Organize everything under one account
- Share their entire brain publicly using a single link
- view shared content without authentication

This project focuses on building a real, end-to-end system with authentication, sharing and clean data ownership.


## Tech Stack

Frpmtend: 
- React
- TypeScript
- Tailwind CSS  
- React Router

Backend: 
- Node.js
- Express
- TypeScript
- MongoDB
- JWT (httpOnly cookies)
- Zod (input validation)

## Features (v1)

- User signup & signin
- Cookie-based authentication
- Add and view saved content
- Public brain sharin via unique hash URL
- Public access without login
- Dashboard for managing content

## Project Structure

Second Brain/
├── Backend/
│   ├── src/
│   ├── routes/
│   ├── middleware/
|
├── Frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── hooks/

## Running Locally
- ensure you have all the env ready (refer to .env.example)
### Backend
- bash
cd Backend
npm install
npm run dev

### Frontend
- bash
cd Frontend
npm install
npm run dev

## Planned Features

- Delete content and revoke shared links
- Logout functionality
- Content-type filtering
- AI-powered semantic search using embeddings
- Querying saved content using LLMs

This project is built for learning full-stack system design and will evolve incrementally.


