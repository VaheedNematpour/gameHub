interface Props {
  platform: string;
}

function PlatformIcon({ platform }: Props) {
  return (
    <>
      {platform.toLowerCase() === "playstation" && <p>P</p>}
      {platform.toLowerCase() === "xbox" && <p>X</p>}
      {platform.toLowerCase() === "pc" && <p>PC</p>}
    </>
  );
}

export default PlatformIcon;
