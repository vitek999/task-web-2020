import ky from 'ky';
import { BASE_URL } from '../constants/Url';

export const HttpClient = ky.extend({ prefixUrl: BASE_URL });
