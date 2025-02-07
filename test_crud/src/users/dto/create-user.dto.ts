import {
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { UserRole } from 'src/enums/user-role.enum';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'User must have a name.' })
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'User Role must be INTERN | ENGINEER | ADMIN' })
  @IsEnum(["INTERN","ENGINEER","ADMIN"])
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
