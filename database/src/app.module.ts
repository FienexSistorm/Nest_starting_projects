import { Photo } from './user/entities/photo.entity';
import { User } from './user/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, EntityManager } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({  // Setting up the TypeOrm for our mySql Database
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: 'root',
      password: "",
      database: "nest",
      entities: [User, Photo], // Can be removed if the autoLoadEntity is set to true, because then the entities will be loaded from where they are declared from the forFeacture()
      synchronize: true,
      retryAttempts: 20,
      retryDelay: 3000,
      // when we set this property (autoLoadEntities) to true, registering the entities above is necessary because they will be loaded from the forFeature() method
      autoLoadEntities: true,

    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor(private manager: EntityManager, private dataSource: DataSource) { }  // Injecting the entityManager & the datasource which are available for us across the application
}
