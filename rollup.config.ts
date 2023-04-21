/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-20 22:20:59
 * @LastEditTime: 2023-04-21 12:45:56
 * @LastEditors: wsy
 */
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript(),
  ],
})
