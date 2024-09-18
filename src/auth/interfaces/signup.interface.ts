import { Prisma } from '@prisma/client';

// type UserCreateInput = {
//   email: string;
//   password: string;
//   token_auto_generated: string;
// };
const createUser = (
  email: string,
  password: string,
  token_auto_generated: string,
) => {
  return Prisma.validator<Prisma.UserCreateInput>()({
    email,
    credentials: {
      create: {
        password,
        token_auto_generated,
      },
    },
  });
};
type UserCreateInput = Parameters<typeof createUser>[0];
type UserCreateOutput = ReturnType<typeof createUser>;

export { createUser, UserCreateInput, UserCreateOutput };
