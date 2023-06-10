import { Project } from "./Project"


export const Projects = () => {
  const projects = [
    {
      name: 'Mexican Tax Invoice - Shopify App (Work in Progress)',
      src: 'assets/projects/shopify-factura.png',
      description: `A productivity app that allows the merchant to create (Mexico’s) government required Tax Bills (invoice) with few clicks or in automatic. 
      This app will be embeded in Shopify dashboard. Reads merchant order, migrate products with necesary extra data, config client and customer data. 
      Generate complex JSON and encripts using Openssl the merchant certificates. Connects to a web service API that returns an XML and creates the "readable" PDF document.
      It will include the option to add an extension so the customer can generate the invoice for his paid order right in the store. Saving merchant time.`,
      tools: 'Nextjs, Openssl, Prisma (MySQL), Planetscale, Cloudinary, Vercel',
    },
    {
      name: 'Goyito Shop - Ecommerce',
      src: 'assets/projects/goyito-shop.png',
      description: `A COMPLETE ecommerce store. Features: collection pages, individual product pages, search and filter products, cart, 
            shipping and checkout forms, PayPal payments, session management and dashboard for customers and mrechant, login with custom, google or github account, 
            CRUD for products and orders, and more. Pending: improve design.`,
      tools: 'Typescript, Nexjs, NextAuthjs, JWT, SWR, Docker, MaterialUI, Paypal',
      link: 'https://github.com/teocorona/goyito-shop'
    },
    {
      name: 'Tax Bill - Web App (80% ready)',
      src: 'assets/projects/cfdi-webapp.jpg',
      description: `Sales management software that creates (Mexico’s) government required Tax Bills. Records customer and product info. Uses MongoDB, currently deployed in Heroku. 
          Next steps: Embed in ecommerce platforms to ease headaches at the month’s closing. UPDATE: This project maybe will never see the light, I decided to make it just as an embedded app in Shopify.`,
      tools: 'HTML, CSS, JavaSript, React, Node, Redux.',
      link: 'https://cfdis.herokuapp.com/'
    },
    {
      name: 'XML to PDF - Chrome extension',
      src: 'assets/projects/chrome-extension.png',
      description: `Easy to use chrome extension that accepts an XML as input to create a printable version of a mexican invoice as a PDF document. 
        Personalize it with user logo and create a QR code from a URL string. Currently not available in chrome extesion store, just family and friends users. 
        OPEN SOURCE in my GitHub`,
      tools: 'Typescript, React, Nodejs',
      link: 'https://github.com/teocorona/chrome-extension-cfdi4-xml-to-pdf'
    },
    {
      name: 'Calculator - Mobile App',
      src: 'assets/projects/calculator.png',
      description: `My first mobile App. Simple calculator for IOS or android.`,
      tools: 'Typescript, Ract Native',
      link: 'https://github.com/teocorona/calculator-react-native'
    },
    {
      name: 'Review App - Web App',
      src: 'assets/projects/review-webapp.jpg',
      description: 'Built in Google Scripts App that records, gets, and shows customer reviews in the Goyito online store. Records data in a google spreadsheat (easy to manage and mantain).',
      tools: 'HTML, CSS, JavaSript, Google Apps Scripts',
      link: 'https://goyito.mx/reviews/index.html'
    },
    {
      name: 'Goyito - Ecommerce',
      src: 'assets/projects/goyito-ecommerce.jpg',
      description: `(My baby!) Ecommerce site built using "Shopify Buy Button". Products are embedded on the website (no template used)`,
      tools: 'HTML, CSS, JavaSript.',
      link: 'https://goyito.mx/'
    },
    {
      name: 'Puffi Baby - Ecommerce',
      src: 'assets/projects/puffi-ecommerce.jpg',
      description: 'Ecommerce site on Shopify. Template was personalized to meet the client’s (particular :) needs.',
      tools: 'HTML, CSS, JavaSript, Liquid.',
      link: 'https://puffibaby.com/'
    },
    {
      name: 'MJ Interiores - Website',
      src: 'assets/projects/mj-website.jpg',
      description: 'Website built for my ex-girlfriend (currently my wife). Contains a stream-lined blog with filters and tags.',
      tools: 'HTML, CSS, JavaSript.',
      link: 'https://mjinteriores.com/'
    },
    {
      name: 'GC Ingenieria - Website',
      src: 'assets/projects/gc-website.jpg',
      description: 'Website redisign for client that rocks in software development (Delphi) and has an eagle-sight for detail.',
      tools: 'HTML, CSS, JavaSript.',
      link: 'https://gcingenieria.com/'
    },
    {
      name: 'Nanolang - Website',
      src: 'assets/projects/nanolang-website.jpg',
      description: 'Website for local business. Offers live quotes. ',
      tools: 'HTML, CSS, JavaSript.',
      link: 'https://nanolang.com/servicios_mantenimiento_puebla.html'
    },
    {
      name: 'AFRUMEX - Website',
      src: 'assets/projects/afrumex-website.jpg',
      description: "My first born! Goyito’s parent company. One of my very first websites (2014). Based on a third-party template.",
      tools: 'HTML, CSS, JavaSript.',
      link: 'https://afrumex.com/fruit.html'
    },
    {
      name: 'Cantona Rustic - Website',
      src: 'assets/projects/cantona-website.jpg',
      description: 'Urgent proyect built in a few hours for my favorite uncle.',
      tools: 'HTML, CSS, JavaSript.',
      link: 'https://cantonarustic.com/'
    },
  ]
  return (
    <div className="row mb-5">
      <h2 className="subtitle">Projects <small> &nbsp;(some personal and side-projects)</small></h2>
      <h4>There are third party (much larger) projects I can't share.</h4>
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
