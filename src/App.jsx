import "./App.css";
import TwitterCard from "./components/TwitterCard/TwitterCard";

const App = () => {
  const users = [
    {
      name: "Dan Abramov",
      userName: "@dan_abramov",
      isFollowing: true,
    },
    {
      name: "FC Barcelona Femení",
      userName: "@FCBfemeni",
      isFollowing: false,
    },
    {
      name: "Espinaler 1896",
      userName: "@VermutEspinaler",
      isFollowing: true,
    },
    {
      name: "Didi",
      userName: "@dvidaal",
      isFollowing: false,
    },
  ];

  return (
    <>
      <section className="container-card">
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterCard>
        ))}
      </section>
    </>
  );
};

export default App;
