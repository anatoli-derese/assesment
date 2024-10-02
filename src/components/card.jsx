const Card = ({title, subtitle, width = '30%' , height = "60%"}) => {
    const customStyle = {
        width: width,
        height: height,
        borderRadius: '10px',
        border: '0.3px solid white',
        color: 'white',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        margin: '5px',
        padding: '10px' 
    };

    const subTitleStyle = {
        fontWeight: 'normal',
        fontSize: '22px',  
        fontFamily: 'serif',  
        padding: '5px'  
    };

    const titleStyle = {
        fontSize: '35px',  
        fontFamily: 'sans-serif',  
        padding: '5px' 
    };

    return ( 
        <div style={customStyle}>
            <p style={subTitleStyle}>
                {subtitle}
            </p>    
            <h1 style={titleStyle}>
                {title}
            </h1>
        </div>
    );
}
 
export default Card;
