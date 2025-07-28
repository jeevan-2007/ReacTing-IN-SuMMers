import { useState } from "react";
import MenuList from "./menuList";
import { FaMinus, FaPlus } from "react-icons/fa";
import './MenuItem.css'; // 👈 Import external CSS

export default function MenuItem({ item }) {
    const [displayChildren, setSetDisplayChildren] = useState({});

    function handleToggleChildren(getCurrentId) {
        setSetDisplayChildren(prev => ({
            ...prev,
            [getCurrentId]: !prev[getCurrentId]
        }));
    }

    return (
        <li className="menu-item">
            <div className="menu-header" onClick={() => handleToggleChildren(item.id)}>
                <p className="menu-title">{item.title}</p>
                {item?.children?.length > 0 && (
                    <span className="menu-icon">
                        {displayChildren[item.id] ? (
                            <FaMinus size={16} />
                        ) : (
                            <FaPlus size={16} />
                        )}
                    </span>
                )}
            </div>
            {
                item?.children?.length > 0 && displayChildren[item.id] && (
                    <MenuList list={item.children} />
                )
            }
        </li>
    );
}
