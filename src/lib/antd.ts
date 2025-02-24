// lib/antd.ts
import { createCache, extractStyle } from '@ant-design/cssinjs';

let antdCache: ReturnType<typeof createCache> | null = null;

export function getAntdSSRStyles() {
  if (!antdCache) antdCache = createCache();
  return extractStyle(antdCache, { plain: true });
}

export function resetAntdCache() {
  antdCache = null;
}