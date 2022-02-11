const fs = require('fs');

const msgPath = process.argv[2];
const msg = fs.readFileSync(msgPath, 'utf-8').trim();
const commitRE =
  /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?: .{1,50}/;
const mergeRE = /Merge /;
if (!commitRE.test(msg) && !mergeRE.test(msg)) {
  console.error(
    `
invalid commit message: "${msg}".

Proper commit message format is required for automated changelog generation.

Examples:

- fix(Button): incorrect style
- feat(Button): incorrect style

Allowed Types:

- feat
- fix
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore
- revert
`
  );
  process.exit(1);
}
