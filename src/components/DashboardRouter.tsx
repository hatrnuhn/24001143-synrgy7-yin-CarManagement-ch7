interface ProtectedProps {
    children: JSX.Element
}

const DashboardRouter: React.FC<ProtectedProps> = ({children}) => {
    return children
}

export default DashboardRouter