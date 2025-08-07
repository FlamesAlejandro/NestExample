import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
  ParseIntPipe
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/CreateUser.dto'
import { UpdateUserDto } from './dto/UpdateUser.dto'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) userId: number) {
    return this.usersService.findOne(userId)
  }

  @Patch()
  update(@Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(updateUserDto)
  }

  @Delete('soft/:id')
  softDelete(@Param('id', ParseIntPipe) userId: number) {
    return this.usersService.softDelete(userId)
  }

  @Delete('hard/:id')
  hardDelete(@Param('id', ParseIntPipe) userId: number) {
    return this.usersService.hardDelete(userId)
  }
}
