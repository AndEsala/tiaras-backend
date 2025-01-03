import { CategoriaEntity } from "src/categorias/domain/entites/Categoria.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'productos' })
export class ProductoEntity {
    @PrimaryGeneratedColumn({ name: 'id_producto', type: 'int' })
    idProducto: number;

    @Column({ name: 'nombre', type: 'varchar', length: 50 })
    nombre: string;

    @Column({ name: 'descripcion', type: 'varchar', length: 255 })
    descripcion: string;

    @Column({ name: 'precio', type: 'decimal' })
    precio: number;

    @Column({ name: 'imagenes', array: true, type: 'text' })
    imagenes: string[];

    @ManyToMany(() => CategoriaEntity, categoria => categoria.idCategoria)
    @JoinTable({ name: 'productos_categorias', joinColumn: { name: 'id_producto' }, inverseJoinColumn: { name: 'id_categoria' } })
    categorias: CategoriaEntity[];
}