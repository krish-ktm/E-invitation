import cardData from "../api/card-data.json";
import { MovieCard } from "./MovieCard";

export const CardCompo = () => {
    return (
        <ul className="flex flex-wrap justify-center gap-10">
            {cardData.map((currentEl) => (
                <MovieCard key={currentEl.id} data={currentEl} />
            ))}
        </ul>
    );
};
