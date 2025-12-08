const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Navadav",
        url: "https://rafeldev.github.io/navadav",
        description: "Soluciones tecnológicas para hacer crecer y modernizar tu negocio",
        logo: "https://rafeldev.github.io/navadav/mainLogo.svg",
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+57 317 890 1234",
            contactType: "customer service",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Bogotá",
            addressCountry: "CO"
        },
        sameAs: [
            "https://www.facebook.com/queueunderstop/",
            "https://www.instagram.com/queueunderstop/",
            "https://www.linkedin.com/company/queueunderstop/",
        ]
    }
    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    )
}

export default JsonLd;