interface Speaker {
    name: string;
    role: string;
    type: 'keynote' | 'speaker' | 'panelist';
    pronouns: string;
    image: string;
    description: string;
    social: {
      twitter: string;
      linkedin: string;
      github: string;
      website: string;
    };
}
  
export default Speaker;