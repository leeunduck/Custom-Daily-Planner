/** commitlint.config.cjs */
module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      // CDP-123 chore⚙️(scope): subject
      headerPattern:
        /^(CDP-\d+)\s(feat✨|fix🐛|refactor🔨|style🎨|chore⚙️|docs📝|test🧪)\(([^)]+)\):\s(.+)$/,
      headerCorrespondence: ["ticket", "type", "scope", "subject"],
    },
  },
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat✨", "fix🐛", "refactor🔨", "style🎨", "chore⚙️", "docs📝", "test🧪"],
    ],
    "scope-empty": [2, "never"],
    "subject-empty": [2, "never"],
    "header-max-length": [2, "always", 120],
  },
};
