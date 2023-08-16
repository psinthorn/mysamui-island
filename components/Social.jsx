import {socialsInfo} from "../constants";

const Social = () => {
  return (
    <div className="hero">
      <div className="w-full">
        <h1 className="head_text blue_gradient">Social Us</h1>
          {socialsInfo.map((social) => (
            <div className="text-center rounded-full border border-blue-700 p-3 my-3">
              <p>{social.name}</p>
            </div> 
          ))}
      </div>
    </div>
  )}

export default Social;