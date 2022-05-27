import React from "react";

const Text = (props) => {
    const text = React.useRef(null);
    const hoverEvent = () => {
        text.current.style.backgtound= "yellow";
    }
    React.useEffect(() => {
        text.current.addEventListener("mouseover", hoverEvent);

        return () => {
            text.current.removeEventListener("mouseover", hoverEvent);
        }
    }, []); //리액트 훅 중 하나. componentDidMount, componentDidUpdate일 때 동작하는 부분이 여기예요.

    return <h1 ref={text}>텍스트입니다!</h1>;
    
}

export default Text;