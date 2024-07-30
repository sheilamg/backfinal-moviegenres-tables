import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LoginService {
  constructor(@InjectRepository(User)
  private readonly userREpository: Repository<User>
){}

  async createJWT(loginDto: CreateLoginDto){

  }

  async verifyToken(){
    
  }
}
