import { JSX } from "react";
import { Image } from "@nextui-org/react";
import AssetLogo from "@/assets/images/logo-1.png";

export default function Logo({
  className = "w-48",
}: {
  className?: string;
}): JSX.Element {
  return (
    <figure>
      <Image
        className={`${className}`}
        src={AssetLogo.src}
        removeWrapper
        loading="eager"
        radius="none"
        alt="Logo"
        isBlurred
      />
    </figure>
  );
}
