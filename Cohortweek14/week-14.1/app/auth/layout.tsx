import React from "react"

export default function ({children}:{ children:React.ReactNode }) { 
    return (
        <div  >
            <div className="flex justify-center border-b-2">
                20% off on all Products for next few days
                </div>
            {children}
        </div>
    )
}