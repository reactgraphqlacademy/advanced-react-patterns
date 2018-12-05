import React from 'react'
import Example from './example'
import Exercise from './exercise'

const Page = (props) => (
  <div>
    <h2>Variants</h2>
    <p>
      The variant style utilities allow you to define reusable style objects in your theme for things like text styles and color combinations.
    </p>

    <h3>Example</h3>
    <p>
      In this example, you will see how we can define Button Variants, and effectively apply it to our components.
    </p>
    <Example />
    <hr/>
    <h3>Exercise</h3>
    <p>
      The goal of this exercise is to create variants for some alert components. In this simple example, we can focus on changing the <code>background-color</code> & <code>color</code> of each variant.
    </p>
    <p>
      the variants should be:
    </p>
    <ul>
      <li>default</li>
      <li>success</li>
      <li>warning</li>
      <li>error</li>
    </ul>
    <Exercise />
  </div>
)

export default Page;
