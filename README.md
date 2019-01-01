# Effective Alturism Bristol

This is a small, informational site for the EA community in Bristol. You can find it at EABristol.com.

## Usage
- Start a development server with `yarn dev`
  - _Other scripts like `build`, [`format`](#automatic-code-formatting) and [`lint`](#linting) are also available_

## Making Changes
- This site is hosted on [Netlify](https://netlify.com). That means that all you have to do to update the site is push to master and your changes will be deployed automatically.
- If you want to update content, this site uses [MDX](https://mdxjs.com), a kind of Markdown that lets you write JSX too. For the most part, you can ignore this and just write normal markdown in the `content/` folder. Any new files in this folder will automatically generate a new component which can then be imported to a page. See `index.mdx` and `index.jsx` for an example.

- This project was started from [Gatsby Starter Modern](https://github.com/kripod/gatsby-starter-modern)

### 💅 Style management

[styled-components]: https://www.styled-components.com/

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
