import { CarInterface } from 'interfaces/car';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DealershipInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  car?: CarInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    car?: number;
    team_member?: number;
  };
}

export interface DealershipGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
