import React from 'react'

function Button(props){
    // props => {className: "o que algém passar ", href: "/"}
    console.log(props);
    return (
        <a href={props.href} className={props.className} >
            {props.children}
        </a>
    );
}
export default Button;








