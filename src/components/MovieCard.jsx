export const MovieCard = ({ data }) => {
    const { img_url, name, description } = data;

    // Function to handle button click
    const handleButtonClick = () => {
        window.open(img_url, '_blank'); // Open the image URL in a new tab
    };

    return (
        <li className="max-w-sm mx-auto my-6">
            {/* Apply padding to the card container */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 my-6">
                <img src={img_url} alt={name} className="w-full h-48 object-cover rounded-lg" />
                <div className="space-y-4 p-6">
                    <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                    <p className="text-gray-600 text-sm">{description}</p>
                    <button 
                        onClick={handleButtonClick} 
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                    >
                        Watch Now
                    </button>
                </div>
            </div>
        </li>
    );
};
