import { Project } from "./Project"


export const Projects = () => {
    const projects = [
        {
            name: 'Tax Bill - Web App (80% ready)',
            src:'src/assets/projects/cfdi-webapp.jpg',
            description:`The biggest project so far. This app enables the user to create Tax Bills (mexican government requirement for every sell). 
            It also allows to save the customer and products records, creates personalized PDF files. Currently deployed on Heroku and the uses MongoDB.
            The next step is to embed the app in the main ecommerce platforms to save tons of sellers' time and effort to register and tax bill their sells according to government requirements`,
            tools:'HTML, CSS, JavaSript, React, Node, Redux.',
            link:'https://cfdis.herokuapp.com/'
        },
        {
            name: 'Review App - Web App',
            src:'src/assets/projects/review-webapp.jpg',
            description:'App created in Google Apps Scripts to get, store and show customers review for purchases in Goyito online store. The database is built on a google spreadsheat (very easy to manage and mantain).',
            tools:'HTML, CSS, JavaSript, Google Apps Scripts',
            link:'https://goyito.mx/reviews/index.html'
        },
        {
            name: 'Goyito - Ecommerce',
            src:'src/assets/projects/goyito-ecommerce.jpg',
            description:`Ecommerce built using "Shopify Buy Button". It doesn't use a template, the products are embedded in the website.`,
            tools:'HTML, CSS, JavaSript.',
            link:'https://goyito.mx/'
        },
        {
            name: 'Puffi Baby - Ecommerce',
            src:'src/assets/projects/puffi-ecommerce.jpg',
            description:'Ecommerce created on Shopify platform. The "challenge" here was to personalize the template for the client needs.',
            tools:'HTML, CSS, JavaSript, Liquid.',
            link:'https://puffibaby.com/'
        },
        {
            name: 'MJ Interiores - Website',
            src:'src/assets/projects/mj-website.jpg',
            description:'Website built for my ex-girlfriend (currently my wife). It contains a simple blog with filters by tags.',
            tools:'HTML, CSS, JavaSript.',
            link:'https://mjinteriores.com/'
        },
        {
            name: 'GC Ingenieria - Website',
            src:'src/assets/projects/gc-website.jpg',
            description:'Website redisign from an existing one.',
            tools:'HTML, CSS, JavaSript.',
            link:'https://gcingenieria.com/'
        },
        {
            name: 'Nanolang - Website',
            src:'src/assets/projects/nanolang-website.jpg',
            description:'Local business website. It inlcudes a simple form live quoter.',
            tools:'HTML, CSS, JavaSript.',
            link:'https://nanolang.com/servicios_mantenimiento_puebla.html'
        },
        {
            name: 'AFRUMEX - Website',
            src:'src/assets/projects/afrumex-website.jpg',
            description:"One of my very first websites. Based on a third's template.",
            tools:'HTML, CSS, JavaSript.',
            link:'https://afrumex.com/fruit.html'
        },
        {
            name: 'Cantona Rustic - Website',
            src:'src/assets/projects/cantona-website.jpg',
            description:'Urgent proyect built in few hours. ',
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
