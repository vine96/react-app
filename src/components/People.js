function People({name, age, job, photo}){
    return(
        <div>
            <img src={photo} />
            <h2>Nome: {name}</h2> 
            <p>Idade: {age}</p>
            <p>Profissão: {job}</p>
        </div>
    )
}

export default People