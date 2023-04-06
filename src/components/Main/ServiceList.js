import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ServiceList({ services }) {

    const navigate = useNavigate();

    const handleService = (key) => {
        const service = services[key].path;
        navigate(`/docs/${service}`, {state:{service: service}});
    }

    return (
        <div className="flex flex-wrap mt-10">
            {services.map((service, key) => (
                <div key={service.name} onClick={event => handleService(key)} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-4 mb-5 hover:-translate-y-2 transition-all duration-300">
                    <img className="w-full rounded overflow-hidden shadow-lg" src={service.imageUrl} alt={service.path}></img>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-xl font-medium text-gray-800">{service.name}</h2>
                        <p className="mt-2 text-gray-600">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
