import { ERole } from "@core/enums";

export interface UserModel {
  id: string;
  email: string;
  fullName: string;
  role: ERole;
}