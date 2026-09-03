import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { describe, expect, it } from 'vitest';

const css: string = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), 'styles.css'),
  'utf8',
);

describe('styles accessibility contracts', () => {
  it('defines focus-visible outlines and reduced-motion overrides', () => {
    expect(css).toMatch(/:focus-visible/);
    expect(css).toMatch(/prefers-reduced-motion:\s*reduce/);
    expect(css).toMatch(/scroll-margin-top/);
    expect(css).toMatch(/scroll-padding-top/);
    expect(css).toMatch(/\.skip-link/);
    expect(css).toMatch(/@media \(max-width:\s*720px\)/);
    expect(css).toMatch(/\.primary-nav a:nth-child\(n \+ 3\)\s*{[\s\S]*display:\s*none/);
  });

  it('uses the dark enterprise tokens and avoids decorative effects', () => {
    expect(css).toMatch(/--bg:\s*#0b0f17/i);
    expect(css).toMatch(/--accent:\s*#3b82f6/i);
    expect(css).toMatch(/--text-muted:\s*#8a96a8/i);
    expect(css).toMatch(/\.button-primary\s*{[\s\S]*color:\s*#08111f/i);
    expect(css).not.toMatch(/@keyframes\s+hero-rise/);
    expect(css).not.toMatch(/\.reveal\b/);
    expect(css).not.toMatch(/backdrop-filter/);
    expect(css).not.toMatch(/linear-gradient|radial-gradient|text-shadow/);
  });
});
