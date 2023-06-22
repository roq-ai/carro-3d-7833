import * as yup from 'yup';

export const carValidationSchema = yup.object().shape({
  image: yup.string().required(),
  details: yup.string().required(),
  dealership_id: yup.string().nullable(),
});
