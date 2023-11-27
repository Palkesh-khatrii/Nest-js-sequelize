import { Test11Service } from './test11.service';
import { CreateTest11Dto } from './dto/create-test11.dto';
import { UpdateTest11Dto } from './dto/update-test11.dto';
export declare class Test11Controller {
    private readonly test11Service;
    constructor(test11Service: Test11Service);
    create(createTest11Dto: CreateTest11Dto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTest11Dto: UpdateTest11Dto): string;
    remove(id: string): string;
}
