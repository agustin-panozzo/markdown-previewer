import { useDispatch, useSelector } from 'react-redux';
import { changeText } from './redux/slice';

const EditorBlock = () => {
    const dispatch = useDispatch();
    const text = useSelector(state => state.editor.text);

    const onChange = (e) => {
        dispatch(changeText(e.target.value))
    }

    return (
        <div className="editor-container">
            <div id="editor-header" className="header">
                <p>Editor</p>
            </div>
            <div id="editor-content">
                <textarea id="editor" value={text} onChange={onChange}></textarea>
            </div>
        </div>
    );
}

export default EditorBlock;