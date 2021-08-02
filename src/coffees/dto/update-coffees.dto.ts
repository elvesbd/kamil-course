import { PartialType } from '@nestjs/mapped-types';
import { CreateCoffeeDto } from './create-coffees.dto';

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {}
