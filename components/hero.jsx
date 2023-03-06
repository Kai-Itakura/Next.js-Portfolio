const Hero = ({ title, subtitle = false }) => {
    return (
        <div>
            <h1>{title}</h1>
            {subtitle && <p>{subtitle}</p>}
        </div>
    );
}

export default Hero;