const Header = (props) => {
  console.log("props");
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <>
      <p>
        {props.name} {props.exercises}
      </p>
    </>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <>
      <Part name={props.name1} exercises={props.exercises1} />
      <Part name={props.name2} exercises={props.exercises2} />
      <Part name={props.name3} exercises={props.exercises3} />
    </>
  );
};

const Total = (props) => {
  console.log(props);
  return (
    <>
      <p>Number of exercises {props.total}</p>
    </>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const course_n = "Half Stack application development";
  const part1_n = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2_n = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3_n = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>

      <hr />

      <h1>Content divided into 3 components Header, content & total.</h1>
      <Header name={course} />
      <Content
        name1={part1}
        exercises1={exercises1}
        name2={part2}
        exercises2={exercises2}
        name3={part3}
        exercises3={exercises3}
      />
      <Total total={exercises1 + exercises2 + exercises3} />
      <hr />
      <h1>With new data structure</h1>
      <Header name={course_n} />
      <Content
        name1={part1_n.name}
        exercises1={part1_n.exercises}
        name2={part2_n.name}
        exercises2={part2_n.exercises}
        name3={part3_n.name}
        exercises3={part3_n.exercises}
      />
      <Total
        total={part1_n.exercises + part2_n.exercises + part3_n.exercises}
      />
    </>
  );
};

export default App;
