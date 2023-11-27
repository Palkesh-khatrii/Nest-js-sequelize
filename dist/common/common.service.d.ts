export declare class CommonService {
    getRandomJoke(): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
}
