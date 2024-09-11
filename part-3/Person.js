function Person(props) {
    const vote = props.age >= 18 ? 'Go vote!' : 'Go study!';

    return (
        <div key={props.name}>
            <p>Learn some information about this person:</p>
            <ul>
                <li>Name: {props.name.slice(0, 6)}</li>
                <li>Age: {props.age}</li>
                <ul>
                    Hobbies: {props.hobbies.map(hobby => <li>{hobby}</li>)}
                </ul>
            </ul>
            <h3>{vote}</h3>
        </div>
    )
}