import { PartialType } from '@nestjs/swagger';
import { CreateTest11Dto } from './create-test11.dto';

export class UpdateTest11Dto extends PartialType(CreateTest11Dto) {}
