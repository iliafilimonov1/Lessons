import React from "react";
import { Link, useLocation } from "react-router-dom";

const CardDetails = () => {
  // Получение данных о карточке
  const { state } = useLocation();

  return (
    <section className="card-details">
      <div className="max-w-7xl mx-auto px-2">
        <Link
          to="/cards"
          className="inline-flex w-20 text-indigo-500 hover:text-indigo-600 mb-8"
        >
          Go back
        </Link>
        <h2 className="mb-4 text-4xl font-bold text-zinc-800">{state?.name}</h2>
        <div className="max-w-md rounded shadow-lg relative">
          <div className="relative">
            <div className="absolute inset-0 bg-black opacity-30 rounded"></div>
            <img
              className="w-full rounded"
              src={state?.imgSrc}
              alt={state?.title}
            />
          </div>

          <button
            className={`absolute top-0 left-0 m-2 p-2 rounded-full ${
              state?.isFavorite ? "text-indigo-500" : "text-white"
            }`}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
            </svg>
          </button>
          <div className="px-6 py-4">
            <p className="text-gray-600 text-sm mb-2">{state?.description}</p>
            <p className="text-gray-600 text-sm mb-2">{state?.category}</p>
            {state?.rating && (
              <div className="text-yellow-500 mb-2">
                {"★".repeat(Math.floor(state?.rating)) +
                  "☆".repeat(5 - Math.floor(state?.rating))}
              </div>
            )}
            <div className="text-lg font-bold mb-2">{state?.price}$</div>
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
