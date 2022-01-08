const Card = ({ data }) => {
  return (
    <div class="card">
      <img src={data.images.small} alt="Avatar" />
      <div style={{ display: "flex" }}>
        <h2>{data.name}</h2>
        <h2 style={{ marginLeft: "15px" }}>HP :{data.hp}</h2>
      </div>

      <h3>Atttacks:</h3>
      {data.attacks.map((attack, id) => (
        <span key={id}>
          {attack.name} {","}
        </span>
      ))}
      <h3>Abilities:</h3>
      <p>N/A</p>
      {/* {data.abilities.map((ability, id) => (
        <span> {ability.name}</span>
      ))} */}
    </div>
  );
};

export default Card;
