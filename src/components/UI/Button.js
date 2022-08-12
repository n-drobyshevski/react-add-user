import './Button.module.css';

const Button = (props) => {
    return (
        <button>
            {props.title}
        </button>
    );
};

export default Button;