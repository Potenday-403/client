export function Avatar(imageurl: string) {
  return (
    <div>
      <img
        className="h-16 w-16 rounded-full object-cover"
        alt="userimg"
        src={imageurl}
      />
    </div>
  );
}
