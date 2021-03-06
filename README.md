![npm](https://img.shields.io/npm/v/akar-icons?style=for-the-badge)
![npm](https://img.shields.io/npm/dm/akar-icons?style=for-the-badge)

<a href="https://akaricons.com" target="_blank">
  <img alt="akar icons" src="https://repository-images.githubusercontent.com/306119910/c3a57000-2be0-11eb-88a2-2714f9bafcd4">
</a>

# Akar Icons
A perfectly rounded icon library made for designers, developers, and pretty much everyone.

---

## For Designers
Explore all icons at [akaricons.com](https://akaricons.com). Simply click the icon you'd like to use and paste it to your favorite application (Figma, Sketch, XD).

---

## For developers
Akar icons are currently available as individual React components. Start using it today.

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

## Author
Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa))

## License
[MIT License](./LICENSE), Copyright © 2020-present Arturo Wibawa.
