import {socialsInfo} from "../constants";

const Social = () => {
  return (
    <div>
        {socialsInfo.map((social) => (
          <div className="hero text-center rounded-full border border-blue-700 p-3 my-3">
            <p>{social.name}</p>
          </div> 
        ))}
    </div>
  )}

export default Social