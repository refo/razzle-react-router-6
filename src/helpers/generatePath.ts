import { generatePath as genPath } from 'react-router-dom';

type Params<T> = T & Record<string, any>;

export default function generatePath<T = {}>(path: string, params?: Params<T>) {
  return genPath(path, params);
}
