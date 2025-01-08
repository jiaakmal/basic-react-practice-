/* React call these functions and pass value to this props/argument under the hood . We only use 
 these functions just like html elements ... And value used as props are in the form of objects 
 key value pair..
 function CoreConcept(props) {
  return (
   <li>
    <img src={props.image} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
    </li>
  );*/

  export function CoreConcept({image , title , description}) {
    return (
     <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      </li>
    );
  }
