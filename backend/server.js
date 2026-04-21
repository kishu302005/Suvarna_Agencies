import dotenv from 'dotenv'

// 👇 ABSOLUTE SAFE PATH
dotenv.config({ path: new URL('./.env', import.meta.url).pathname })

import app from './src/app.js'

const PORT = process.env.PORT || 5000

console.log("ENV CHECK:", process.env.SUPABASE_URL) // 👈 add this

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})