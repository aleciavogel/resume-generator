/* eslint-disable no-template-curly-in-string */

import dateFormat from 'dateformat'
import { promisify } from 'util'
import { readFile } from 'fs'

const readFileAsync = promisify(readFile)

// the *.hbs template and partials should be passed as strings of contents
const template = readFileAsync('./bin/default-template.hbs')
const commitTemplate = readFileAsync('./bin/commit-template.hbs')
let choreMessage: string
if (process.env.GITHUB_ACTIONS) {
  // CI IS SET
  choreMessage = ':construction_worker: chore(release): ${nextRelease.version}'
} else {
  // CI IS NOT SET
  choreMessage = ':construction_worker: chore(release): ${nextRelease.version} [skip ci]'
}

const config = {
  release: {
    defaultBranch: 'main',
    branches: [
      '+([0-9])?(.{+([0-9]),x}).x',
      'main',
      'next',
      'next-major',
      {
        name: 'beta',
        prerelease: true,
      },
      {
        name: 'alpha',
        prerelease: true,
      },
    ],
  },
  plugins: [
    [
      'semantic-release-gitmoji',
      {
        // NOTE: These are categorized by the gitmojis.json found here
        // https://raw.githubusercontent.com/carloscuesta/gitmoji/master/packages/gitmojis/src/gitmojis.json
        // You can run the script repo_scripts/gitmojiSemVer-Extract.js to print out an updated array to paste here.
        releaseRules: {
          major: [
            ':boom:', // Introduce breaking changes.
          ],
          minor: [
            ':sparkles:', // Introduce new features.
          ],
          patch: [
            ':ambulance:', // Critical hotfix.
            ':bug:', // Fix a bug.
          ],
          // These are non-user-facing and should not impact the version number.
          // ':art:', // Improve structure / format of the code.
          // ':broom', // Chores, maintenance, and cleanup.
          // ':construction:', // Work in progress.
          // ':memo:', // Add or update documentation.
          // ':recycle:', // Refactor code.
          // ':white_check_mark:', // Add or update tests.
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime(format = 'UTC:yyyy-mm-dd') {
              return dateFormat(new Date(), format)
            },
          },
          issueResolution: {
            template: '{baseUrl}/{owner}/{repo}/issues/{ref}',
            baseUrl: 'https://github.com',
            source: 'github.com',
            removeFromCommit: false,
            regex: /#\d+/g, // example matches: #2341 #8
          },
        },
      },
    ],
    [
      '@semantic-release/changelog',
      {
        changelogFile: 'CHANGELOG.md',
        changelogTitle: '@/ Changelog',
      },
    ],
    [
      '@semantic-release/npm',
      {
        // This needs to be set to false if you want your package.json file to be updated
        // with the correct version number after you do a release.
        // NOTE: If you want to publish your repo to NPM registry, this needs to be modified correctly.
        npmPublish: false,
      },
    ],
    [
      // NOTE: We need this plugin to push our updated package files and CHANGELOG.md from the previous plugins above.
      // review the git repo for more details: https://github.com/semantic-release/git
      // Also read why we need to use this and when we don't need this plugin
      // here: https://semantic-release.gitbook.io/semantic-release/support/faq#making-commits-during-the-release-process-adds-significant-complexity
      '@semantic-release/git',
      {
        // NOTE: add files and directories you want to release into the assets array.
        assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
        message: `${choreMessage}\n\n\${nextRelease.notes}`,
        // message: choreMessage,
      },
    ],
    [
      // NOTE: add files and directories you want to release to GitHub into the assets array.
      // Read about more examples of assets config here:
      // https://github.com/semantic-release/github?tab=readme-ov-file#assets-examples
      '@semantic-release/github',
      {
        releasedLabels: [':rocket: released'],
        assets: [
          {
            path: 'dist/**',
          },
        ],
      },
    ],
  ],
  extends: ['semantic-release-config-gitmoji'],
}

export default config
