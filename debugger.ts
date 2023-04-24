/*
 * @Description:
 * @Author: wsy
 * @Date: 2023-04-20 22:12:59
 * @LastEditTime: 2023-04-24 14:31:07
 * @LastEditors: wsy
 */
import type { InputOptions, OutputOptions } from 'rollup'
import { rollup } from 'rollup'

const inputOptions: InputOptions = {
  input: 'src/index.ts',
}

const outputOptions: OutputOptions[] = [
  {
    file: 'dist/bundle-cjs.js',
    format: 'cjs',
  },
  {
    file: 'dist/bundle-esm.js',
    format: 'esm',
  },
]

async function build() {
  const bundle = await rollup(inputOptions)
  for (const outputOption of outputOptions) {
    const { output } = await bundle.generate(outputOption)
    await bundle.write(outputOption)
  }
  await bundle.close()
}

build()
