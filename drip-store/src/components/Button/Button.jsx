import './Button.css'

export const Button = ({ children, widht, height, color, margin }) => {
    return (
        <button className="button"
            style={{
                width: widht,
                height: height,
                color: color,
                backgroundColor: color && '#f5f5f5',
                margin: margin
            }}
        >{children}</button>
    )
} 