import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import { resolve } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TrackModule } from './track/track.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:root@cluster0.2v5jpdr.mongodb.net/?retryWrites=true&w=majority'),
    FileModule,
    ServeStaticModule.forRoot({rootPath: resolve(__dirname,  'static'),}),
    TrackModule
  ],
})
export class AppModule {}
