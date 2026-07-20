import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const css = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'styles.css'),
  'utf8',
);

describe('styles accessibility contracts', () => {
  it('defines focus-visible outlines and reduced-motion overrides', () => {
    expect(css).toMatch(/:focus-visible/);
    expect(css).toMatch(/prefers-reduced-motion:\s*reduce/);
    expect(css).toMatch(/\.section-index/);
    expect(css).toMatch(/@media \(max-width:\s*1024px\)/);
  });

  it('avoids heavy motion primitives', () => {
    expect(css).not.toMatch(/@keyframes\s+hero-rise/);
    expect(css).not.toMatch(/\.reveal\b/);
    expect(css).not.toMatch(/backdrop-filter/);
  });
});
