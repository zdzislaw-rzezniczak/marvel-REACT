import "../Modal.css";

export default function Modal(props) {

    const {setOpenModal, children} = props

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                    {children}
                {/*<div className="footer">*/}
                {/*    <button onClick={() => {setOpenModal(false); }} id="cancelBtn">*/}
                {/*        Cancel*/}
                {/*    </button>*/}
                {/*    <button onClick={() => {setOpenModal(false);}}>*/}
                {/*        Continue*/}
                {/*    </button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

 Modal;