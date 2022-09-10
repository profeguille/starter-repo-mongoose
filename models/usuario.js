import { Schema, model } from 'mongoose';

const UsuarioSchema = new Schema({
  name: { type: String, required: true, max: 100 },
  usuario: { type: String, required: true, max: 100 },
  email: { type: String, required: true, max: 100 },
  password: { type: Number, required: true },
});

export const Usuarios = model('usuarios', UsuarioSchema);
