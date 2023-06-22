import * as yup from 'yup';

export const teamMemberValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  dealership_id: yup.string().nullable(),
});
