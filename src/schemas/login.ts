import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Endereço de e-mail inválido.'),
  password: z.string().min(8, 'A senha deve ter no mínimo 8 caracteres.'),
});
