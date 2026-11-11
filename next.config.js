/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  sassOptions: {
    // Bootstrap 5.3 and the Sandbox theme still use Sass @import, global colour functions and old if() syntax,
    // which Dart Sass 1.8x+ deprecates. This only silences those terminal warnings; the compiled CSS is unchanged
    // (verified byte-for-byte, Nov 2026). Revisit when Bootstrap moves to Sass modules.
    silenceDeprecations: [
      'import',
      'global-builtin',
      'color-functions',
      'if-function',
      'abs-percent',
      'adjacent-compounds',
      'legacy-js-api'
    ],
    quietDeps: true
  }
};

module.exports = nextConfig;
