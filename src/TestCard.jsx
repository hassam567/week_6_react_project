const TestCard = () => {
    return (
        <>
            <div className="container mt-5">

                {/* Outer DIV */}
                <div className="d-flex flex-column border rounded-1" style={{width: '260px'}}>
                    {/* Image Section */}
                    <div style={{width: '100%'}}>
                        <img src="https://picsum.photos/360" width="100%" alt="Lorem Image" style={{objectFit: 'cover'}}/>
                    </div>

                    {/* content section */}
                    <div className="mt-2 px-2">
                        <p className="text-center"><b>Product Title</b></p>
                        <p className="text-sm text-muted align-justify">Lorem ipsum dolor sit, elit. Voluptate, mollitia?</p>
                    </div>


                    {/* Footer Section */}
                    <div className="bg-secondary border">
                        <h2>Footer</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TestCard;