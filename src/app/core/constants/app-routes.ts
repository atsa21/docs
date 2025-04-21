export type AppRouting =
  | 'auth'
  | 'login'
  | 'main'
  | 'my_documents'
  | 'documents';

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
  my_documents: { routerPath: 'my_documents' },
  documents: { routerPath: 'documents' },
}