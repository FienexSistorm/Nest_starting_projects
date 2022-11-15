import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadModule } from './file-upload/file-upload.module';
import { SampleFileUpdloadController } from './sample-file-updload/sample-file-updload.controller';

@Module({
  imports: [
    FileUploadModule,
    MulterModule.register({ // the register method is used to set defult configs for Multer to use in its process
      dest: "./uploaded"
    })
  ],
  controllers: [AppController, SampleFileUpdloadController],
  providers: [AppService],
})
export class AppModule {}
