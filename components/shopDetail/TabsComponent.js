"use client"; // Add this at the top of the file

import { useState } from "react";

export default function TabsComponent() {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="container mx-auto py-8 px-4 lg:px-0">
      {/* Tabs Header */}
      <div className="flex space-x-8  border-gray-300 pb-4 mb-8">
        <button
          className={`px-4 py-2 font-bold ${
            activeTab === "description"
              ? "buttonBg-color border-b-2 border-mainColor"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`px-4 py-2 font-bold ${
            activeTab === "reviews"
              ? "buttonBg-color border-b-2 border-mainColor"
              : "text-gray-500"
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews (24)
        </button>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "description" && (
          <div>
            <p className="text-gray-600">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla
              sed purus augue, eu euismod tellus. Nam mattis eros nec mi
              sagittis sagittis. Vestibulum suscipit cursus bibendum.
            </p>
            <p className="text-gray-600 mt-4">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex.
              Curabitur blandit justo urna, id porttitor est dignissim nec.
              Pellentesque scelerisque hendrerit posuere.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-600">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.</li>
              <li>
                Vestibulum sodales massa vel ipsum imperdiet malesuada id tempus
                nisl.
              </li>
              <li>
                Etiam nec massa et lectus faucibus ornare congue in nunc.
              </li>
              <li>Mauris eget diam magna, in blandit turpis.</li>
            </ul>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="text-xl font-bold text-gray-800">
              Customer Reviews (24)
            </h3>
            <div className="mt-4">
              <div className="mb-6">
                <p className="text-gray-800 font-bold">John Doe</p>
                <p className="text-sm text-yellow-500">★★★★★</p>
                <p className="text-gray-600 mt-2">
                  Great product! The quality is amazing, and it met all my
                  expectations.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-gray-800 font-bold">Jane Smith</p>
                <p className="text-sm text-yellow-500">★★★★☆</p>
                <p className="text-gray-600 mt-2">
                  Good value for the price. Would recommend it to others.
                </p>
              </div>
              <div className="mb-6">
                <p className="text-gray-800 font-bold">Alex Johnson</p>
                <p className="text-sm text-yellow-500">★★★★★</p>
                <p className="text-gray-600 mt-2">
                  I am very happy with this purchase. Will definitely buy again!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
