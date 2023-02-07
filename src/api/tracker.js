import axios from "axios";

const port = process.env.PORT

export const myApi = axios.create({
  baseURL: `${port}`
})