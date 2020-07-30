import babel from '@rollup/plugin-babel';

export default {
  input: 'src/icons.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
  },
  external: ['react', 'prop-types'],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
