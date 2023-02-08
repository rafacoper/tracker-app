import axios from "axios";

const port = process.env.PORT

export default axios.create({
  baseURL: `${port}`
})