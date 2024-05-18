import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <>
      <h2>About</h2>
      <User />
      <UserClass name={"Amtul Class"} location={"Hyderabad"} />
    </>
  );
};

export default About;
