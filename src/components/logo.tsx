import Image from "next/image";

import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <>
      <Image
        src="/logo/logo-icon.svg"
        alt="logo"
        width={18}
        height={18}
        className={cn("text-foreground h-5 w-auto", className)}
      />
      <Image
        src="/logo/logo-text.svg"
        alt="logo"
        width={78}
        height={18}
        className={cn("text-foreground h-4 w-auto", className)}
      />
    </>
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo/logo-icon.svg"
      alt="logo"
      width={18}
      height={18}
      className={cn("size-5", className)}
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <>
      <Image
        src="/logo/logo-icon.svg"
        alt="logo"
        width={18}
        height={18}
        className={cn("size-7 w-7", className)}
      />
      <Image
        src="/logo/logo-text.svg"
        alt="logo"
        width={78}
        height={18}
        className={cn("size-7 w-auto", className)}
      />
    </>
  );
};
