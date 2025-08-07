/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PartialType } from '@nestjs/mapped-types'
import { CreateUserDto } from './CreateUser.dto'
import { IsNumber } from 'class-validator'

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNumber()
  userId: number
}
