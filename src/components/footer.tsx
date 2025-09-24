import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

import { Logo } from "@/components/logo";
import { menuItems } from "./consts";

export const FooterSection = () => {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          aria-label="Home"
          className="mx-auto flex size-fit items-center space-x-2"
        >
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {menuItems.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link
            href="https://github.com/usrmaia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground hover:text-primary block"
          >
            <FaGithub className="size-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/srmaia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary block"
          >
            <FaLinkedin className="size-6" />
          </Link>
          <Link
            href="https://wa.me/5588992465315?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-muted-foreground hover:text-primary block"
          >
            <FaWhatsapp className="size-6" />
          </Link>
          <Link
            href="https://www.instagram.com/srma.ia/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted-foreground hover:text-primary block"
          >
            <FaInstagram className="size-6" />
          </Link>
        </div>
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} usrmaia, Todos os direitos
          reservados.{" "}
        </span>
      </div>
    </footer>
  );
};
