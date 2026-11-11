// ESLint 9 flat config (Next.js 16 removed `next lint`; run `npm run lint`).
// Same rules as the old .eslintrc.json: Next's core-web-vitals set, with three template-era rules turned off.
import nextVitals from 'eslint-config-next/core-web-vitals';

const config = [
  ...nextVitals,
  {
    rules: {
      'import/no-anonymous-default-export': 'off',
      'react/no-unescaped-entities': 'off',
      '@next/next/no-img-element': 'off' // plain <img> is allowed on this site
    }
  },
  { ignores: ['.next/**', 'node_modules/**', 'public/**', 'next-env.d.ts'] }
];

export default config;
