export interface Persona {
  id: number;
  nav:string;
  name: string;
  role: string;
  image: string;
  color: string;
  accent: string;
  tilt: string;
  description:string;
}

export const data: Persona[] = [
  {
    id: 1,
    name: "Hitesh Choudhary",
    nav:'hitesh',
    role: "Founder of Chai code",
    image: "https://img-c.udemycdn.com/user/200_H/272686492_6b9b.jpg",
    color: "from-orange-500 to-amber-600",
    accent: "border-orange-400",
    tilt: "-rotate-2",
    description:'Haan ji, chai ke saath Chaitanya AI pe swagat hai.'
  },
  {
    id: 2,
    name: "Piyus Garg", 
    nav:'piyush_cutie',
    role: "Cutie",
    image: "https://creator-assets.codedamn.com/piyushgarg1-6320712b0abc1d00093a9773/profile-picture/2022-10-29/4cfa97b3e1c9ce1a702c88e126edf90979f1cce0",
    color: "from-orange-600 to-red-500",
    accent: "border-orange-300",
    tilt: "rotate-2",
    description:'Cutie for a reason !'
  }
];