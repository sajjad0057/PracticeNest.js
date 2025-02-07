import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@Prisma/client';

@Injectable()
export class DatabaseService extends PrismaClient implements OnModuleInit
{
       async onModuleInit(){
        await this.$connect()
       }
    
}
