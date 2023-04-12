import React from 'react'
import { useNavigate } from 'react-router-dom';

interface PlatformListProps {
    platforms: PlatformProp[];
}

interface PlatformProp {
    name: string;
    description: string;
    imageUrl: string;
    path: string;
}

export default function PlatformList({ platforms }: PlatformListProps) {

    const navigate = useNavigate();

    const handlePlatform = (key: number) => {
        const platform = platforms[key].path;
        navigate(`/platform/${platform}`);
    }

    return (
        <div className="flex flex-wrap mt-10">
            {platforms.map((platform: PlatformProp, key: number) => (
                <div key={platform.name} onClick={event => handlePlatform(key)} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-5 hover:-translate-y-2 transition-all duration-300">
                    <img className="w-full rounded overflow-hidden shadow-lg" src={platform.imageUrl} alt={platform.path}></img>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-medium text-gray-800">{platform.name}</h2>
                        <p className="mt-2 text-gray-600">{platform.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}