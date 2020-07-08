import React from 'react'
import {Link} from 'react-router-dom'

export default function Error() {
    return (
        <div>
        {/* <header className="main-header">
            <h3 className="header-title">
                iran trip planer
            </h3>
            <div className="home-header-about">
            <h1 >
                Plan your trip iran
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed laboriosam corrupti ex id rem temporibus, ipsa repellat nam fuga molestiae saepe nemo officia reprehenderit aliquid accusamus officiis, rerum illum obcaecati quasi esse debitis dolore doloribus quae autem?
            </p>
            </div>
        </header> */}
        <div className="error">
            <h1>Page Not found</h1>
            <Link to='/' className="error-btn">
                back to home
            </Link>
        </div>
        </div>
    )
}
