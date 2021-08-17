import React from 'react';

const ContainerWrap = (props) => {
    return (
        <div className={props.isFluid ? 'container-fluid' : 'container'}>
            <div className={`row ${props.rowAddClasses}`}>
                <div className={props.colsClasses ? props.colsClasses : "offset-lg-3 col-lg-6"}>
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default ContainerWrap;