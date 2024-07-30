import { Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn } from "typeorm";

export abstract class Mask {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    @DeleteDateColumn()
    deleted_at?: Date;
  }