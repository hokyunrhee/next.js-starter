# π Folder Structure

    .
    βββ ...
    βββ components
    β   βββ molecules
    β   β   βββ Example
    β   β   β   βββ index.tsx                   # Export component
    β   β   β   βββ Example.tsx                 # Presentational component is concerned with how things look.
    β   β   β   βββ Example.spec.tsx            # Test code
    β   β   β   βββ ExampleContainer.tsx        # Container component is concerned with side effects(I/O, network, etc.).
    β   β   β   βββ ExampleContainer.spec.tsx   # Test code
    β   β   β   βββ exampleReducer.ts           # Reducer is concerned with logic/business rules.
    β   β   β   βββ exampleReducer.spec.ts      # Test code
    β   β   βββ ...
    β   βββ ...
    βββ ...

Reducer λμ  Custom HookμΌλ‘ λμ²΄ν΄λ λ¬΄λ°©ν©λλ€.

> **Q. μ μ λ κ² λλμ΄ λμμ΅λκΉ?**  
> A. νμ€νΈ κ°λ₯ν μ½λλ₯Ό μμ±νκΈ° μν΄μλ κ΄μ¬μ¬λ₯Ό λΆλ¦¬ν΄μΌ ν©λλ€. λ€μκ³Ό κ°μ΄ μΈκ°μ§ ν­λͺ©μΌλ‘ κ΅¬λΆνμμ΅λλ€.
>
> - Display/UI Components
> - Program logic/business rules β the stuff that deals with the problem youβre solving for the user.
> - Side effects (I/O, network, disk, etc.)

# Atomic Design

![atomic design](https://user-images.githubusercontent.com/4838076/33235048-d083dca6-d217-11e7-9aea-9a5ef5ae6fe7.png)

### Atoms

Atomμ κ°μ₯ μμ μ»΄ν¬λνΈ λ¨μμλλ€. μλ₯Ό λ€μ΄ buttons, titles, input, fonts λ±μ΄ ν΄λΉν©λλ€. Atomμ μ΄λ ν κ³³μλ μ¬μ©λ  μ μμ΅λλ€. λν μ¬λ¬κ°μ§ ui-stateλ₯Ό κ°μ μ μμ΅λλ€. μλ₯Ό λ€μ΄ λ²νΌμ disabled, hover, different sizes λ±μ μνκ° μ‘΄μ¬ν©λλ€.

### Molecules

Moleculeμ νλ μ΄μμ Atomκ³Ό μ‘°ν©νμ¬ λ§λ€μ΄μ§λλ€. λ³΅μ‘ν κ΅¬μ± μμλ₯Ό κ΅¬μ±νκΈ° μμν©λλ€. Atomμ μ΄μ©νμ¬ μ΄λ ν κΈ°λ₯μ΄λ λμμ μνν  μ μμ΅λλ€.

### Organisms

Organismμ Atom, Moleculeκ³Ό μ‘°ν©νμ¬ λ§λ€μ΄μ§λλ€. νλ©΄μ κ°λ³ λΆλΆμ κ΅¬μ±ν©λλ€.

### Templates

Templateμ λ μ΄μμ, μμ΄μ΄ νλ μμλλ€. κ΅¬μ± μμκ°μ μμΉ, λ°°μΉλ₯Ό μ νκ²λ©λλ€.

### Pages

κ΅¬μ± μμλ€μ μ‘°ν©νμ¬ νλμ ννλ¦Ώμ μ μ©ν κ²°κ³Όλ¬Όλ‘ μ¬μ©μκ° κΆκ·Ήμ μΌλ‘ λ³΄κ²λ  λ΄μ©μλλ€.

### Rules

- atoms, molecules, organisms κ°κ°μ μμ μ marginκ³Ό positionμ μ€μ νμ§ μλλ€.
- μμ λ¨κ³μμ νμ λ¨κ³μ marginκ³Ό positionμ μ€μ ν  μ μλ€.
- emplates have only one function: to set the grid of pages but never positions of specific components;
- Pages render the components with a template defined and itβs here that the Atomic Design will be connected to the rest of the application;

# π€ Don't use React.FC

React.FCλ₯Ό μ¬μ©νλ κ²μ μ§μν©λλ€. λ€μκ³Ό κ°μ μ΄μ κ° μμ΅λλ€.

1. μ¬μ©νμ§ μλ νΈμ΄ λ κ°λ¨νκ³  μ΅μν©λλ€.
2. children propμ΄ μ΅μλλ‘ ν¬ν¨λμ΄ props νμμ΄ λͺννμ§ λͺ»ν©λλ€.
3. defaultPropsκ° μ μμ μΌλ‘ λμνμ§ μμ΅λλ€. defaultProps μ¬μ©νμ¬ propsμ μ΄κΈ° κ°μ μ€μ νμ¬λ κ°μ μΈμνμ§ λͺ»ν©λλ€.

λ€μκ³Ό κ°μ΄ ν¨μν μ»΄ν¬λνΈλ₯Ό μμ±ν  μ μμ΅λλ€.

```tsx
import React from 'react';

type Image = {
  src: string;
  alt: string;
};

export interface CardProps {
  image?: Image;
  title: string;
  content: string;
}

export const Card = ({ image, title, content }: CardProps) => {
  return (
    <div>
      {image && <img src={image.src} alt={image.alt} />}
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};
```

# Reference

- [Unit Testing React Components](https://medium.com/javascript-scene/unit-testing-react-components-aeda9a44aae2)
- [atomic design](https://bradfrost.com/blog/post/atomic-web-design/)
- [react-atomic-design](https://github.com/danilowoz/react-atomic-design)
- [Atomic Design and ReactJS](https://danilowoz.com/blog/atomic-design-with-react)
- [Ducks: Redux Reducer Bundles](https://github.com/erikras/ducks-modular-redux)
