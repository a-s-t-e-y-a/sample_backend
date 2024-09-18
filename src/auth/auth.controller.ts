import { Body, Controller, Header, Post } from '@nestjs/common';
import { signupDto } from './dto/signup.dto';

@Controller('auth')
export class AuthController {
  @Post()
  @Header('Cache-Control', 'none')
  async createUser(@Body() signupDto: signupDto) {}
}
