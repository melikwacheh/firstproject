import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const DATABASE_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306, // * use 3306 for mySQL,
  username: 'root',
  password: '',
  database: 'nest_blog',
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: true, // TODO: switch to false in prod & use migrations instead !

  migrationsTableName: 'migrations',
  migrations: ['migration/*.js'],
  cli: {
    migrationsDir: 'migration',
  },
};
