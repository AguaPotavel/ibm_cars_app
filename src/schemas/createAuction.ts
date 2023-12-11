import {z, ZodType} from 'zod';
import type {CarPropsCreate} from '@models/Cars';

type CarPropWithThumb = CarPropsCreate & {thumbnail?: string; mileage?: string};

type CarPropsCreateSchema = {
  [K in keyof CarPropWithThumb]: ZodType<CarPropWithThumb[K], any, any>;
};

export const createAuctionSchema = z.object<CarPropsCreateSchema>({
  name: z.string().min(2, 'Nome é obrigatório').max(255),
  brand: z.string().min(2, 'Marca é obrigatório').max(255),
  model: z.string().min(2, 'Modelo é obrigatório').max(255),
  year: z
    .number({invalid_type_error: 'Ano é obrigatório'})
    .min(1886, 'Ano inferior a um valor válido')
    .max(2021, 'Ano superior a um valor válido'),
  mileage: z.string().optional(),
  city: z.string().min(2, 'Cidade é obrigatório').max(255),
  thumbnail: z.string().optional(),
  price: z.string().min(1, 'Preço é obrigatório'),
  fuel: z.string().optional(),
  photos: z
    .array(z.string({required_error: 'Foto é obrigatório'}), {
      required_error: 'Foto é obrigatório',
    })
    .min(1, 'É necessário no mínimo uma foto é obrigatório'),
  gear: z.string().optional(),
});
