import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    // A set of static users that we will use as an alternative of extracting them of the database
    private readonly users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
        },
    ];

    // Looks for a user in the list using a given username
    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }
}


export class User {

    userId: number;
    username: string;
    password: string;

}