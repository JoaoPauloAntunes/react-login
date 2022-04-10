import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
})

export const createSession = async (email, password) => {
  const user = {
    id: "2sdrgdfh",
    email: "teste1@teste.com",
  }
  const token = "dfhfghfgjfgjtghj"

  let statusCode = 403;
  if (email === user.email && password === 'secret') {
    statusCode = 201;
  }
  
  // return api.post('sessions', { email, password });
  return {
    data: {
      user,
      token,
    },
    statusCode,
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