const Hero = ({ title, subtitle }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default Hero;