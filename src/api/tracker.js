import axios from 'axios'

const port = 'https://f52c-177-208-49-42.sa.ngrok.io'

export default axios.create({
  baseURL: `${port}`
})