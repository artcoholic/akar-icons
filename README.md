![npm](https://img.shields.io/npm/v/akar-icons?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/akar-icons?style=for-the-badge)

# akar-icons
A perfectly rounded icon library made for designers, developers, and pretty much everyone. Explore all of our icons at [akaricons.com](https://akaricons.com). 

<a href="https://akaricons.com" target="_blank">
  <img alt="akar icons" src="https://repository-images.githubusercontent.com/306119910/c3a57000-2be0-11eb-88a2-2714f9bafcd4">
</a>

## Get Started

### 1. Installation
Install with npm:

```shell
npm install --save akar-icons
```

### 2. Usage
Import the icons you need into your React project and declare them in your render method:

```jsx
import { ArrowRight, Star, LinkOut } from 'akar-icons';

const MyComponent = () => {
  return (
    <div>
      <ArrowRight />
      <Star />
      <LinkOut />
    </div>
  );
};

export default MyComponent;
```

Icons can be configured with inline props including inline ```style``` objects:

```jsx
<Star color="yellow" size={32} strokeWidth={3} style={{ display: "block" }}/>
```

Prop | Description | Default
---- | ----------- | -------
`color` | Set the icon color | `currentColor`
`size` | Set the width and height of the svg icon | `24`
`strokeWidth` | Set the stroke width of the icon | `2`
`style` | Add [inline styles](https://facebook.github.io/react/tips/inline-styles.html) to the element | `{}`

You can also import the whole icon library like this:
```jsx
import * as Icon from 'akar-icons';

const MyComponent = () => {
  return <Icon.ArrowRight />
};

export default MyComponent;
```

Explore all of our icons at [akaricons.com](https://akaricons.com).

## Related Projects
* [akar-icons-app](https://github.com/artcoholic/akar-icons-app) - Homepage repo of Akar icons.
* [akar-icons-fonts](https://github.com/artcoholic/akar-icons-fonts) - Akar icons as icon fonts.
* [akar-icons-web-components](https://github.com/awmleer/akar-icons-web-components) - Akar icons as web components, fully customizable and use anywhere.
* [akar-icons-svelte](https://github.com/WilliamVenner/akar-icons-svelte) - Akar icons as Svelte components.
* [blade-akar-icons](https://github.com/codeat3/blade-akar-icons) - A package to easily make use of Akar Icons in your Laravel Blade views.
* [akar_icons_flutter](https://github.com/alann-maulana/akar_icons_flutter) - Akar icons package for Flutter.

## Author
Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa))

## License
[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa.
