import styled from 'styled-components';

const Button =styled.button`
width:150px;
height:50px;
margin:10px 0;
padding:8px 20px;
border-radius:12px;
border:none;
cursor:pointer;
font-family: 'Noto Sans JP', sans-serif;
font-size:14px;


${props => {
    if(props.variant ==='default'){
        return `border:none;
        background-color: rgba(204, 198, 198, 0.568);

        &:hover {
        background-color:grey}`
    }
    if(props.variant === 'outline'){
        return `border:1px solid blue;
        color:blue;
        background-color:white;
        
        &:hover {border:1px solid blue;
        color:rgba(17, 17, 158, 0.877);
        background-color: rgba(138, 138, 216, 0.788)}`;
    }
    if(props.variant === 'text'){
        return `border:none;
        color:rgba(17, 17, 158, 0.877);
        background-color:white;
        
        &:hover {border:none;
        color:rgba(17, 17, 158, 0.877);
        background-color:rgba(130, 130, 200, 0.877)}`;
    }
    if (props.variant === 'disableshadow'){
        return `
        background-color:rgba(17, 17, 158, 0.877);
        color:#fff`
    }
    if (props.variant === 'disabled'){
        return `
        cursor:default;
        border:none;
        background-color: rgba(204, 198, 198, 0.568);
        color:rgba(39, 38, 38, 0.507);

        &:hover {
            color: rgba(224, 198, 198, 0.568);
            background-color:#fff;
        }
        `
    }
}}


${props => {
    switch(props.size){
        case "sm":
            return 'font-size:12px;width:100px;background-color:rgba(17, 17, 158, 0.877);color:white;';

        case "md":
            return 'font-size:16px;width:130px;background-color:rgba(17, 17, 158, 0.877);color:white;';

        case "lg":
            return 'font-size:20px;background-color:rgba(17, 17, 158, 0.877);color:white;';
    }
    return null
}}


${props => {
    switch(props.color){
        case 'default':
            return `
             background-color: rgba(204, 198, 198, 0.568);
        &:hover {
        background-color:grey}
            `;
        case 'primary':
            return `color:white;background-color:rgba(17, 17, 158, 0.877);
            &:hover{
                background-color:blue;
            }`;
        case 'secondary':
            return `color:white;background-color:rgba(0, 0, 0, 0.521);
            &:hover{
                background-color:black;
            }`;
        case 'danger':
            return `color:white;background-color:rgba(255, 0, 0, 0.459);
            &:hover{
                background-color:red;
            }`;
    }
    return null;
}}

${props => {
    if (props.icon === 'start'){
        return `
        &:hover{
            display:flex;
            flex-direction:row-reverse;
            align-items:center;
        }`
    }
}}
`;



export default Button
