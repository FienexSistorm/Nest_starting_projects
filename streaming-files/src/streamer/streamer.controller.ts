import { NotFoundException } from '@nestjs/common/exceptions';
import { Controller, Get, Header, StreamableFile } from '@nestjs/common';
import { createReadStream, existsSync } from 'fs';
import { join } from 'path';

@Controller('streamer')
export class StreamerController {


    @Get("package_json")
    getFile(): StreamableFile {
        const file = createReadStream(join(process.cwd(), 'package.json')); // process.cwd() is used to get the current working directory of the node.js process
        return new StreamableFile(file);
    }



    /* ----------------- Setting the header of the response file ---------------- */
    @Get("another_file")
    @Header("content-type", "application.json")
    @Header("Content-Disposition", "attachement;filename='package.json'")
    getAnotherFile(): StreamableFile  {
        let path = join(process.cwd(), 'packagse.json'); // path constructino
        if (existsSync(path)) {     // Checking if the file exists or not
            const file = createReadStream(path); // process.cwd() is used to get the current working directory of the node.js process
            return new StreamableFile(file);
        }else{
            console.log("the file does not exist");
            // TODO:: Emit an exception when the file does not exist in the specified directrory
        }
    }

    /* -------------- Setting the headers after retrieving the file ------------- */
    // TODO:: Set the header of the response (content-type && the file name) after retrieving the file
}
