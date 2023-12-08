import {z, ZodType} from 'zod';
import type {CarPropsCreate} from '@models/Cars';

type CarPropsCreateSchema = {
  [K in keyof CarPropsCreate]: ZodType<CarPropsCreate[K], any, any>;
};

export const createAuctionSchema = z.object<CarPropsCreateSchema>({
  name: z.string().min(2, 'Nome é obrigatório').max(255),
  brand: z.string().min(2, 'Marca é obrigatório').max(255),
  model: z.string().min(2, 'Modelo é obrigatório').max(255),
  year: z
    .number()
    .min(1886, 'Ano inferior a um valor válido')
    .max(2021, 'Ano superior a um valor válido'),
  mileage: z.number().min(0).max(999999).optional(),
  city: z.string().min(2, 'Cidade é obrigatório').max(255),
  thumbnail: z.string({required_error: 'Foto é obrigatório'}),
  price: z.string().min(0, 'Preço é obrigatório'),
  fuel: z.string().min(2).max(255).optional(),
  photos: z.array(z.string()),
  gear: z.string().min(2).max(255).optional(),
});
