import React from 'react';

// Define the props interface
interface SectionNameProps {
    title: string;
    subTitle: string;
    description?: string;
    titleClassName?: string;  // Optional
    subTitleClassName?: string; // Optional
    descClassName?: string; // Optional
}

// SectionName Component
const SectionName: React.FC<SectionNameProps> = ({
    title,
    subTitle,
    description,
    titleClassName = '',
    subTitleClassName = '',
    descClassName = ''
}) => {
    // Split the subtitle by a special character (e.g., '|') for line breaks
    const subTitleParts = subTitle.split('|');

    return (
        <section className="">
            <h2 className={`text-xl  ${titleClassName}`}>
                {title}
            </h2>
            <h3 className={`mt-2 ${subTitleClassName}`}>
                {subTitleParts.map((part, index) => (
                    <span key={index}>
                        {part}
                        {/* Add a line break after each part except the last one */}
                        {index < subTitleParts.length - 1 && <br />}
                    </span>
                ))}
            </h3>
            {description && (
                <p className={`mt-4  text-gray-600  ${descClassName}`}>
                    {description}
                </p>
            )}
        </section>
    );
};

export default SectionName;
