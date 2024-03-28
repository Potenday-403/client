type Props = {
  imageurl: string;
};
export function Avatar({ imageurl }: Props) {
  return (
    <div>
      <img
        className="h-12 w-12 rounded-full object-cover"
        alt="userimg"
        src={imageurl}
      />
    </div>
  );
}
