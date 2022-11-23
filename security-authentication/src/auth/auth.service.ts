import { UsersService } from './../users/users.service';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private userServ: UsersService, private jwtServ: JwtService) {
    }


    async validator(usernmae: string, password: string): Promise<any> {

        const user = await this.userServ.findOne(usernmae);
        if (user && user.password == password) {
            const { password, ...res } = user;
            return res;
        }

        return null;
    }

    async login(user: any) {
        const payload = { usernmae: user.username, sub: user.userId };
        return {
            access_token: this.jwtServ.sign(payload)
        }
    }

}

