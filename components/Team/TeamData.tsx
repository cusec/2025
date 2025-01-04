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
    name: "First Last",
    university: "School",
    image: "",
    university_image: "",
    pronouns: "She/Her",
    roles: ["Co-Chair"],
    sub_role: "",
    program: "Computer Science",
    linkedin: "",
    instagram: "",
    github: "",
    website: "",
    email: "",
  },
];

export default teamMembers;
