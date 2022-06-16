import { Project } from "./Project"


export const Projects = () => {
    const projects = [
        {
            name: 'Tax Bill - Web App (80% ready)',
            src:'assets/projects/cfdi-webapp.jpg',
            description:`Largest project to date. Sales management software that creates (Mexico’s) government required Tax Bills. Records customer and product info. Uses MongoDB, currently deployed in Heroku. 
            Next steps: Embed in ecommerce platforms to ease headaches at the month’s closing. 
            `,
            tools:'HTML, CSS, JavaSript, React, Node, Redux.',
            link:'https://cfdis.herokuapp.com/'
        },
        {
            name: 'Review App - Web App',
            src:'assets/projects/review-webapp.jpg',
            description:'Built in Google Scripts App that records, gets, and shows customer reviews in the Goyito online store. Records data in a google spreadsheat (easy to manage and mantain).',
            tools:'HTML, CSS, JavaSript, Google Apps Scripts',
            link:'https://goyito.mx/reviews/index.html'
        },
        {
            name: 'Goyito - Ecommerce',
            src:'assets/projects/goyito-ecommerce.jpg',
            description:`(My baby!) Ecommerce site built using "Shopify Buy Button". Products are embedded on the website (no template used)`,
            tools:'HTML, CSS, JavaSript.',
            link:'https://goyito.mx/'
        },
        {
            name: 'Puffi Baby - Ecommerce',
            src:'assets/projects/puffi-ecommerce.jpg',
            description:'Ecommerce site on Shopify. Template was personalized to meet the client’s (particular :) needs.',
            tools:'HTML, CSS, JavaSript, Liquid.',
            link:'https://puffibaby.com/'
        },
        {
            name: 'MJ Interiores - Website',
            src:'assets/projects/mj-website.jpg',
            description:'Website built for my ex-girlfriend (currently my wife). Contains a stream-lined blog with filters and tags.',
            tools:'HTML, CSS, JavaSript.',
            link:'https://mjinteriores.com/'
        },
        {
            name: 'GC Ingenieria - Website',
            src:'assets/projects/gc-website.jpg',
            description:'Website redisign for client that rocks in software development (Delphi) and eagle-sight for detail.',
            tools:'HTML, CSS, JavaSript.',
            link:'https://gcingenieria.com/'
        },
        {
            name: 'Nanolang - Website',
            src:'assets/projects/nanolang-website.jpg',
            description:'Website for local business. Offers live quotes. ',
            tools:'HTML, CSS, JavaSript.',
            link:'https://nanolang.com/servicios_mantenimiento_puebla.html'
        },
        {
            name: 'AFRUMEX - Website',
            src:'assets/projects/afrumex-website.jpg',
            description:"My first born! Goyito’s parent company. One of my very first websites (2014). Based on a third-party template.",
            tools:'HTML, CSS, JavaSript.',
            link:'https://afrumex.com/fruit.html'
        },
        {
            name: 'Cantona Rustic - Website',
            src:'assets/projects/cantona-website.jpg',
            description:'Urgent proyect built in a few hours for my favorite uncle.',
            tools:'HTML, CSS, JavaSript.',
            link:'https://cantonarustic.com/'
        },
    ]
    return (
        <div className="row mb-5">
            <h2 className="subtitle">Projects</h2>
            {
                projects.map((p, i) => (
                    <Project
                        key={i}
                        title={p.name}
                        logoSrc={p.src}
                        description={p.description}
                        tools={p.tools}
                        link={p.link}
                    />
                ))
            }


        </div>
    )
}
