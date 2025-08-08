import React from 'react';

const Work = ({display}) => {
    const works = [
        { id: 1, title: "amararaja.com", image: 'assets/amararaja.jpg', link: 'https://www.amararaja.com/' },
        { id: 2, title: "advance skin-hair clinic", image: "assets/skinclinic.jpg", link: 'https://www.advanceskinhairclinic.com/' },
        { id: 3, title: "ProFlowers", image: "assets/proflowers.jpg", link: 'https://www.proflowers.com/' },
        { id: 4, title: "MagicPin", image: "assets/magicpin.jpg", link: 'https://www.magicpin.in/' },
        { id: 5, title: "KrishnaAayurveda", image: "assets/yurveda.jpg", link: 'https://krishnaayurved.com/' },
        { id: 6, title: "FruitBae", image: "assets/fruit.jpg", link: 'https://www.fruitbae.com/' },
        { id: 7, title: "FeedoCenter", image: "assets/feed.png", link: 'https://www.fruitbae.com/' },
        { id: 8, title: "EarnX", image: "assets/earnx.png", link: 'https://earnxj.vercel.app/' },
    ];

    return (
        <div>
            <div>
                {/* Heading */}
                {
                    !display && <h2 className="fw-bold display-6">Works</h2>
                }
                <p className="text-muted">Here are some of the projects I've worked on.</p>

                {/* Works Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "20px",
                        marginTop: "20px",
                    }}
                >
                    {works.map((work) => (
                        <a
                            key={work.id}
                            href={work.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={cardStyle}
                        >
                            <div style={imageContainerStyle} className="works-image-container">
                                <img
                                    src={work.image}
                                    alt={work.title}
                                    className="works-image"
                                    style={imageStyle}
                                />
                                {/* Title Overlay */}
                                <div style={titleOverlayStyle}>
                                    <h5 style={titleStyle}>{work.title}</h5>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Work;

/* --- CSS Styles --- */
const cardStyle = {
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    position: "relative",
    textDecoration: "none",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
};

const imageContainerStyle = {
    position: "relative",
    width: "100%",
    height: "250px", 
    overflow: "hidden", 
    borderRadius: "8px",
};

const imageStyle = {
    width: "100%",
    height: "auto",
    display: "block",
    transition: "transform 5s linear", 
};

const titleOverlayStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))",
    padding: "16px",
    textAlign: "center",
};

const titleStyle = {
    color: "white",
    fontSize: "1.25rem",
    fontWeight: "600",
    margin: "0",
};

// Injecting hover effect dynamically
const hoverEffect = `
    .works-image-container:hover .works-image {
      transform: translateY(calc(-100% + 250px)); 
    }

    a:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = hoverEffect;
document.head.appendChild(styleSheet);
