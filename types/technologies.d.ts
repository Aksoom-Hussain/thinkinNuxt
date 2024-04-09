
interface Technology {
    name: string;
    description: string;
}

interface TechnologyCategory {
    heading: string;
    image: string;
    technologies: Technology[];
}

interface TechnologiesData extends Array<TechnologyCategory> {}
