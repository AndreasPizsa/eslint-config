module.exports = {
  "extends": "standard",
  "rules": {
    "curly": "off",
    "func-call-spacing": "off",
    "no-multi-spaces": [ "warn", {
      "exceptions": {
        "VariableDeclaration": true,
        "VariableDeclarator": true,
        "BinaryExpression": true,
        "ImportDeclaration": true,
        "CallExpression": true,
        "FunctionDeclaration": true,
        "AssignmentExpression": true,
        "ArrayExpression": true
      }
    }],
    "key-spacing": "off",
    "padded-blocks": "off"
  },
  "overrides": [
    {
      "files": "**/*.test.js",
      "env": {
        "node": true,
        "mocha": true
      },
      "globals": {
        "expect": true
      },
      "rules": {
        "no-unused-expressions": "off"
      }
    }
  ]
}
