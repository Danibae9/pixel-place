import React from 'react'; // Importing React

// MiddleSection component
function MiddleSection({ setPlatformFilter }) {
    // Rendering the MiddleSection component
    return (
        <div className="middleSection">
            {/* Button to show all products */}
            <button className="btncatalog" onClick={() => setPlatformFilter('')}>
                CATALOG
            </button>
            {/* Button to filter products by PlayStation platform */}
            <button className="btnplay" onClick={() => setPlatformFilter('Ps5')}>
                {/* PlayStation logo */}
                <img src="/images/playlogo.svg" alt="Ps5btn"/>
                {/* Text for PlayStation */}
                <span>PLAYSTATION</span>
            </button>
            {/* Button to filter products by Xbox platform */}
            <button className="btnxbox" onClick={() => setPlatformFilter('Xbox')}>
                {/* Xbox logo */}
                <img src="/images/xboxlogo.svg" alt="xboxbtn"/>
                {/* Text for Xbox */}
                <span>XBOX</span>
            </button>
            {/* Button to filter products by Nintendo Switch platform */}
            <button className="btnswitch" onClick={() => setPlatformFilter('Switch')}>
                {/* Nintendo Switch logo */}
                <img src="/images/switchlogo.svg" alt="switchbtn"/>
                {/* Text for Nintendo Switch */}
                <span>NINTENDO</span>
            </button>
        </div>
    );
}

export default MiddleSection; // Exporting the MiddleSection component
