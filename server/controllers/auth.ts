import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

const usuariosRegistrados = [
  { username: 'cfalco', name: 'Charles Falco', password: '1234', email: 'cfalco@gmail.com'},
  { username: 'oblake', name: 'Octavia Blake', password: '1234', email: 'oblake@gmail.com'}
];

const SECRET = 'tqq4tgwq45yuhuj';

const login = (req: Request, res: Response) => {
  const {username, password } = req.body();

  const usuario = usuariosRegistrados.find((usuario) =>
    usuario.username === username && usuario.password === password);

  if(!usuario) {
    return res.status(401).json({ msg: 'Las credenciales son inválidas' });
  }

  const payload = {
    name: usuario.name
  };
  const jwt = sign(payload, SECRET);
  return res.json({ jwt });

}

export default { login }
