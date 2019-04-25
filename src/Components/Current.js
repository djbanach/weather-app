import React from 'react';

const Current = (props) => {
    return(
        <div className="current__weather">
            {
            props.city && props.country && <p className="weather__key"> Location:
                <span className="weather__value"> { props.city }, { props.country }</span>
            </p>
        }
        {
            props.description && <p className="weather__key"> Description:
                <span className="weather__value"> { props.description }</span>
            </p>
        }
        {
            props.temperature && <p className="weather__key"> Temperature:
                <span className="weather__value"> { props.temperature } F </span>
            </p>
        }
        {
            props.min_temp && props.max_temp && <p className="weather__key"> High/Low:
                <span className="weather__value"> { props.max_temp } F / { props.min_temp } F</span>
            </p>
        }
        {
            props.error && <p className="weather__error">{ props.error }</p>
        }
        </div>
    )
}

export default Current;