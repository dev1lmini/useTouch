# React useTouch

React hook for touch events

## Getting Started

### Installing
```
npm i use-touch --save
```

### Useage

```jsx
  import useTouch from 'use-touch';

  const App = () => {
    const element = hovered => 
      <div>
        Tap on me
      </div>;


    const [touchable, touched] = useTouch(element);

    return <div>
      {touchable}
      <span>{touched && 'Just touched'}</span>
    </div>;
  }

```

### Reference
```jsx
const [newReactElement, isTouched] = useTouche(reactElement)
const [newReactElement, isTouched] = useTouche(hovered => reactElement)
```
