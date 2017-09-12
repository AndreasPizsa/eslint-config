An [`eslint`](https://eslint.org) configuration based on [`standard`](https://standardjs.com), allowing for flexible vertical alignment and spacing

[![js-standard-style](https://cdn.rawgit.com/standard/standard/master/badge.svg)](http://standardjs.com)

## Usage
```bash
npm i -D @andreaspizsa/eslint-config
```

## Rules

| Option            |      | Benefit                                       |
|-------------------|------|--------------------------------------------------|
|`curly`            |`off` | Concise `if` etc e.g. `if(!x) return`            |
|`func-call-spacing`|`off` | Vertical alignment                               |
|`no-multi-spaces`  |`warn`| Vertically aligned `require`s, `var`, etc        |
|`key-spacing`      |`off` | Vertically aligned `require`s, `var`, etc        |
|`padded-blocks`    |`off` | Vertical spacing                                 |

---
Copyright © 2017 Andreas Pizsa. [MIT license](LICENSE).
