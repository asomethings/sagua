import { PlopTypes } from '@turbo/gen'
import fs from 'node:fs/promises'
import path from 'node:path'

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('Generate a package', {
    description: '',
    prompts: [
      {
        type: 'list',
        name: 'base',
        message: '',
        choices: ['apps', 'packages'],
      },
      {
        type: 'input',
        name: 'name',
        message: 'Package name',
        validate: (input: string) => {
          if (!input.match(/^([a-z0-9-~][a-z0-9-._~]*)?[a-z0-9-~][a-z0-9-._~]*$/)) {
            return 'Invalid NPM package name format'
          }

          return true
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/{{ base }}/{{ name }}/package.json',
        templateFile: 'templates/{{ base }}/package.json.hbs',
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/{{ base }}/{{ name }}/tsconfig.json',
        templateFile: 'templates/{{ base }}/tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/{{ base }}/{{ name }}/__tests__/.gitkeep',
        template: '',
      },
      {
        type: 'add',
        path: '{{ turbo.paths.root }}/{{ base }}/{{ name }}/src/index.ts',
        template: '',
      },
      async ({ base, name }: { name?: string; base?: string }) => {
        if (!base || !name) {
          return 'no name or base provided'
        }

        const root = plop.getDestBasePath()

        console.log(root)

        const swcrc = path.join(root, '.swcrc')
        await fs.link(swcrc, path.join(root, base, name, '.swcrc'))
        return 'linked .swcrc file'
      },
      async ({ base, name }: { name?: string; base?: string }) => {
        if (!base || !name) {
          return 'no name or base provided'
        }

        const root = plop.getDestBasePath()

        console.log(root)

        const swcrc = path.join(root, 'jest.config.ts')
        await fs.link(swcrc, path.join(root, base, name, 'jest.config.ts'))
        return 'linked jest.config.ts file'
      },
    ],
  })
}
