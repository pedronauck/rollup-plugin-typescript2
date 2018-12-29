import typescript from 'rollup-plugin-typescript2'

export default [
  {
    input: 'src/index.ts',
    external: id =>
      !id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/'),
    output: {
      format: 'cjs',
      dir: 'dist',
    },
    plugins: [
      typescript({
        rollupCommonJSResolveHack: true,
      }),
    ],
  },
]
