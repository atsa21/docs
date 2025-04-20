export type AppRouting =
  | 'auth'
  | 'login'
  | 'main';

export const appRouts: Record<
AppRouting,
{
  routerPath: string;
  fullPath?: string;
}
> = {
  auth: { routerPath : 'auth' },
  login: { routerPath : 'login', fullPath: '/auth/login' },
  main: { routerPath: '' },
}