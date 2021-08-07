![npm](https://img.shields.io/npm/v/akar-icons?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/akar-icons?style=for-the-badge)

# akar-icons
A perfectly rounded icon library made for designers, developers, and pretty much everyone.

<a href="https://akaricons.com" target="_blank">
  <img alt="akar icons" src="https://repository-images.githubusercontent.com/306119910/c3a57000-2be0-11eb-88a2-2714f9bafcd4">
</a>

## For Designers
Explore all of our icons at [akaricons.com](https://akaricons.com). Simply click the icon you'd like to use then paste it on your favorite application (Figma, Sketch, XD). Your selection is automatically copied to your clipboard.

---

## For developers
This library is made for React developers.

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

Explore all icons at [akaricons.com](https://akaricons.com).

## Related Projects
* [akar-icons-svelte](https://github.com/WilliamVenner/akar-icons-svelte) - Akar icons as Svelte components
* [blade-akar-icons](https://github.com/codeat3/blade-akar-icons) - A package to easily make use of Akar Icons in your Laravel Blade views.

## Author
Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa))

## License
[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa.
