const initialState = {
    selectedItem: "",
    randomBox: "",
    projects: [{
            title: "Ondernemersnetwerk",
            description: "Het hoofdproject van identityBuilding. Een verbeterde Belgische bedrijvengids. Op basis van keyword en locatie kan je zoeken naar jouw gewenst bedrijf. De frontend is gebouwd op ReactJs samen met Redux, React Router. Elasticsearch werd ingevoerd om resultaten op een optimale snelheid te laten inladen. Om dit project te ondersteunen met data is er een backend opgebouwd die ik zelf volledig ontwikkeld heb. Deze backend is ontwikkeld in Django, Python. Alle data wordt naar de frontend gestuurd door middel van API's gemaakt met het Django Rest Framework. Hosting, database en elasticsearch werd geregeld via AWS met volgende services: RDS, OpenSearch, Lambda, cloudfront en S3.",
            positions: ["Frontend", "Backend", "Hosten"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Python", "Django", "Django Rest Framework", "Elasticsearch", "RDS", "Route53", "Lambda", "Cloudfront", "S3"],
            urls: ["https://www.ondernemersnetwerk.be"],
            image: require('../../library/images/ondernemersnetwerk.svg').default
        },
        {
            title: "100% Lokaal",
            description: "Naast het nationaal Ondernemersnetwerk is 100% Lokaal ontwikkeld, hetzelfde principe maar lokaal gericht, hier kan je enkel bedrijven vinden in de gekozen stad of gemeente. De frontend is gebouwd op ReactJs samen met Redux, React Router. Elasticsearch werd ingevoerd om resultaten op een optimale snelheid te laten inladen. Om dit project te ondersteunen met data is er een backend opgebouwd die ik zelf volledig ontwikkeld heb. Deze backend is ontwikkeld in Django, Python. Alle data wordt naar de frontend gestuurd door middel van API's gemaakt met het Django Rest Framework. Hosting, database en elasticsearch werd geregeld via AWS met volgende services: RDS, OpenSearch, Lambda, cloudfront, S3.",
            positions: ["Frontend", "Backend", "Hosten"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Python", "Django", "Django Rest Framework", "Elasticsearch", "RDS", "Route53", "Lambda", "Cloudfront", "S3"],
            urls: ["https://www.100procentlokaal.be"],
            image: require('../../library/images/100Lokaal.svg').default
        },
        {
            title: "OSN OnePage",
            description: "identityBuilding had een vrij groot klantenbestand, ieder van deze klant had zijn eigen website nodig. Ik bezorgde een modulaire oplossing waar de klant zelf kon kiezen uit modules die verschillende templates hebben. Op die manier behoudt elke klant zijn eigen stijl, maar op een herkenbare en structurele manier. Dit project werd volledig gerealiseerd in ReactJs met behulp van een backend systeem geschreven in Django, Python die ook gebruikt werd voor het hoofdproject.",
            positions: ["Frontend", "Backend"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Python", "Django", "Django Rest Framework", ],
            urls: ["https://ad-delhaize-nederename.be/", "https://addelhaizelebbeke.be/?lang=nl", "https://adlimal.be/?lang=fr"]
        },
        {
            title: "Catalogusnetwerk",
            description: "Een platform dat Catalogussen, infomagazines en meer van de ondernemer weergeeft. De frontend is gebouwd op ReactJs samen met Redux, React Router. Hosting werd berzorgd door volgende AWS services: Opensearch, CloudFront en S3.",
            positions: ["Frontend"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Route53", "Cloudfront", "S3", "OpenSearch"],
            urls: ["https://www.catalogusnetwerk.be"],
            image: require('../../library/images/catalogusnetwerk.svg').default
        },
        {
            title: "Promonetwerk",
            description: "Een platform dat promoboekjes meer van de ondernemer weergeeft. De frontend is gebouwd op ReactJs samen met Redux, React Router. Hosting werd berzorgd door volgende AWS services: Opensearch, CloudFront en S3.",
            positions: ["Frontend"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Route53", "Cloudfront", "S3", "OpenSearch"],
            urls: ["https://www.promonetwerk.be"],
            image: require('../../library/images/promonetwerk.svg').default

        },
        {
            title: "mijn.stad-gemeente.be",
            description: "Een project speciaal gemaakt voor de steden en gemeenten. Hier kan je alle informatie over de gemeente vinden alsook de infobladen die de gemeente aanbiedt. Dit project werd gemaakt in ReactJs, Hosting werd berzorgd door volgende AWS services: Opensearch, CloudFront en S3.",
            positions: ["Frontend"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Route53", "Cloudfront", "S3", "OpenSearch"],
            urls: ["https://mijn.stad-gemeente.be"],
            image: require('../../library/images/stad-gemeente.svg').default
        },
        {
            title: "Superplanner",
            description: "Superplanner is een soliciatie programma gemaakt door derden. Omdat de stijl van dat programma heel outdated was, bouwde ik een vernieuwde versie hiervoor die connectie maakt met hun database. Dit werd gemaakt in Javascript, HTML en CSS.",
            positions: ["Frontend"],
            stack: ["HTML5", "CSS3", "Javascript"],
            urls: ["https://ad-delhaize-nederename.be/superplanner?lang=nl"]
        },
        {
            title: "OSN Customer Info",
            description: "Omdat het ondersteunen van het Ondernemersnetwerk met correcte data geen makkelijke opdracht was is er een platform gemaakt waar de ondernemer zelf zijn eigen data kan aanvullen. De frontend is gebouwd op ReactJs samen met Redux, React Router. Alle data werd verzonden naar onze backend via API. ",
            positions: ["Frontend", "Backend"],
            stack: ["HTML5", "CSS3", "ReactJs", "Redux", "React Router", "Python", "Django", "Django Rest Framework", ],
            urls: ["https://wijzig.100procentlokaal.be/"]
        },
        {
            title: "Icon library",
            description: "Een eigen gemaakte icon library voor identityBuilding, dit maakt van een simpele svg een React component.",
            positions: ["Frontend"],
            stack: ["ReactJs", "SVG", "Illustrator"],
            urls: [""]
        },
        {
            title: "UI library",
            description: "Om altijd een eigen stijl te gebruiken is er een eigen UI-library gemaakt. Deze components gaan van Buttons, Inputfields, Selectboxes, Labels, Uploadfield, Radiobutton, Checkboxes, Iconpicker, Pagination ui, Table ui, Tabs ui en veel meer. Op basis van props kan je de stijl aanpassen naar wens.",
            positions: ["Frontend"],
            stack: ["ReactJs"],
            urls: [""]
        },
        {
            title: "Geografie Belgie",
            description: "Een complete uitwerking van de geography van Belgie, deze bestaan uit verscillende levels gaan van Land tot alle adressen van Belgie",
            positions: ["Backend"],
            stack: ["Django, Python", "Geospatial data", "OpenSearch"],
            urls: [""]
        },
    ],
};

// const GeneralReducer = (state = initialState, action) => state;
const GeneralReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SELECT_ITEM": {
            return {
                ...state,
                selectedItem: action.value
            };
        }
        case "SELECT_RANDOM": {
            return {
                ...state,
                randomBox: action.value
            };
        }
        default:
            return state;
    }
}


export default GeneralReducer;