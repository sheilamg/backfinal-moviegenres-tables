import { PartialType } from '@nestjs/swagger';
import { CreateCommentsUserDto } from './create-comments_user.dto';

export class UpdateCommentsUserDto extends PartialType(CreateCommentsUserDto) {}
