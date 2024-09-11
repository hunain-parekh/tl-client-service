import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class UpdateClientDto {
  @IsOptional()
  @IsString()
  readonly name?: string;

  @IsOptional()
  @IsString()
  readonly poc_name?: string;

  @IsOptional()
  @IsString()
  readonly poc_email?: string;

  @IsOptional()
  @IsBoolean()
  readonly _active?: boolean;
}
