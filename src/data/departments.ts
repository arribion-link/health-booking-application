import { PiSiren, PiBaby, PiHeartbeat } from "react-icons/pi";

interface Department {
    id: number
  logo: React.ElementType;
  name: string;
}

const departments: Department[] = [
  {
    id: 1,
    logo: PiSiren,
    name: "Emergency Department",
  },
  {
    id: 2,
    logo: PiBaby,
    name: "Pediatric Department",
  },
  {
    id: 3,
    logo: PiHeartbeat,
    name: "Obstetric and Gynecology Department",
  },
  {
    id: 4,
    logo: PiHeartbeat,
    name: "Cardiology Department",
  },
  {
    id: 5,
    logo: PiHeartbeat,
    name: "Neurology Department",
  },
  {
    id: 6,
    logo: PiHeartbeat,
    name: "Psychiary Department",
  },
];

export default departments;
