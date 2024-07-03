import React, { createContext, useLayoutEffect, useState } from "react"

export type DashboardContextType = {
    ordersStylesLink?: HTMLLinkElement,
    carsStylesLink?: HTMLLinkElement,
    carEditStylesLink?: HTMLLinkElement
}

export const DashboardContext = createContext<DashboardContextType>({})

export const DashboardContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [links, setLinks] = useState<DashboardContextType>({})

    useLayoutEffect(() => {
        const createLink = (href: string) => {
            const link = document.createElement('link')
            link.rel = 'stylesheet'
            link.href = href
            link.dataset.disabled = 'false'
            return link
        }
    
        const ordersStylesLink = createLink('../../styles/Dashboard/OrdersList.css')
        const carsStylesLink = createLink('../../styles/Dashboard/CarsList.css')
        const carEditStylesLink = createLink('../../styles/Dashboard/CarAddEdit.css')

        document.head.appendChild(ordersStylesLink)
        document.head.appendChild(carsStylesLink)
        document.head.appendChild(carEditStylesLink)

        setLinks({carEditStylesLink, carsStylesLink, ordersStylesLink})
    }, [])

    return (
        <DashboardContext.Provider value={{ ordersStylesLink: links.ordersStylesLink, carsStylesLink: links.carsStylesLink, carEditStylesLink: links.carEditStylesLink }}>
            {children}
        </DashboardContext.Provider>
    )
}
