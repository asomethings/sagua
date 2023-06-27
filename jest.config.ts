import type { Config } from 'jest'

export default {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
} satisfies Config
