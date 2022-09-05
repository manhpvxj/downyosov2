
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "../../api/axiosClient";

const ProfileContent = () => {
    const { user } = useParams();
    const [userData, setUserData] = useState({});

  useEffect( () => {
    const fetchData = async () => {
      try {
        const res = await axiosClient.get("/" + user);
        setUserData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
    return ( 
      <div class="relative max-w-md mx-auto md:max-w-2xl md:mt-6 min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-16">
        <div class="px-6">
        <div class="flex flex-wrap justify-center">
            <div class="w-full flex justify-center">
                <div class="relative">
                </div>
            </div>
            <div class="w-full text-center mt-20">
                <div class="flex justify-center lg:pt-4 pt-8 pb-0">
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">3,360</span>
                        <span class="text-sm text-slate-400">Photos</span>
                    </div>
                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">2,454</span>
                        <span class="text-sm text-slate-400">Followers</span>
                    </div>

                    <div class="p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-slate-700">564</span>
                        <span class="text-sm text-slate-400">Following</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center mt-2">
            <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">{userData.username}</h3>
            <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
                <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i>Paris, France
            </div>
        </div>
        <div class="mt-6 py-6 border-t border-slate-200 text-center">
            <div class="flex flex-wrap justify-center">
                <div class="w-full px-4">
                    <p class="font-light leading-relaxed text-slate-600 mb-4">An artist of considerable range, Mike is the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm.</p>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}
 
export default ProfileContent;