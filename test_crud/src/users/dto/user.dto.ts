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

export class UserDto {
  @IsOptional() // This property is optional
  @IsInt()
  id: number;

  @IsString()
  @IsNotEmpty({ message: 'User must have a name.' })
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'User Role must be INTERN | ENGINEER | ADMIN' })
  role: string;
}
