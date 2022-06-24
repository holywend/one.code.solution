import { AnnotationIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Profile = ({ user, loading }: { user: any; loading: boolean }) => {
  const [showComment, setShowComment] = useState(false);

  if (loading) {
    return (
      <div className="flex justify-center items-center my-8">
        <div
          className="spinner-border animate-spin inline-block w-48 h-48 border-4 rounded-full"
          role="status"
        ></div>
      </div>
    );
  } else {
    return (
      <section id="profile" className="py-12">
        <div className="relative focus-within:ring-2 focus-within:ring-indigo-500">
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
            <div className="flex flex-wrap col-span-1 md:justify-end mx-4">
              <h3 className="text-lg font-semibold text-gray-800">Nama</h3>
            </div>
            <div className="flex flex-wrap col-span-2 justify-start mx-4">
              <h3 className="text-lg text-gray-800">{user.name}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
            <div className="flex flex-wrap col-span-1 md:justify-end mx-4">
              <h3 className="text-lg font-semibold text-gray-800">Email</h3>
            </div>
            <div className="flex flex-wrap col-span-2 justify-start mx-4">
              <h3 className="text-lg text-gray-800">{user.email}</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
            <div className="flex flex-wrap col-span-1 md:justify-end mx-4">
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            </div>
            <div className="flex flex-wrap col-span-2 justify-start mx-4 text-lg text-gray-800">
              <p className="w-full">
                {user.address.street} {user.address.suite}
              </p>
              <p className="w-full">{user.address.city}</p>
              <p> Zip {user.address.zipcode}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
            <div className="flex flex-wrap col-span-1 md:justify-end mx-4">
              <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
            </div>
            <div className="flex flex-wrap col-span-2 justify-start mx-4">
              <p className="text-lg text-gray-800">{user.phone}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
            <a href="/" className="text-blue-700 font-bold flex flex-wrap mx-4 mb-4 md:col-start-2">
              <ChevronLeftIcon className="w-6 h-6" /> <span>Back</span>
            </a>
          </div>
        </div>
      </section>
    );
  }
};

export default Profile;
