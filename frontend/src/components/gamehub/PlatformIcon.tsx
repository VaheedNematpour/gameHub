import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";

interface Props {
  platform: string;
}

function PlatformIcon({ platform }: Props) {
  return (
    <>
      {platform.toLowerCase() === "playstation" && <FaPlaystation />}
      {platform.toLowerCase() === "xbox" && <FaXbox />}
      {platform.toLowerCase() === "pc" && <FaWindows />}
    </>
  );
}

export default PlatformIcon;
