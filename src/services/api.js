import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const createSession = async (email, password) => {
  // return api.post('sessions', { email, password });
  return {
    data: {
      user: {
        id: "2sdrgdfh",
        email: "teste@teste.com",
      },
      token: "dfhfghfgjfgjtghj",
    }
  }
}

export const getUsers = async () => {
  // return api.get('users');
  return {
    "data": [
      {
        _id: "2sdrgdfh",
        email: "teste1@teste.com"
      },
      {
        _id: "dfhfghfgh",
        email: "teste2@teste.com"
      },
    ]
  }
}