// import { PRODUCT_REPOSITORY } from 'src/core/constants';
// import { Product } from './entities/product.entity';
// import { databaseProviders } from 'src/core/database/database.providers';

// export const productProviders = [
//     {
//         provide: PRODUCT_REPOSITORY,
//         useFactory: (connection: any) => connection.getRepository(Product),
//         // inject: [DatabaseModule], 
//     },
// ];


import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Product } from './entities/product.entity';


export const productProviders = [
    {
        provide: PRODUCT_REPOSITORY,
        useValue: Product,
    },
    
];