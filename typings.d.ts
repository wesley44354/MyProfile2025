interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updateAt: string;
}

interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfo extends SanityBody {
  _type: "pageInfo";

  bio: string;
  role: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
}

export interface Technology extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Skill extends SanityBody {
  _type: "skill";
  image: Image;
  progress: number;
  title: string;
}

export interface Experience extends SanityBody {
  _type: "experience";
  companyDescription: string;
  companyName: string;
  companySite: string;
  companyImage: Image;
  dateStarted: date;
  dateEnded: date;
  isCurrentlyWorkingHere: boolean;
  jobTitle: string;
  points: string[];
  technologies: Technology[];
}

export interface Project extends SanityBody {
  _type: "project";
  title: string;
  image: Image;
  date: string;
  order: string;
  linkToBuild: string;
  summary: string;
  technologies: Technology[];
  isMobile: boolean;
  linkToBuildPlayStore: string;
  linkToBuildApple: string;
}

export interface Social extends SanityBody {
  _type: "social";
  title: string;
  url: string;
}
