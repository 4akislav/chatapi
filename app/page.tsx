import Image from "next/image";
import styles from "./page.module.css";

export default function RightSide() {
  return (
    <main content="width=device-width, initial-scale=1.0" >
      <div className="right">
        <div className="profileSection">
          {}
          <h2>Profile</h2>
        </div>
        <div className="chatSection">
          {}
          <h2>Chat</h2>
        </div>
        <div className="inputWrapper">
          <input
            type="text"
            placeholder="Type your message"
            className="input"
            
          />
          <div>
          <img src="https://static-00.iconduck.com/assets.00/send-icon-2048x2020-jrvk5f1r.png"
          width={20}/>
          </div>
        </div>
      </div>
    </main>
  );
}
