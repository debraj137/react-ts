type ChildProps = {
    name:string;
    age:number;
}

const Child = ({name, age}:ChildProps) => {
  return (
    <p>{name} is {age} years old</p>
  )
}

export default Child