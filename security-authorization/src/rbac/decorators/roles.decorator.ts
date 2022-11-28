import { SetMetadata } from "@nestjs/common";
import { Role } from "src/roles.enum";


export const ROLES_KEY = 'roles';                    // the key to set and access the roles value from the controller's route handler
export const Roles = (...roles: Role[]) => SetMetadata(ROLES_KEY, roles);        
