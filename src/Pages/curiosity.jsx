const Curiosity = () => {
    const customStyle = {
        background: 'url("../assets/Areas/black.png")',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100vh', 
        width: '100vw',   
    };

    const articleStyle = {
        flexBasis: '40%',  
        padding: '20px',   
    };

    const listStyle = {
        flexBasis: '60%',  
        padding: '20px',   
    };

    return ( 
        <div style={customStyle}>
            <div style={articleStyle}>
                <ArticleComp 
                    title={"What can Curiosity, wonder and awe do for you?"}  
                    subtitle={"Research shows that experiencing curiosity and awe can immensely benefit our mental, physical, and professional health. Here's a brief overview of what curiosity and awe can do for you."} 
                />
            </div>
            
            <div style={listStyle}>
                <ListComp />
            </div>
        </div>
    );
}



export const ArticleComp = ({title, subtitle}) => {
    const titleStyle = {
        color:  'white',
        fontSize: '55px',  
        fontFamily: 'sans-serif',          
    };
    const subTitleStyle = {
        fontWeight: 'normal',
        color: 'white',
        fontSize: '32px',  
        fontFamily: 'serif',  
        opacity : '0.8'
    };
    return <div style={
        {
            display: 'flex',
            flexDirection: 'column',
        }
    }> 
    <p style={titleStyle}>
        {title}
    </p>
    <p style={subTitleStyle}>
        {subtitle}
        </p>
    </div>
   
    
}
const Tile = ({ text }) => {
    const tileStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        borderBottom: '0.5px solid white',  
        fontSize: '18px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
    };

    const textStyle = {
        width: '90%',
        fontSize: '18px',
        padding: '5px',
    };
    const plusStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        cursor: 'pointer',
    };

    return (
        <div style={tileStyle}>
            <span style={textStyle}>{text}</span>
            <span style={plusStyle}>+</span>
        </div>
    );
};

const ListComp  = () =>{
    const faqs =[
        "What is Curiosity?",
        "What is Awe?",
        "How can curiosity and awe benefit me?",
        "How can I experience more curiosity and awe?",
        "What are some examples of curiosity and awe?",
        "Does Fluid AI have any resources on curiosity and awe?",
        "How can I learn more about curiosity and awe?"
    ]
    return (
        <div>
            {faqs.map((faq) => (
                <Tile text={faq} />
            ))}
        </div>
    );
}
export default Curiosity;