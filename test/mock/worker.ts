import { server } from './server';

if (typeof window === 'undefined') {
  server.listen();
}
