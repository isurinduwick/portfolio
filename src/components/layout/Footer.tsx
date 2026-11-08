import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer>© {new Date().getFullYear()} {profile.name}</footer>
  );
}
