import './Button.css'

export const Button = ({ children, widht, height, color }) => {
    return (
        <button className="button"
            style={{
                width: widht,
                height: height,
                color: color,
                backgroundColor: color && '#f5f5f5'
            }}
        >{children}</button>
    )
} 