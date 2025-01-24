

export const MovieCard = (data) => {

    const { img_url, name, genre, description } = data.data;


    return (
        <li>
            <img
                src={img_url}
                width="40%"
                height="40%"
                alt={name}
            />

            <h2>{name}</h2>

            <h3>{genre}</h3>

            <p>{description}</p>

            {/* {age >= 20 && <button>Watch Now</button>} */}

            <a href={img_url} target="_blank">

                <button>Watch Now</button>
            </a>

        </li>
    )
}