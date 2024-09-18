import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import {
  createUser,
  UserCreateInput,
  UserCreateOutput,
} from './interfaces/signup.interface';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaClient) {}

  async createUserService(signup: Prisma.UserCreateInput) {
    const userData: UserCreateOutput = createUser(
      signup.email,
      signup.password,
      signup.token_auto_generated,
    );
    await this.prisma.user.create({
      data: userData,
    });
  }
}
