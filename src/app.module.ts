import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntity } from './clientes/domain/entities/Cliente.entity';
import { AuthModule } from './auth/auth.module';
import { UsuarioAuthEntity } from './auth/domain/entities/UsuarioAuth.entity';
import { RolAuthEntity } from './auth/domain/entities/RolAuth.entity';
import { UsuariosModule } from './usuarios/usuarios.module';
import { ProductosModule } from './productos/productos.module';
import { ProductoEntity } from './productos/domain/entities/Producto.entity';
import { CategoriasModule } from './categorias/categorias.module';
import { CategoriaEntity } from './categorias/domain/entites/Categoria.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'tiaras_auth',
        entities: [UsuarioAuthEntity, RolAuthEntity],
        autoLoadEntities: true,
        synchronize: true
      }),
      name: 'auth'
    }),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'tiaras_main',
        entities: [ClienteEntity, ProductoEntity, CategoriaEntity],
        autoLoadEntities: true,
        synchronize: true
      }),
      name: 'main'
    }),
    ClientesModule,
    AuthModule,
    UsuariosModule,
    ProductosModule,
    CategoriasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
