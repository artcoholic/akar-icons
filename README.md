# Akar Icons
A perfectly rounded icon library made for designers, developers, and pretty much everyone. 
Play around at [akaricons.com](https://akaricons.com)

---

## For Designers
Explore all icons at [akaricons.com](https://akaricons.com). Simply click the icon you'd like to use and paste it to your favorite application (Figma, Sketch, XD).

## For developers
Akar icons are currently available as individual React components. Start using it with 3-easy steps.

### 1. Install
Install it with npm:

```shell
npm install --save akar-icons
```

### 2. Use
* Import the icons you need into your React project and declare them in your render method:

```jsx
import { ArrowRight, Star, LinkOut } from 'akar-icons';

const MyComponent = () => {
  return (
    <div>
      <ArrowRight />
      <Star />
      <LinkOut />
    </div>
  )
}
```

* Icons can be configured with inline props including inline ```style``` objects:

```jsx
<Star color="yellow" size={32} strokeWidth={3} />
```

* You can also import the whole icon library:
```jsx
import * as Icon from 'akar-icons';

const MyComponent = () => {
  return (
    <div>
      <Icon.ArrowRight />
      <Icon.Star />
      <Icon.LinkOut />
    </div>
  )
}
```

Explore all icons at [akaricons.com](https://akaricons.com).

## Author
- Arturo Wibawa ([@agwibawa](https://twitter.com/agwibawa))