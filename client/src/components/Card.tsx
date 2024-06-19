// Define the props for the Card component
interface CardProps {
    children: React.ReactNode; // Define the type for children
    bg?: string; // Optional background color prop with a default value
}

const Card: React.FC<CardProps> = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>
            {children}
        </div>
    )
}

export default Card
