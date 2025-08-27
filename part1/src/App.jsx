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
// Ensimmäinen versio
const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  // Uusi data struktuuri
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

  // Kaikki osat yhdessä objektissa
  const course_3 = "Half Stack application development";
  const parts_3 = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  // Neljäs versio

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
      <hr />
      <h1>All parts in one object -phase3-</h1>
      <Header name={course_3} />
      <Content
        name1={parts_3[0].name}
        exercises1={parts_3[0].exercises}
        name2={parts_3[1].name}
        exercises2={parts_3[1].exercises}
        name3={parts_3[2].name}
        exercises3={parts_3[2].exercises}
      />
      <Total
        total={
          parts_3[0].exercises + parts_3[1].exercises + parts_3[2].exercises
        }
      />
    </>
  );
};

export default App;
