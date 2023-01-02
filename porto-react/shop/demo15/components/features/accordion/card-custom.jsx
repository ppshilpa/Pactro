import SlideToggle from 'react-slide-toggle';

import React from 'react';

function Card ( props ) {
    const { title, expanded, adClass } = props;

    function preventUrl ( e ) {
        e.preventDefault();
    }

    return (
        <SlideToggle collapsed={ expanded ? false : true } >
            { ( { onToggle, setCollapsibleElement, toggleState } ) => (
                <div className={ `overflow-hidden ${ adClass }` }>
                    <div className={ `history-header ${ toggleState.toLowerCase() }` } onClick={ onToggle } >
                        <h5>
                            <a href="#" className={ `toggle-button ${ toggleState.toLowerCase() }` } onClick={ ( e ) => preventUrl( e ) }>{ title }</a>
                        </h5>
                    </div>

                    <div ref={ setCollapsibleElement }>
                        <div className="history-body">
                            { props.children }
                        </div>
                    </div>
                </div>
            ) }
        </SlideToggle >
    )
}

export default React.memo( Card );