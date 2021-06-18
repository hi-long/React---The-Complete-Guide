import classes from './Input.module.css'

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input
                {...props.input}
                onChange={event => props.inputChangeHandler(event.target.value)}></input>
        </div>
    )
}

export default Input