const Home = (props) => {
  return (
    <div>
      <section>
        <h4 style={{ textAlign: "center" }}>learning props</h4>
        <h1>§ Magnus is Back HOMEEEE</h1>
        <h2>welcome to {props.place}</h2>
        <h3>
          other jails: {props.jail1},{props.jail2}
        </h3>
      </section>
    </div>
  );
};
export default Home;
