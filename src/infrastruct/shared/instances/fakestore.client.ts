import { Http } from '@/domain/repositories/HTTP.ts';
import { httpKy } from '@/infrastruct/shared/instances/HTTPKy.ts';

const FAKESTORE_BASE_URL = 'https://fakestoreapi.com';
export const fakestoreClient: Http = httpKy({
  prefixUrl: FAKESTORE_BASE_URL,
});
