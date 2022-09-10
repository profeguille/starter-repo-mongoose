import { connect } from 'mongoose';
import { Usuarios } from './models/usuario.js';

export async function connectMG() {
  try {
    return await connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true });
  } catch (e) {
    console.log(e);
  }
}

const db = await connectMG();
if (!db) throw 'can not connect to the db';

const usuario = new Usuarios({
  name: 'guille!!!!',
  usuario: 'guille_jf',
  email: 'guille@guille.com',
  password: 123123123,
});

const usuarioGuardado = await usuario.save();
console.log(usuarioGuardado);
