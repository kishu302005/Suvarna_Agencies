import dotenv from 'dotenv'

// force load env from backend folder
dotenv.config({ path: './.env' })

console.log("ENV LOADED:", process.env.SUPABASE_URL)