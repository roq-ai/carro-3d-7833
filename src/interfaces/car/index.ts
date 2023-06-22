import { DealershipInterface } from 'interfaces/dealership';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  image: string;
  details: string;
  dealership_id?: string;
  created_at?: any;
  updated_at?: any;

  dealership?: DealershipInterface;
  _count?: {};
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  image?: string;
  details?: string;
  dealership_id?: string;
}
