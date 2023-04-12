import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import styles from "../../Styles/Document.module.css"
import parse from 'html-react-parser'

interface DocumentProps {
    targetDocument: object;
    showSidebar: boolean;
    setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
    handleSidebar: () => void;
}

interface TargetDocumentProps {
    content: string;
}

export default function Document({ targetDocument, showSidebar, setShowSidebar, handleSidebar }: DocumentProps) {

    const contentRef = useRef<HTMLDivElement>(null);
    const myAwesomeNavRef = useRef<HTMLUListElement>(null);

    
    useEffect(() => {
        const contentDiv = contentRef.current;
        const myAwesomeNav = myAwesomeNavRef.current;

        if (myAwesomeNav === null || contentDiv === null) {
            throw Object.assign(new Error("Can't find element"), { code: 404 });
        }

        myAwesomeNav.replaceChildren();

        const headings = contentDiv.querySelectorAll("h1, h2, h3, h4, h5");

        headings.forEach((heading, index) => {
            const listItem = document.createElement("li");
            const anchor = document.createElement("a");
            anchor.href = `#${heading.textContent}`;
            anchor.textContent = heading.textContent;

            anchor.addEventListener("click", (event) => {
                event.preventDefault();
                const targetElement = heading;
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });

            listItem.appendChild(anchor);
            myAwesomeNav.appendChild(listItem);
        });

        const handleScroll = () => {
            let prevHeading = null;
            for (let i = headings.length - 1; i >= 0; i--) {
                const heading = headings[i];
                const rect = heading.getBoundingClientRect();
                if (rect.top <= 100) {
                    if (!prevHeading || prevHeading.getBoundingClientRect().top > 0) {
                        const activeAnchor = myAwesomeNav.querySelector(`a[href="#${heading.textContent}"]`);
                        if (activeAnchor) {
                            const listItems = Array.from(myAwesomeNav.children as HTMLCollectionOf<HTMLElement>);
                            listItems.forEach(listItem => {
                                listItem.style.fontWeight = listItem === activeAnchor.parentElement ? "bold" : "normal";
                            });
                        }
                        break;
                    }
                    prevHeading = heading;
                }
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [targetDocument]);

    return (
        <div className={`${styles.background} flex-1 p-8 mt-16 bg-gray-100`}>
            <div className={`${styles.content} p-14 max-w-6xl bg-white`} ref={contentRef}>
                <button className="md:hidden mb-4" onClick={handleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div>
                    {(targetDocument as TargetDocumentProps)?.content ? parse((targetDocument as TargetDocumentProps)?.content) : null}
                </div>
            </div>

            <nav className={`${styles.sidebar} fixed`}>
                <ul id="my-awesome-nav" ref={myAwesomeNavRef}></ul>
            </nav>
        </div>
    );
};