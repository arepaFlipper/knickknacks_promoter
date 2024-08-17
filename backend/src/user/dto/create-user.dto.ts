import {
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  username: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;

  password: string;
}
