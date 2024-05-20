"use client";

import { ReactNode } from "react";

export default function Theme({ children }: { children: ReactNode }) {
  return <><style jsx>{`
        #theme {
          background-color: rgb(148 163 184);
        }
    `}</style><div id="theme">{children}</div></>
}
