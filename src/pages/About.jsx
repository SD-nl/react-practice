import { useEffect, useState, useTransition } from "react";

const About = () => {
  const [users, setUsers] = useState([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const finalData = await response.json();
        startTransition(() => {
          setUsers(finalData);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center flex-col">
      <h1 className="text-5xl font-bold mb-5">Use Effect With Use Transition</h1>

      <p className="font-bold text-xl">Users List :</p>

      {isPending ? (
        <p>Loading Data...</p>
      ) : (
        <div>
          {users.map((user, i) => (
            <p
              className={`${i == 5 ? "text-green-600 font-mono" : "text-black"}`}
              key={i}
            >
              <span>{user.id}.</span> {user.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default About;