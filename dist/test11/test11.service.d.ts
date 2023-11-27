import { CreateTest11Dto } from './dto/create-test11.dto';
import { UpdateTest11Dto } from './dto/update-test11.dto';
export declare class Test11Service {
    create(createTest11Dto: CreateTest11Dto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTest11Dto: UpdateTest11Dto): string;
    remove(id: number): string;
}
