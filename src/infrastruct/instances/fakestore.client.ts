import { Http } from '@/domain/repositories/HTTP';
import { httpKy } from '@/infrastruct/instances/HTTPKy';

const FAKESTORE_BASE_URL = 'https://fakestoreapi.com';
export const fakestoreClient: Http = httpKy({
  prefixUrl: FAKESTORE_BASE_URL,
});
