import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateClientDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly poc_name: string;

  @IsString()
  readonly poc_email: string;

  @IsOptional()
  @IsBoolean()
  readonly _active?: boolean;
}
