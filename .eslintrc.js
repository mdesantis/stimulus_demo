module.exports = {
  "env": {
    "es6": true
  },
  "extends": [
    "airbnb-base",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  "overrides": [
    {
      "files": [
        "app/assets/javascripts/**/*.js",
        "app/javascript/**/*.js"
      ],
      "env": {
        "browser": true
      },
      "globals": {
        "App": false,
        "Rails": false,
        "Turbolinks": false
      }
    },
    {
      "files": [
        "app/assets/javascripts/cable.js"
      ],
      "globals": {
        "ActionCable": false
      }
    }
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "eqeqeq": [
      "error",
      "always"
    ],
    "function-paren-newline": [
      "error",
      "consistent"
    ],
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "max-len": [
      "error",
      {
        "code": 120
      }
    ],
    "no-debugger": [
      "warn"
    ],
    "no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "^_"
      }
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "strict": 0
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": `config/webpack/${process.env.NODE_ENV || 'development'}.js`
      }
    }
  }
}
