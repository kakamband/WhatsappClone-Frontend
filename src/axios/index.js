import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://whatsapp-mern-mscalel.herokuapp.com/'
})

export default instance