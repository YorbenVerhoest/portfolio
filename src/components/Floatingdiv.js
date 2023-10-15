import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SelectItem } from '../redux/actions';
import { AiOutlineClose } from 'react-icons/ai';
import { BiImages } from 'react-icons/bi';



const FloatingDiv = (props) => {
    const dispatch = useDispatch()
    const ref = useRef()

    let projects = useSelector((state) => state.projects);
    let selectedItem = useSelector((state) => state.selectedItem);
    let randomBox = useSelector((state) => state.randomBox);

    let [renderItems, setRenderItems] = useState()

    useEffect(() => {
        setRenderItems(
            projects.filter(
                item => (item.title.toLowerCase() === selectedItem.toLowerCase() || item.description.toLowerCase() === selectedItem.toLowerCase()
                    || item.positions.includes(selectedItem) || item.stack.includes(selectedItem))
            )
        )
    }, [selectedItem])


    useEffect(() => {
        const handleClickOutside = (event) => {
            console.log(selectedItem)
            if (selectedItem !== '' && ref.current && !ref.current.contains(event.target)) {
            closeHandler('');
            }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);


    const closeHandler = () => {
        dispatch(SelectItem(''))
    }

    return (
        <div ref={ref} className={`Floatingdiv ${props.index} ${(selectedItem !== "" && props.index === randomBox) ? 'active' : ''}`}>
            <AiOutlineClose className="close" onClick={() => closeHandler()} />
            {selectedItem !== "" && props.index === randomBox &&
                <div id="projects">
                    {renderItems.map((res, index) => (
                        <div className="item" key={index}>
                            <figure>
                                {res.image ?
                                    <img src={res.image} alt={res.title}/>
                                    :
                                    <BiImages />
                                }
                            </figure>
                            <div id="background"></div>
                            
                            <div className="info">
                                <h1>{res.title}</h1>
                                <p>{res.description}</p>
                                <span><b>Urls:</b> {res.urls.map((url) => (<a target="_blank" rel="nofollow noreferrer" key={url} href={url}>{url}</a>))}</span>
                                <span><b>Stack:</b> {res.stack.map((stack) => (<label>{stack}</label>))}</span>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default FloatingDiv