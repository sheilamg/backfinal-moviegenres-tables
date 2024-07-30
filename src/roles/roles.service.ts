import { InjectRepository } from '@nestjs/typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { Injectable } from '@nestjs/common';


@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    
){}

  async create_role(c_role: CreateRoleDto) {
    //const new_role: CreateRoleDto = this.roleRepository.create(c_role)
    return await this.roleRepository.save(c_role)
  }

  async show() {
    return await this.roleRepository.find({relations: {user: true}});
  }

  
}
