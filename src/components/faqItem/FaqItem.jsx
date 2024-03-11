import React from 'react';

const FaqItem = ({titre, contenu}) => {
    return (
<>
<details>
<summary><h3>{titre}</h3></summary>
<ul>

{contenu.map((item, index) => {
    return <li key={index}>{item}</li>;
})}
</ul>
</details>


</>
    );
};

export default FaqItem;