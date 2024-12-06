export interface TeamMember {
  name: string;
  university: string;
  image: string;
  university_image: string;
  pronouns: string;
  roles: string[];
  sub_role: string;
  program: string;
  linkedin: string;
  instagram: string;
  github: string;
  website: string;
  email: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "",
    university: "",
    image: "",
    university_image: "",
    pronouns: "",
    roles: [""],
    sub_role: "",
    program: "",
    linkedin: "",
    instagram: "",
    github: "",
    website: "",
    email: "",
  },
];

export default teamMembers;
