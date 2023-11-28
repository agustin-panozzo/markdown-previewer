import { useSelector } from "react-redux";

const Previewer = () => {
    const text = useSelector(state => state.editor.text);

    return (
        <div className="preview-container">
            <div id="preview-header" className="header">
                <p>Previewer</p>
            </div>
            <div id="preview-content">
                <div id="preview">
                    <p>{text}</p>
                </div>
            </div>
        </div>
    );
}

export default Previewer;