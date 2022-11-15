
import { Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';

@Controller('sample-upload')
export class SampleFileUpdloadController {



    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return file;
    }



    /* ----------- Use of ParseFilePipe to Validate the file uploaded ----------- */
    /* --------------------- A JPEG image with less than 1KB -------------------- */
    @Post('upload-image')
    @UseInterceptors(FileInterceptor('file'))
    uploadImageFile(@UploadedFile(
        new ParseFilePipe({
            validators: [
                // A set of validation pipes (instances)
                new MaxFileSizeValidator({ maxSize: 10000 }),     // 1000 = 1Kb
                new FileTypeValidator({ fileType: "jpeg" })    // Forcing the file type to be a JPEG
            ]
        })
    ) file: Express.Multer.File) {
        return { file };
    }



    /* ------------- Uploading An array of files passed in one field ------------ */
    @Post("upload-files-array")
    @UseInterceptors(FilesInterceptor("files"))
    uploadFileArray(@UploadedFiles() files: Array<Express.Multer.File>) {
        return { files };
    }



    /* ------------------------ Uploading Mutliple Files ------------------------ */
    @Post("upload-mulitple-files")
    @UseInterceptors(FileFieldsInterceptor([
        { name: "first-file", maxCount: 2},       // Maximum of one file 
        { name: "second-file", maxCount: 2}       // Maximum is two files 
    // NOTE - The maxCount is set to limit the number of files accpted by each field, if passed, The handler will trigger an issue
    ]))
    uploadMultipleFiles(@UploadedFiles() files: { firstFile?: Express.Multer.File[], secondFile?: Express.Multer.File[]}) {
        return {files}
    }

}
