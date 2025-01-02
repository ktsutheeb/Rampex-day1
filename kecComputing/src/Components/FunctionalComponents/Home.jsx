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
        <h1>Task1 How camelcase css is converted into normal css?</h1>
        <p>
          when the react component is rendered 2 times one in react rendering
          and other in dom,where it automatically converts into the vanilla
        </p>
        <h1>Task2 How the components are converted into html tags?</h1>
        <p>when react is rendered it also renderd in dom so it converts the component into html tags</p>
      </section>
    </div>
  );
};
export default Home;





