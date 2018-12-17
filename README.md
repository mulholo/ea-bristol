- Start a development server with `yarn develop` or `npm run develop`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting) and [`lint`](#linting) are also available_

- This project was started from [Gatsby Starter Modern](https://github.com/kripod/gatsby-starter-modern)

## 💅 Style management

[Rebass][], a React UI component library & design system, is used for styling components. Based on [styled-components][] and [styled-system][], it provides a delightful way for managing styles.

[rebass]: https://jxnblk.com/rebass/
[styled-components]: https://www.styled-components.com/
[styled-system]: https://jxnblk.com/styled-system/

## Developer experience

### Automatic code formatting

[Prettier][] is an opinionated code formatter aiming to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting Prettier is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Linting

- JavaScript is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb-base][].
- Styles are linted by [stylelint][], adhering to the rules specified in [stylelint-config-recommended][].

[lint]: https://en.wikipedia.org/wiki/Lint_(software)
[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb-base]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[stylelint]: https://stylelint.io/
[stylelint-config-recommended]: https://github.com/stylelint/stylelint-config-recommended
