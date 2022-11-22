import { UsersService } from './../users/users.service';

import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    constructor(private userServ: UsersService) {
    }


    async validator(usernmae: string, password: string): Promise<any> {

        const user = await this.userServ.findOne(usernmae);
        if (user && user.password == password) {
            const { password, ...res } = user;
            return res;
        }

        return null;

    }

}

