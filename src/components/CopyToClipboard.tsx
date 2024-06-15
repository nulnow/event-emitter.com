"use client";
import React, {useState, useRef} from 'react';
import { flushSync } from 'react-dom';
import classNames from 'classnames';

export const CopyToClipboard = ({children, textToCopy, className}: {children: React.ReactNode, textToCopy: string, className?: string}) => {
  const [shown, setShown] = useState(false);
  const shownRef = useRef<HTMLSpanElement>(null);

  return <span className={classNames(className, "relative")} role="button" onClick={() => {
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        flushSync(() => {
          setShown(true);
        });
        const handler = () => {
          shownRef.current!.removeEventListener("animationend", handler);

          shownRef.current!.classList.remove("loadEvent");
          shownRef.current!.classList.add("loadEventReverse");

          shownRef.current!.addEventListener('animationend', () => {
            flushSync(() => {
              setShown(false);
            });
          });
        };
        shownRef.current!.addEventListener('animationend', handler);
      })
  }}>
    <style>{`
      @keyframes loadevent {
          0% {
              opacity: 0;
              transform: translateY(30px);
          }
          50% {
              opacity: 20%;
              transform: translateY(-2px);
          }
          100% {
              opacity: 100%;
              transform: translateY(0px);
          }
      }
      
      .loadEvent {
          animation: 0.4s ease-in-out loadevent;
      }
      
      @keyframes loadeventUpsideDown {
          0% {
              // opacity: 0;
              transform: translateY(-13px);
          }
          50% {
              // opacity: 20%;
              transform: translateY(2px);
          }
          100% {
              // opacity: 100%;
              transform: translateY(0px);
          }
      }
      
      .loadEventUpsideDown {
          animation: 0.8s ease-in-out loadeventUpsideDown;
      }
      
      @keyframes loadeventReverse {
          100% {
              // opacity: 0;
              transform: translateY(-13px);
          }
          50% {
              // opacity: 20%;
              transform: translateY(2px);
          }
          0% {
              // opacity: 100%;
              transform: translateY(0px);
          }
      }
      
      .loadEventReverse {
          animation: 0.4s ease-in-out loadeventReverse;
      }
    `}</style>
    <span style={{ zIndex: 1 }}>{children}</span>
    {shown && <span ref={shownRef} style={{ zIndex: -1, width: '100%' }} className="loadEventUpsideDown absolute bottom-[-18px] flex justify-center items-center left-0 text-xs text-white bg-green-600 px-1 rounded-bl-md rounded-br-md pt-2">
      <span>Copied!</span>
    </span>}
  </span>
}